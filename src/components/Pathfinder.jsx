import React from 'react';
import { CheckCircle2, Circle, Clock, Play, BookOpen } from 'lucide-react';

export default function Pathfinder({ weeklyHours, path, setPath, strictMode }) {

  const calculateTime = (baseHours) => {
    if (!weeklyHours || weeklyHours <= 0) return '0 weeks';
    // Add 25% buffer if strict mode is on
    const totalHours = strictMode ? Math.ceil(baseHours * 1.25) : baseHours;
    const weeks = Math.ceil(totalHours / weeklyHours);
    if (weeks > 4) {
      return `${Math.ceil(weeks / 4)} months`;
    }
    return `${weeks} weeks`;
  };

  const handleMarkComplete = (id) => {
    const updatedPath = [...path];
    const currentIndex = updatedPath.findIndex(m => m.id === id);
    if (currentIndex !== -1) {
      updatedPath[currentIndex].status = 'completed';
      if (currentIndex + 1 < updatedPath.length) {
        updatedPath[currentIndex + 1].status = 'active';
      }
      setPath(updatedPath);
    }
  };

  return (
    <div className="glass-panel animate-fade-in delay-200" style={{ padding: '32px' }}>
      <div className="flex-between" style={{ marginBottom: '24px' }}>
        <div>
          <h3>Your AI Roadmap</h3>
          <p className="text-secondary">Based on {weeklyHours} hours/week commitment</p>
        </div>
        <div className="badge">Total Time: {calculateTime(path.reduce((acc, curr) => acc + curr.estimatedHours, 0))}</div>
      </div>

      <div style={{ position: 'relative', paddingLeft: '24px', borderLeft: '2px solid var(--border-glass)' }}>
        {path.map((module, index) => (
          <div key={module.id} style={{ position: 'relative', marginBottom: index === path.length - 1 ? 0 : '40px' }}>
            <div style={{
              position: 'absolute',
              left: '-37px',
              top: '0',
              background: 'var(--bg-primary)',
              borderRadius: '50%'
            }}>
              {module.status === 'completed' ? (
                <CheckCircle2 color="var(--accent-primary)" size={28} />
              ) : module.status === 'active' ? (
                <Play color="var(--accent-secondary)" size={28} fill="var(--accent-secondary)" />
              ) : (
                <Circle color="var(--text-muted)" size={28} />
              )}
            </div>

            <div className={`glass-card ${module.status === 'active' ? 'active-module' : ''}`} style={{ 
              padding: '24px', 
              opacity: module.status === 'locked' ? 0.6 : 1,
              border: module.status === 'active' ? '1px solid var(--accent-secondary)' : '1px solid var(--border-glass)'
            }}>
              <div className="flex-between" style={{ marginBottom: '12px' }}>
                <h4 style={{ margin: 0 }}>{module.title}</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <Clock size={16} />
                  {calculateTime(module.estimatedHours)}
                </div>
              </div>
              <p className="text-secondary" style={{ marginBottom: '16px' }}>{module.description}</p>
              
              {module.status !== 'locked' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
                  <h5 style={{ margin: 0, color: 'var(--text-primary)' }}>Agent Recommendations:</h5>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {module.resources.map((res, i) => (
                      <a key={i} href={res.link} style={{ 
                        textDecoration: 'none', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '6px',
                        background: 'rgba(255,255,255,0.05)',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        color: 'var(--text-primary)',
                        fontSize: '0.85rem'
                      }}>
                        <BookOpen size={14} color="var(--accent-primary)" />
                        {res.type}: {res.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {module.status === 'active' && (
                <button className="btn-primary" onClick={() => handleMarkComplete(module.id)} style={{ width: '100%' }}>
                  Mark as Completed
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
