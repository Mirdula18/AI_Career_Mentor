import React from 'react';
import { mockLearningPath, mockJobs } from '../data/mockData';
import { Target, Clock, Zap, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard({ userData }) {
  const completedModules = mockLearningPath.filter(m => m.status === 'completed').length;
  const progressPercentage = Math.round((completedModules / mockLearningPath.length) * 100);
  const activeModule = mockLearningPath.find(m => m.status === 'active');
  
  // Calculate total estimated hours spent (mocked by completed modules)
  const hoursSpent = mockLearningPath
    .filter(m => m.status === 'completed')
    .reduce((acc, curr) => acc + curr.estimatedHours, 0);

  return (
    <main className="container animate-fade-in" style={{ padding: '40px 24px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Welcome back, {userData?.username || 'Explorer'}</h1>
        <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
          Your transition to {userData?.targetRole || 'AI Specialist'} is {progressPercentage}% complete. Keep up the momentum!
        </p>
      </div>

      {/* Quick Stats Row */}
      <div className="grid-3" style={{ marginBottom: '32px' }}>
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '16px', borderRadius: '12px' }}>
            <Target className="text-accent-primary" size={32} />
          </div>
          <div>
            <p className="text-secondary" style={{ margin: '0 0 4px 0', fontSize: '0.9rem' }}>Current Goal</p>
            <h3 style={{ margin: 0 }}>{userData?.targetRole || 'ML Engineer'}</h3>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '16px', borderRadius: '12px' }}>
            <Clock className="text-accent-secondary" size={32} />
          </div>
          <div>
            <p className="text-secondary" style={{ margin: '0 0 4px 0', fontSize: '0.9rem' }}>Hours Invested</p>
            <h3 style={{ margin: 0 }}>{hoursSpent} hrs</h3>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '16px', borderRadius: '12px' }}>
            <Zap color="#10b981" size={32} />
          </div>
          <div>
            <p className="text-secondary" style={{ margin: '0 0 4px 0', fontSize: '0.9rem' }}>Study Streak</p>
            <h3 style={{ margin: 0 }}>14 Days</h3>
          </div>
        </div>
      </div>

      <div className="grid-2">
        {/* Continue Learning Widget */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <BookOpen className="text-accent-primary" size={24} />
            <h2 style={{ margin: 0 }}>Continue Learning</h2>
          </div>
          
          {activeModule ? (
            <div className="glass-card" style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <div className="badge" style={{ alignSelf: 'flex-start', marginBottom: '16px' }}>In Progress</div>
              <h3 style={{ marginBottom: '12px' }}>{activeModule.title}</h3>
              <p className="text-secondary" style={{ marginBottom: '24px', flexGrow: 1 }}>{activeModule.description}</p>
              
              <Link to="/resources" style={{ textDecoration: 'none' }}>
                <button className="btn-primary" style={{ width: '100%' }}>
                  Resume Module <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          ) : (
            <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
              <p className="text-secondary">You've completed all current modules!</p>
            </div>
          )}
        </div>

        {/* Recent Activity / Next Steps */}
        <div className="glass-panel">
          <h2 style={{ marginBottom: '24px' }}>Recent Unlocks</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {mockJobs.filter(j => j.match === '85%' || j.match === '92%').slice(0, 2).map(job => (
              <div key={job.id} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                <div style={{ background: 'var(--bg-primary)', padding: '12px', borderRadius: '50%' }}>
                  <Target size={20} className="text-accent-secondary" />
                </div>
                <div style={{ flexGrow: 1 }}>
                  <h4 style={{ margin: '0 0 4px 0' }}>{job.title}</h4>
                  <p className="text-secondary" style={{ margin: 0, fontSize: '0.85rem' }}>{job.company} • {job.platform}</p>
                </div>
                <Link to="/jobs">
                  <button className="btn-outline" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>View</button>
                </Link>
              </div>
            ))}
            
            <Link to="/tracker" style={{ textDecoration: 'none', marginTop: '16px' }}>
              <button className="btn-outline" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                View Full Analytics <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
