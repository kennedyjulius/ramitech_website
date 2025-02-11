import React, { useState, useEffect } from "react";

const API_BASE_URL = "http://localhost:5000/api";

const DataComponent = ({ endpoint, method = "GET", body = null, children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('DataComponent rendered with endpoint:', endpoint);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (!endpoint) return;
      
      setLoading(true);
      setError(null);

      try {
        const fullUrl = API_BASE_URL + endpoint;
        console.log('DataComponent: Fetching from:', fullUrl);
        
        const response = await fetch(fullUrl, {
          method,
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          ...(body && { body: JSON.stringify(body) }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('DataComponent: Received data:', result);
        
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        console.error('DataComponent: Fetch error:', err);
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [endpoint, method, body]);

  console.log('DataComponent rendering state:', { loading, error, hasData: !!data });

  if (loading) {
    return (
      <div className="text-center py-4 bg-gray-100 rounded-lg m-4">
        <p className="text-lg">Loading Coming Soon data...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="text-red-500 p-4 border border-red-300 rounded m-4">
        <p className="font-bold">Error loading Coming Soon data:</p>
        <p>{error.message}</p>
        <small>Please check the console for more details.</small>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-yellow-500 p-4 bg-yellow-50 border border-yellow-300 rounded m-4">
        <p>No Coming Soon data available</p>
      </div>
    );
  }

  console.log('DataComponent rendering with data:', data);
  return children(data);
};

export { DataComponent };