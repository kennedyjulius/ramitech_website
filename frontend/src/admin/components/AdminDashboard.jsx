import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FiUpload, FiLink, FiTrash2, FiEdit2, FiPackage, FiUsers, FiMap, FiGrid, FiLogOut, FiClock, FiActivity } from 'react-icons/fi';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Clear notifications after delay
  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError('');
        setSuccess('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);
  
  // Overview states
  const [activeUsers, setActiveUsers] = useState(0);
  
  // Coming Soon states
  const [comingSoonData, setComingSoonData] = useState([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [newComingSoon, setNewComingSoon] = useState({
    text: '',
    image: '',
    activeTimer: new Date().toISOString().slice(0, 16)
  });
  
  // Internet Packages states
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [newPackage, setNewPackage] = useState({
    name: '',
    speed: '',
    price: ''
  });
  
  // Coverage Area states
  const [coverageAreas, setCoverageAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);
  const [newArea, setNewArea] = useState({
    areaName: '',
    details: '',
    createdBy: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');

    if (!token || !isLoggedIn) {
      navigate('/admin/login', { replace: true });
      return;
    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    // Initial data fetch
    const fetchData = async () => {
      try {
        await Promise.all([
          fetchActiveUsers(),
          fetchComingSoonData(),
          fetchPackages(),
          fetchCoverageAreas()
        ]);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();

    // Set up polling for active users every 30 seconds
    const interval = setInterval(fetchActiveUsers, 30000);

    return () => {
      clearInterval(interval);
    };
  }, [navigate]);

  // Data fetching functions
  const fetchActiveUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/active-users');
      setActiveUsers(response.data.count);
    } catch (err) {
      console.error('Failed to fetch active users:', err);
      setError('Failed to fetch active users count');
    }
  };

  const fetchComingSoonData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/coming-soon');
      setComingSoonData(response.data);
    } catch (err) {
      setError('Failed to fetch coming soon data');
    }
  };

  const fetchPackages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/internet-packages');
      setPackages(response.data);
    } catch (err) {
      setError('Failed to fetch packages');
    }
  };

  const fetchCoverageAreas = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/coverage-areas');
      setCoverageAreas(response.data);
    } catch (err) {
      setError('Failed to fetch coverage areas');
    }
  };

  // Coming Soon handlers
  const handleComingSoonSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Input validation
      const validationErrors = [];
      if (!newComingSoon.text.trim()) validationErrors.push('Announcement text is required');
      if (!newComingSoon.activeTimer) validationErrors.push('Active timer is required');
      
      if (validationErrors.length > 0) {
        setError(validationErrors.join(', '));
        return;
      }

      // Prepare announcement data
      const announcementData = {
        text: newComingSoon.text.trim(),
        image: newComingSoon.image?.trim() || '',
        activeTimer: new Date(newComingSoon.activeTimer).toISOString()
      };

      let response;
      if (selectedAnnouncement) {
        // Update existing announcement
        response = await axios.put(
          `http://localhost:5000/api/coming-soon/${selectedAnnouncement._id}`,
          announcementData
        );
        
        // Update state with new data
        setComingSoonData(prevData => 
          prevData.map(item => 
            item._id === selectedAnnouncement._id ? response.data : item
          )
        );
        setSuccess('Announcement updated successfully!');
      } else {
        // Create new announcement
        response = await axios.post('http://localhost:5000/api/coming-soon', announcementData);
        setComingSoonData(prevData => [...prevData, response.data]);
        setSuccess('Announcement created successfully!');
      }

      // Reset form
      setNewComingSoon({
        text: '',
        image: '',
        activeTimer: new Date().toISOString().slice(0, 16)
      });
      setSelectedAnnouncement(null);
    } catch (err) {
      console.error('Error saving announcement:', err);
      setError(err.response?.data?.message || 'Failed to save announcement. Please try again.');
      
      // Refresh announcements list on error to ensure consistency
      fetchComingSoonData();
    } finally {
      setLoading(false);
    }
  };

  // Package handlers
  const handlePackageSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Input validation
      const validationErrors = [];
      if (!newPackage.name.trim()) validationErrors.push('Package name is required');
      if (!newPackage.speed.trim()) validationErrors.push('Package speed is required');
      if (!newPackage.price || Number(newPackage.price) <= 0) validationErrors.push('Please enter a valid price');

      if (validationErrors.length > 0) {
        setError(validationErrors.join(', '));
        setLoading(false);
        return;
      }

      // Prepare package data
      const packageData = {
        name: newPackage.name.trim(),
        speed: newPackage.speed.trim(),
        price: Number(newPackage.price)
      };

      let response;
      if (selectedPackage) {
        // Update existing package
        response = await axios.put(
          `http://localhost:5000/api/internet-packages/${selectedPackage._id}`,
          packageData
        );
        
        // Update packages state with new data
        setPackages(prevPackages => 
          prevPackages.map(pkg => 
            pkg._id === selectedPackage._id ? response.data : pkg
          )
        );
        setSuccess('Package updated successfully!');
      } else {
        // Create new package
        response = await axios.post('http://localhost:5000/api/internet-packages', packageData);
        setPackages(prevPackages => [...prevPackages, response.data]);
        setSuccess('Package created successfully!');
      }

      // Reset form
      setNewPackage({ name: '', speed: '', price: '' });
      setSelectedPackage(null);
    } catch (err) {
      console.error('Error saving package:', err);
      setError(err.response?.data?.message || 'Failed to save package. Please try again.');
      
      // Refresh packages list on error to ensure consistency
      fetchPackages();
    } finally {
      setLoading(false);
    }
  };

  // Coverage Area handlers
  const handleAreaSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (selectedArea) {
        await axios.put(`http://localhost:5000/api/coverage-areas/${selectedArea._id}`, newArea);
      } else {
        await axios.post('http://localhost:5000/api/coverage-areas', newArea);
      }
      fetchCoverageAreas();
      setNewArea({ areaName: '', details: '', createdBy: '' });
      setSelectedArea(null);
    } catch (err) {
      setError('Failed to save coverage area');
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/admin/login', { replace: true });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <FiUsers className="h-8 w-8 text-[#376b99]" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Active Users</p>
                    <p className="text-2xl font-semibold text-gray-900">{activeUsers}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'coming-soon':
        return (
          <div>
            {error && (
              <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-lg">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 p-4 text-[#376b99] bg-[#376b99]/10 rounded-lg">
                {success}
              </div>
            )}
            <h2 className="text-xl font-semibold mb-4">Coming Soon Announcements</h2>
            <form onSubmit={handleComingSoonSubmit} className="space-y-4 mb-6 bg-white p-6 rounded-lg shadow-sm border-2 border-[#376b99]/10">
              <div>
                <label className="block text-sm font-medium text-gray-700">Announcement Text</label>
                <input
                  type="text"
                  value={newComingSoon.text}
                  onChange={(e) => setNewComingSoon({ ...newComingSoon, text: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#376b99] focus:ring-[#376b99] sm:text-sm"
                  required
                  placeholder="Enter announcement text"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Image URL (Optional)</label>
                <input
                  type="text"
                  value={newComingSoon.image}
                  onChange={(e) => setNewComingSoon({ ...newComingSoon, image: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#376b99] focus:ring-[#376b99] sm:text-sm"
                  placeholder="Enter image URL"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Active Timer</label>
                <input
                  type="datetime-local"
                  value={newComingSoon.activeTimer}
                  onChange={(e) => setNewComingSoon({ ...newComingSoon, activeTimer: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#376b99] focus:ring-[#376b99] sm:text-sm"
                  required
                />
              </div>
              <div className="flex justify-between items-center pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setNewComingSoon({ text: '', image: '', activeTimer: new Date().toISOString().slice(0, 16) });
                    setSelectedAnnouncement(null);
                  }}
                  className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#376b99]"
                >
                  Clear Form
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#376b99] hover:bg-[#376b99]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#376b99]"
                >
                  {loading ? 'Saving...' : (selectedAnnouncement ? 'Update Announcement' : 'Add Announcement')}
                </button>
              </div>
            </form>
            
            <div className="space-y-4">
              {comingSoonData.map((item) => (
                <div key={item._id} className="bg-white border-2 border-[#376b99]/10 rounded-lg p-4 relative hover:border-[#376b99]/30 transition-all duration-200">
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <button
                      onClick={() => {
                        setSelectedAnnouncement(item);
                        setNewComingSoon({
                          text: item.text,
                          image: item.image || '',
                          activeTimer: new Date(item.activeTimer).toISOString().slice(0, 16)
                        });
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-[#376b99] hover:text-[#376b99]/80 transition-colors duration-200"
                      title="Edit Announcement"
                    >
                      <FiEdit2 className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete this announcement?')) {
                          (async () => {
                            try {
                              await axios.delete(`http://localhost:5000/api/coming-soon/${item._id}`);
                              setComingSoonData(comingSoonData.filter(a => a._id !== item._id));
                              setSuccess('Announcement deleted successfully!');
                              if (selectedAnnouncement?._id === item._id) {
                                setSelectedAnnouncement(null);
                                setNewComingSoon({ text: '', image: '', activeTimer: new Date().toISOString().slice(0, 16) });
                              }
                            } catch (err) {
                              setError(err.response?.data?.message || 'Failed to delete announcement');
                              console.error('Error deleting announcement:', err);
                            }
                          })();
                        }
                      }}
                      className="text-red-500 hover:text-red-600 transition-colors duration-200"
                      title="Delete Announcement"
                    >
                      <FiTrash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="pr-16">
                    <p className="font-medium text-[#376b99]">{item.text}</p>
                    <p className="text-sm text-gray-500 mt-1">Timer: {new Date(item.activeTimer).toLocaleString()}</p>
                    {item.image && (
                      <img src={item.image} alt="Announcement" className="mt-2 rounded-md max-h-32 object-cover" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'packages':
        return (
          <div>
            {error && (
              <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-lg">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 p-4 text-[#376b99] bg-[#376b99]/10 rounded-lg">
                {success}
              </div>
            )}
            <h2 className="text-xl font-semibold mb-4 text-[#376b99]">Internet Packages</h2>
            <form onSubmit={handlePackageSubmit} className="space-y-4 mb-6 bg-white p-6 rounded-lg shadow-sm">
              <div>
                <label className="block text-sm font-medium text-gray-700">Package Name</label>
                <input
                  type="text"
                  value={newPackage.name}
                  onChange={(e) => setNewPackage({ ...newPackage, name: e.target.value })}
                  required
                  placeholder="e.g., Basic Plan"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#376b99] focus:ring-[#376b99] sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Speed</label>
                <input
                  type="text"
                  value={newPackage.speed}
                  onChange={(e) => setNewPackage({ ...newPackage, speed: e.target.value })}
                  required
                  placeholder="e.g., 10 Mbps"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#376b99] focus:ring-[#376b99] sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Price (KES)</label>
                <input
                  type="number"
                  value={newPackage.price}
                  onChange={(e) => setNewPackage({ ...newPackage, price: e.target.value })}
                  required
                  min="0"
                  placeholder="e.g., 2999"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#376b99] focus:ring-[#376b99] sm:text-sm"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => {
                    setNewPackage({ name: '', speed: '', price: '' });
                    setSelectedPackage(null);
                  }}
                  className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#376b99]"
                >
                  Clear Form
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#376b99] hover:bg-[#376b99]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#376b99]"
                >
                  {loading ? 'Saving...' : (selectedPackage ? 'Update Package' : 'Add Package')}
                </button>
              </div>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {packages.map((pkg) => (
                <div key={pkg._id} className="bg-white border-2 border-[#376b99]/10 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:border-[#376b99]/30">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-[#376b99]">{pkg.name}</h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          setSelectedPackage(pkg);
                          setNewPackage(pkg);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-[#376b99] hover:text-[#376b99]/80 transition-colors duration-200"
                        title="Edit Package"
                      >
                        <FiEdit2 className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm('Are you sure you want to delete this package?')) {
                            (async () => {
                              try {
                                await axios.delete(`http://localhost:5000/api/internet-packages/${pkg._id}`);
                                setPackages(packages.filter(p => p._id !== pkg._id));
                                setSuccess('Package deleted successfully!');
                                if (selectedPackage?._id === pkg._id) {
                                  setSelectedPackage(null);
                                  setNewPackage({ name: '', speed: '', price: '' });
                                }
                              } catch (err) {
                                setError(err.response?.data?.message || 'Failed to delete package');
                                console.error('Error deleting package:', err);
                              }
                            })();
                          }
                        }}
                        className="text-red-500 hover:text-red-600 transition-colors duration-200"
                        title="Delete Package"
                      >
                        <FiTrash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600"><span className="font-medium">Speed:</span> {pkg.speed}</p>
                    <p className="text-gray-600"><span className="font-medium">Price:</span> KES {pkg.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'coverage':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Coverage Areas</h2>
            <form onSubmit={handleAreaSubmit} className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Area Name</label>
                <input
                  type="text"
                  value={newArea.areaName}
                  onChange={(e) => setNewArea({ ...newArea, areaName: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#376b99] focus:ring-[#376b99] sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Details</label>
                <textarea
                  value={newArea.details}
                  onChange={(e) => setNewArea({ ...newArea, details: e.target.value })}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#376b99] focus:ring-[#376b99] sm:text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#376b99] hover:bg-[#376b99]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#376b99]"
              >
                {loading ? 'Saving...' : (selectedArea ? 'Update Area' : 'Add Area')}
              </button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coverageAreas.map((area) => (
                <div key={area._id} className="border rounded-lg p-4">
                  <h3 className="font-medium">{area.areaName}</h3>
                  <p className="text-sm text-gray-500">{area.details}</p>
                  <div className="mt-2 flex space-x-2">
                    <button
                      onClick={() => {
                        setSelectedArea(area);
                        setNewArea(area);
                      }}
                      className="text-[#376b99] hover:text-[#376b99]/80"
                    >
                      <FiEdit2 className="h-5 w-5" />
                    </button>
                    <button
                      onClick={async () => {
                        try {
                          await axios.delete(`http://localhost:5000/api/coverage-areas/${area._id}`);
                          fetchCoverageAreas();
                        } catch (err) {
                          setError('Failed to delete area');
                        }
                      }}
                      className="text-red-500 hover:text-red-600"
                    >
                      <FiTrash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold text-[#376b99]">Admin Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#376b99] hover:bg-[#376b99]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#376b99]"
              >
                <FiLogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {error && (
          <div className="mb-4 p-4 rounded-md bg-red-50 text-red-500">{error}</div>
        )}

        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-md ${activeTab === 'overview' ? 'bg-[#376b99] text-white' : 'bg-white text-gray-700'}`}
          >
            <FiActivity className="inline-block mr-2" /> Overview
          </button>
          <button
            onClick={() => setActiveTab('coming-soon')}
            className={`px-4 py-2 rounded-md ${activeTab === 'coming-soon' ? 'bg-[#376b99] text-white' : 'bg-white text-gray-700'}`}
          >
            <FiClock className="inline-block mr-2" /> Coming Soon
          </button>
          <button
            onClick={() => setActiveTab('packages')}
            className={`px-4 py-2 rounded-md ${activeTab === 'packages' ? 'bg-[#376b99] text-white' : 'bg-white text-gray-700'}`}
          >
            <FiPackage className="inline-block mr-2" /> Packages
          </button>
          <button
            onClick={() => setActiveTab('coverage')}
            className={`px-4 py-2 rounded-md ${activeTab === 'coverage' ? 'bg-[#376b99] text-white' : 'bg-white text-gray-700'}`}
          >
            <FiMap className="inline-block mr-2" /> Coverage Areas
          </button>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;