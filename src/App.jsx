import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Resources from './pages/Resources';
import Profile from './pages/Profile';
import Jobs from './pages/Jobs';
import Interview from './pages/Interview';
import Settings from './pages/Settings';
import Tracker from './pages/Tracker';
import Community from './pages/Community';
import Auth from './pages/Auth';
import Sidebar from './components/Sidebar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [strictMode, setStrictMode] = useState(false);
  
  const [userData, setUserData] = useState({
    username: 'John Doe',
    email: 'john@example.com',
    currentRole: 'Senior Software Engineer',
    targetRole: 'Machine Learning Engineer',
    location: 'Bangalore, India'
  });

  // Apply theme to document element whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleLogin = (data) => {
    if (data) {
      setUserData(prev => ({ ...prev, ...data }));
    }
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App" style={{ display: 'flex', minHeight: '100vh' }}>
        {isLoggedIn && <Sidebar onLogout={() => setIsLoggedIn(false)} userData={userData} />}
        
        <div style={{ flexGrow: 1, overflowX: 'hidden' }}>
          <Routes>
            {!isLoggedIn ? (
              <>
                <Route path="/login" element={<Auth onLogin={handleLogin} />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard userData={userData} />} />
                <Route path="/tracker" element={<Tracker strictMode={strictMode} />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/interview" element={<Interview />} />
                <Route path="/community" element={<Community />} />
                <Route path="/profile" element={<Profile userData={userData} setUserData={setUserData} />} />
                <Route path="/settings" element={<Settings theme={theme} setTheme={setTheme} strictMode={strictMode} setStrictMode={setStrictMode} />} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
