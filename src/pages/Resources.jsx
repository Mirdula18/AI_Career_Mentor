import React from 'react';
import { mockLearningPath } from '../data/mockData';
import { BookOpen, ExternalLink, Video, FileText } from 'lucide-react';

export default function Resources() {
  const getIcon = (type) => {
    switch(type) {
      case 'Course': return <Video size={18} />;
      case 'Paper': return <FileText size={18} />;
      default: return <BookOpen size={18} />;
    }
  };

  return (
    <main className="container animate-fade-in" style={{ padding: '40px 24px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Library</h1>
        <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
          Curated study materials, courses, and research papers for your journey.
        </p>
      </div>

      <div className="grid-2">
        {mockLearningPath.map(module => (
          <div key={module.id} className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '20px' }}>
              <div className="badge" style={{ marginBottom: '12px' }}>{module.title}</div>
              <p className="text-secondary">{module.description}</p>
            </div>
            
            <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {module.resources.map((res, i) => (
                <a 
                  key={i} 
                  href={res.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="glass-card" 
                  style={{ 
                    padding: '16px', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: 'var(--text-primary)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ color: 'var(--accent-primary)' }}>
                      {getIcon(res.type)}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{res.type}</div>
                      <div style={{ fontWeight: 500 }}>{res.name}</div>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-muted" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
