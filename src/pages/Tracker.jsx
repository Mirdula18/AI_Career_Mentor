import React, { useState } from 'react';
import Pathfinder from '../components/Pathfinder';
import { mockLearningPath } from '../data/mockData';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Activity, BarChart2 } from 'lucide-react';

const radarData = [
  { subject: 'Math', A: 90, fullMark: 100 },
  { subject: 'ML Basics', A: 80, fullMark: 100 },
  { subject: 'Deep Learning', A: 30, fullMark: 100 },
  { subject: 'NLP/LLMs', A: 10, fullMark: 100 },
  { subject: 'MLOps', A: 5, fullMark: 100 },
  { subject: 'Software Eng', A: 95, fullMark: 100 },
];

export default function Tracker({ strictMode }) {
  const [weeklyHours, setWeeklyHours] = useState(15);
  const [path, setPath] = useState(mockLearningPath);

  return (
    <main className="container animate-fade-in" style={{ padding: '40px 24px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Learning Tracker</h1>
        <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
          Deep-dive analytics and progress visualization of your AI journey.
        </p>
      </div>

      <div className="grid-2" style={{ marginBottom: '40px' }}>
        {/* Radar Chart Panel */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <BarChart2 className="text-accent-primary" size={24} />
            <h2 style={{ margin: 0 }}>Skill Matrix</h2>
          </div>
          <div style={{ width: '100%', height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="var(--border-glass)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Skills" dataKey="A" stroke="var(--accent-primary)" fill="var(--accent-primary)" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activity Heatmap Mockup */}
        <div className="glass-panel">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <Activity className="text-accent-secondary" size={24} />
            <h2 style={{ margin: 0 }}>Study Consistency</h2>
          </div>
          <p className="text-secondary" style={{ marginBottom: '24px' }}>Your daily learning activity over the past month.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
            {Array.from({ length: 28 }).map((_, i) => {
              // Generate random intensity for mockup
              const intensity = Math.random();
              const bgColor = intensity > 0.8 ? 'rgba(16, 185, 129, 1)' : 
                              intensity > 0.5 ? 'rgba(16, 185, 129, 0.6)' : 
                              intensity > 0.2 ? 'rgba(16, 185, 129, 0.3)' : 'var(--bg-secondary)';
              return (
                <div key={i} style={{ 
                  aspectRatio: '1', 
                  backgroundColor: bgColor,
                  borderRadius: '4px',
                  border: '1px solid var(--border-glass)'
                }} title="Activity block"></div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '32px' }}>
        <div className="flex-between animate-fade-in" style={{ marginBottom: '32px' }}>
          <div>
            <h2 style={{ margin: 0 }}>Detailed Timeline</h2>
            <p className="text-secondary">Adjust your bandwidth to recalculate estimates.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <label className="form-label" style={{ marginBottom: '4px', fontSize: '0.85rem' }}>Weekly Bandwidth</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <input 
                type="range" 
                min="5" 
                max="40" 
                step="5"
                value={weeklyHours} 
                onChange={(e) => setWeeklyHours(parseInt(e.target.value))}
                style={{ accentColor: 'var(--accent-primary)' }}
              />
              <span style={{ fontWeight: 600, width: '60px' }}>{weeklyHours} hrs</span>
            </div>
          </div>
        </div>
        
        <Pathfinder weeklyHours={weeklyHours} path={path} setPath={setPath} strictMode={strictMode} />
      </div>
    </main>
  );
}
