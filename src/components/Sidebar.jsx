import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BrainCircuit, BookOpen, Briefcase, MessageSquare, Settings2, User, Activity, Users, LogOut, Menu, ChevronLeft } from 'lucide-react';

export default function Sidebar({ onLogout, userData }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const getNavStyle = ({ isActive }) => ({
    color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
    background: isActive ? 'var(--bg-glass-hover)' : 'transparent',
    textDecoration: 'none',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    borderRadius: '8px',
    transition: 'all 0.2s',
    fontSize: '0.95rem',
    justifyContent: isExpanded ? 'flex-start' : 'center'
  });

  return (
    <aside className="glass-panel" style={{ 
      width: isExpanded ? '260px' : '80px', 
      height: '100vh', 
      position: 'sticky', 
      top: 0, 
      display: 'flex', 
      flexDirection: 'column',
      padding: isExpanded ? '24px 16px' : '24px 8px',
      borderRadius: 0,
      borderTop: 'none',
      borderBottom: 'none',
      borderLeft: 'none',
      transition: 'width 0.3s ease, padding 0.3s ease'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: isExpanded ? 'space-between' : 'center', marginBottom: '40px', padding: isExpanded ? '0 8px' : '0' }}>
        {isExpanded && (
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ background: 'var(--accent-gradient)', padding: '8px', borderRadius: '12px', display: 'flex' }}>
              <BrainCircuit color="white" size={24} />
            </div>
            <h2 style={{ margin: 0, fontSize: '1.4rem' }}>Evolve<span className="text-gradient">AI</span></h2>
          </Link>
        )}
        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
        >
          {isExpanded ? <ChevronLeft size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
        <NavLink to="/dashboard" style={getNavStyle} title="Dashboard">
          <BrainCircuit size={20} /> {isExpanded && <span>Dashboard</span>}
        </NavLink>

        <NavLink to="/tracker" style={getNavStyle} title="Analytics">
          <Activity size={20} /> {isExpanded && <span>Analytics</span>}
        </NavLink>
        
        <NavLink to="/resources" style={getNavStyle} title="Library">
          <BookOpen size={20} /> {isExpanded && <span>Library</span>}
        </NavLink>

        <NavLink to="/jobs" style={getNavStyle} title="Jobs Portal">
          <Briefcase size={20} /> {isExpanded && <span>Jobs</span>}
        </NavLink>

        <NavLink to="/interview" style={getNavStyle} title="Interview Prep">
          <MessageSquare size={20} /> {isExpanded && <span>Interview Prep</span>}
        </NavLink>

        <NavLink to="/community" style={getNavStyle} title="Community">
          <Users size={20} /> {isExpanded && <span>Community</span>}
        </NavLink>

        <NavLink to="/settings" style={getNavStyle} title="Settings">
          <Settings2 size={20} /> {isExpanded && <span>Settings</span>}
        </NavLink>
      </div>
      
      <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border-glass)', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: isExpanded ? 'flex-start' : 'center',
            gap: '12px', 
            background: 'var(--bg-secondary)', 
            padding: isExpanded ? '12px' : '8px', 
            borderRadius: '12px', 
            border: '1px solid var(--border-glass)',
            color: 'var(--text-primary)',
            transition: 'all 0.2s'
          }}>
            <div style={{ background: 'var(--accent-gradient)', borderRadius: '50%', padding: '8px', display: 'flex' }}>
              <User size={16} color="white" />
            </div>
            {isExpanded && (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{userData?.username || 'User'}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>View Profile</span>
              </div>
            )}
          </div>
        </Link>
        <button 
          onClick={onLogout} 
          className="btn-outline" 
          style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '8px', padding: isExpanded ? '12px' : '12px 0' }}
          title="Logout"
        >
          <LogOut size={16} /> {isExpanded && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
