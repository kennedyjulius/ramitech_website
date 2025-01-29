import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [content, setContent] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const login = async () => {
    try {
      const res = await axios.post('/api/admin/login', credentials);
      localStorage.setItem('adminToken', res.data.token);
      setIsLoggedIn(true);
    } catch (error) {
      alert('Login failed');
    }
  };

  const updateContent = async (key, value) => {
    await axios.put(`/api/admin/content/${key}`, { value }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` }
    });
    setContent(prev => ({ ...prev, [key]: value }));
  };

  if (!isLoggedIn) return (
    <div>
      <input 
        placeholder="Username"
        onChange={e => setCredentials(p => ({ ...p, username: e.target.value }))}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setCredentials(p => ({ ...p, password: e.target.value }))}
      />
      <button onClick={login}>Login</button>
    </div>
  );

  return (
    <div>
      <h1>Admin Panel</h1>
      
      <div>
        <h2>Update Hero Text</h2>
        <input
          value={content.heroText || ''}
          onChange={e => updateContent('heroText', e.target.value)}
        />
      </div>

      <div>
        <h2>Update Main Image URL</h2>
        <input
          value={content.mainImage || ''}
          onChange={e => updateContent('mainImage', e.target.value)}
        />
      </div>
    </div>
  );
};

export default AdminPanel;