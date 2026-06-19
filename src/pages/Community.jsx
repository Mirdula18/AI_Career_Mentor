import React from 'react';
import { Users, UserPlus, Code2, MapPin } from 'lucide-react';

const mockPeers = [
  { id: 1, name: 'Alice Chen', role: 'Backend Dev', milestone: 'Deep Learning', location: 'San Francisco', match: '98%' },
  { id: 2, name: 'David Kumar', role: 'Full Stack Dev', milestone: 'Deep Learning', location: 'Remote', match: '95%' },
  { id: 3, name: 'Sarah Jenkins', role: 'Data Engineer', milestone: 'LLMs', location: 'London', match: '85%' },
  { id: 4, name: 'Michael Rodriguez', role: 'Frontend Dev', milestone: 'Math for AI', location: 'Remote', match: '70%' },
];

export default function Community() {
  return (
    <main className="container animate-fade-in" style={{ padding: '40px 24px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Peer Matchmaking</h1>
        <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
          Connect with other engineers transitioning to AI who are at the exact same learning milestone.
        </p>
      </div>

      <div className="grid-2">
        {mockPeers.map(peer => (
          <div key={peer.id} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', padding: '24px' }}>
            <div className="flex-between" style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ 
                  width: '50px', height: '50px', 
                  borderRadius: '50%', 
                  background: 'var(--bg-secondary)', 
                  border: '1px solid var(--border-glass)',
                  display: 'flex', justifyContent: 'center', alignItems: 'center' 
                }}>
                  <Users size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 style={{ margin: 0 }}>{peer.name}</h3>
                  <p className="text-secondary" style={{ margin: 0, fontSize: '0.9rem' }}>{peer.role}</p>
                </div>
              </div>
              <div className="badge" style={{ 
                background: 'rgba(16, 185, 129, 0.1)', 
                color: '#10b981', 
                borderColor: 'rgba(16, 185, 129, 0.2)' 
              }}>
                {peer.match} Match
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px', flexGrow: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                <Code2 size={16} className="text-accent-primary" /> Studying: {peer.milestone}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                <MapPin size={16} /> {peer.location}
              </div>
            </div>

            <button className="btn-primary" style={{ width: '100%' }}>
              <UserPlus size={18} /> Connect & Pair Program
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
