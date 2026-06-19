import React, { useState } from 'react';
import { Settings2, Bell, Shield, Smartphone, Moon, Sun } from 'lucide-react';

export default function Settings({ theme, setTheme, strictMode, setStrictMode }) {
  const [emailAlerts, setEmailAlerts] = useState(true);

  return (
    <main className="container animate-fade-in" style={{ padding: '40px 24px', maxWidth: '800px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Agent Settings</h1>
        <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
          Configure how your AI Mentor guides you.
        </p>
      </div>

      <div className="glass-panel" style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          {theme === 'dark' ? <Moon className="text-accent-primary" size={24} /> : <Sun className="text-accent-primary" size={24} />}
          <h2 style={{ margin: 0 }}>Appearance</h2>
        </div>
        
        <div className="flex-between" style={{ padding: '16px 0' }}>
          <div>
            <h4 style={{ margin: '0 0 4px 0' }}>Theme Mode</h4>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>Switch between Light and Dark mode.</p>
          </div>
          <div style={{ display: 'flex', background: 'var(--bg-secondary)', borderRadius: '8px', padding: '4px', border: '1px solid var(--border-glass)' }}>
            <button 
              onClick={() => setTheme('light')}
              style={{ 
                background: theme === 'light' ? 'var(--accent-primary)' : 'transparent', 
                color: theme === 'light' ? 'white' : 'var(--text-secondary)',
                border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', transition: 'all 0.2s',
                display: 'flex', alignItems: 'center', gap: '8px'
              }}
            >
              <Sun size={16} /> Light
            </button>
            <button 
              onClick={() => setTheme('dark')}
              style={{ 
                background: theme === 'dark' ? 'var(--accent-primary)' : 'transparent', 
                color: theme === 'dark' ? 'white' : 'var(--text-secondary)',
                border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', transition: 'all 0.2s',
                display: 'flex', alignItems: 'center', gap: '8px'
              }}
            >
              <Moon size={16} /> Dark
            </button>
          </div>
        </div>
      </div>

      <div className="glass-panel" style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <Settings2 className="text-accent-secondary" size={24} />
          <h2 style={{ margin: 0 }}>Mentor Behavior</h2>
        </div>
        
        <div className="flex-between" style={{ padding: '16px 0', borderBottom: '1px solid var(--border-glass)' }}>
          <div>
            <h4 style={{ margin: '0 0 4px 0' }}>Strict Timeline Mode</h4>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>Adds a 20% buffer to time estimates to ensure you master the concepts.</p>
          </div>
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              checked={strictMode} 
              onChange={() => setStrictMode(!strictMode)}
              style={{ width: '20px', height: '20px', accentColor: 'var(--accent-primary)' }} 
            />
          </label>
        </div>
        
        <div className="flex-between" style={{ padding: '16px 0' }}>
          <div>
            <h4 style={{ margin: '0 0 4px 0' }}>Proactive Recommendations</h4>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>Agent will auto-suggest new papers based on trending topics.</p>
          </div>
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              defaultChecked
              style={{ width: '20px', height: '20px', accentColor: 'var(--accent-primary)' }} 
            />
          </label>
        </div>
      </div>

      <div className="glass-panel">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <Bell className="text-accent-primary" size={24} />
          <h2 style={{ margin: 0 }}>Notifications</h2>
        </div>
        
        <div className="flex-between" style={{ padding: '16px 0', borderBottom: '1px solid var(--border-glass)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Shield size={16} className="text-secondary" />
              <h4 style={{ margin: '0 0 4px 0' }}>Email Job Alerts</h4>
            </div>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>Receive an email when a new high-match job is unlocked.</p>
          </div>
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              checked={emailAlerts}
              onChange={() => setEmailAlerts(!emailAlerts)}
              style={{ width: '20px', height: '20px', accentColor: 'var(--accent-primary)' }} 
            />
          </label>
        </div>

        <div className="flex-between" style={{ padding: '16px 0' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Smartphone size={16} className="text-secondary" />
              <h4 style={{ margin: '0 0 4px 0' }}>Push Notifications</h4>
            </div>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>Get browser notifications for study reminders.</p>
          </div>
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              style={{ width: '20px', height: '20px', accentColor: 'var(--accent-primary)' }} 
            />
          </label>
        </div>
      </div>
    </main>
  );
}
