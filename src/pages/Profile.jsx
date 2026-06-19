import React, { useState } from 'react';
import { User, Mail, Briefcase, MapPin, Code, Cpu, Edit2, Check } from 'lucide-react';

export default function Profile({ userData, setUserData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(userData);

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUserData(editForm);
    setIsEditing(false);
  };

  return (
    <main className="container animate-fade-in" style={{ padding: '40px 24px', maxWidth: '1000px' }}>
      <div className="flex-between" style={{ marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>My Profile</h1>
          <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
            Manage your career transition goals and personal information.
          </p>
        </div>
        <button 
          className={isEditing ? "btn-primary" : "btn-outline"} 
          onClick={isEditing ? handleSave : () => setIsEditing(true)}
        >
          {isEditing ? <><Check size={18} /> Save Changes</> : <><Edit2 size={18} /> Edit Profile</>}
        </button>
      </div>

      <div className="grid-2">
        <div className="glass-panel">
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
            <div style={{ 
              width: '100px', 
              height: '100px', 
              borderRadius: '50%', 
              background: 'var(--accent-gradient)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <User size={48} color="white" />
            </div>
            <div style={{ flexGrow: 1 }}>
              {isEditing ? (
                <input 
                  type="text" 
                  name="username" 
                  value={editForm.username} 
                  onChange={handleChange} 
                  className="form-input" 
                  style={{ marginBottom: '8px', fontSize: '1.2rem', fontWeight: 'bold' }} 
                />
              ) : (
                <h2 style={{ margin: '0 0 8px 0' }}>{userData.username}</h2>
              )}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Email Address</label>
              <div className="form-input" style={{ display: 'flex', alignItems: 'center', gap: '12px', background: isEditing ? 'var(--bg-secondary)' : 'transparent', border: isEditing ? '1px solid var(--border-glass)' : 'none', padding: isEditing ? '12px 16px' : '0' }}>
                <Mail size={18} className="text-muted" /> 
                {isEditing ? (
                  <input type="email" name="email" value={editForm.email} onChange={handleChange} style={{ background: 'transparent', border: 'none', color: 'white', outline: 'none', width: '100%' }} />
                ) : (
                  <span>{userData.email}</span>
                )}
              </div>
            </div>
            
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Current Role</label>
              <div className="form-input" style={{ display: 'flex', alignItems: 'center', gap: '12px', background: isEditing ? 'var(--bg-secondary)' : 'transparent', border: isEditing ? '1px solid var(--border-glass)' : 'none', padding: isEditing ? '12px 16px' : '0' }}>
                <Briefcase size={18} className="text-muted" /> 
                {isEditing ? (
                  <input type="text" name="currentRole" value={editForm.currentRole} onChange={handleChange} style={{ background: 'transparent', border: 'none', color: 'white', outline: 'none', width: '100%' }} />
                ) : (
                  <span>{userData.currentRole}</span>
                )}
              </div>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Target Role</label>
              <div className="form-input" style={{ display: 'flex', alignItems: 'center', gap: '12px', background: isEditing ? 'var(--bg-secondary)' : 'transparent', border: isEditing ? '1px solid var(--border-glass)' : 'none', padding: isEditing ? '12px 16px' : '0' }}>
                <Cpu size={18} className="text-accent-primary" /> 
                {isEditing ? (
                  <input type="text" name="targetRole" value={editForm.targetRole} onChange={handleChange} style={{ background: 'transparent', border: 'none', color: 'var(--accent-primary)', outline: 'none', width: '100%', fontWeight: 500 }} />
                ) : (
                  <span style={{ color: 'var(--accent-primary)', fontWeight: 500 }}>{userData.targetRole}</span>
                )}
              </div>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Location</label>
              <div className="form-input" style={{ display: 'flex', alignItems: 'center', gap: '12px', background: isEditing ? 'var(--bg-secondary)' : 'transparent', border: isEditing ? '1px solid var(--border-glass)' : 'none', padding: isEditing ? '12px 16px' : '0' }}>
                <MapPin size={18} className="text-muted" /> 
                {isEditing ? (
                  <input type="text" name="location" value={editForm.location} onChange={handleChange} style={{ background: 'transparent', border: 'none', color: 'white', outline: 'none', width: '100%' }} />
                ) : (
                  <span>{userData.location}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel">
          <h3 style={{ marginBottom: '24px' }}>Current Skills</h3>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
            {['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Docker'].map((skill, i) => (
              <span key={i} className="badge" style={{ padding: '8px 16px', fontSize: '0.95rem' }}>
                <Code size={14} style={{ display: 'inline', marginRight: '6px' }} />
                {skill}
              </span>
            ))}
          </div>

          <h3 style={{ marginBottom: '24px' }}>Target AI Skills</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {['PyTorch', 'Transformers', 'MLOps', 'Computer Vision', 'LangChain'].map((skill, i) => (
              <span key={i} className="badge" style={{ 
                padding: '8px 16px', 
                fontSize: '0.95rem',
                background: 'rgba(139, 92, 246, 0.1)',
                color: 'var(--accent-secondary)',
                borderColor: 'rgba(139, 92, 246, 0.2)'
              }}>
                <Cpu size={14} style={{ display: 'inline', marginRight: '6px' }} />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
