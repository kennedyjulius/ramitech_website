import { useEffect, useState } from 'react';
import axios from 'axios';
import AdminPanel from './admin/AdminPanel';

function App() {
  const [content, setContent] = useState({});

  useEffect(() => {
    axios.get('/api/content').then(res => {
      const contentData = res.data.reduce((acc, item) => {
        acc[item.key] = item.value;
        return acc;
      }, {});
      setContent(contentData);
    });
  }, []);

  return (
    <div>
      {/* Public Content */}
      <header>
        <h1>{content.heroText || 'Default Header'}</h1>
        <img 
          src={content.mainImage || 'default-image.jpg'} 
          alt="Main" 
          style={{ maxWidth: '100%' }}
        />
      </header>

      {/* Admin Panel (usually on /admin route) */}
      <AdminPanel />
    </div>
  );
}

export default App;