import React from 'react';
import { mockJobs, mockLearningPath } from '../data/mockData';
import { Briefcase, MapPin, Building2, Lock, ExternalLink } from 'lucide-react';

export default function JobUnlocker({ currentPath }) {
  // Determine user's skill level based on completed modules
  const getUnlockedStatus = (requiredMilestone) => {
    const requiredIndex = mockLearningPath.findIndex(m => m.id === requiredMilestone);
    const module = currentPath.find(m => m.id === requiredMilestone);
    // If the module is completed, or it's an earlier module that is completed
    if (!module) return false;
    
    // Check if the required module is completed
    return module.status === 'completed';
  };

  return (
    <div className="glass-panel animate-fade-in delay-300" style={{ padding: '32px' }}>
      <div style={{ marginBottom: '24px' }}>
        <h3>Unlocked Opportunities</h3>
        <p className="text-secondary">Jobs matching your current AI skill level.</p>
      </div>

      <div className="grid-2">
        {mockJobs.map(job => {
          const isUnlocked = getUnlockedStatus(job.requiredMilestone);
          
          return (
            <div key={job.id} className="glass-card" style={{ 
              padding: '24px', 
              position: 'relative',
              opacity: isUnlocked ? 1 : 0.5,
              filter: isUnlocked ? 'none' : 'grayscale(100%)'
            }}>
              {!isUnlocked && (
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(0,0,0,0.5)',
                  padding: '8px',
                  borderRadius: '50%',
                  display: 'flex'
                }}>
                  <Lock size={16} className="text-muted" />
                </div>
              )}
              
              <div className="flex-between" style={{ marginBottom: '16px' }}>
                <div className="badge" style={{ 
                  background: job.platform === 'LinkedIn' ? 'rgba(10, 102, 194, 0.1)' : 'rgba(255, 117, 85, 0.1)',
                  color: job.platform === 'LinkedIn' ? '#0a66c2' : '#ff7555',
                  borderColor: job.platform === 'LinkedIn' ? 'rgba(10, 102, 194, 0.2)' : 'rgba(255, 117, 85, 0.2)'
                }}>
                  {job.platform}
                </div>
                {isUnlocked && <span style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: 600 }}>{job.match} Match</span>}
              </div>

              <h4 style={{ margin: '0 0 8px 0' }}>{job.title}</h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <Building2 size={16} /> {job.company}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <MapPin size={16} /> {job.location}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.95rem' }}>
                  <Briefcase size={16} /> {job.salary}
                </div>
              </div>

              <button className={isUnlocked ? "btn-primary" : "btn-outline"} disabled={!isUnlocked} style={{ width: '100%', padding: '10px' }}>
                {isUnlocked ? (
                  <>Apply Now <ExternalLink size={16} /></>
                ) : (
                  `Unlocks at: ${mockLearningPath.find(m => m.id === job.requiredMilestone)?.title}`
                )}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  );
}
