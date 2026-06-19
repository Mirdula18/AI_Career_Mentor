import React, { useState } from 'react';
import { mockJobs, mockLearningPath } from '../data/mockData';
import { Briefcase, MapPin, Building2, Search, Filter, ExternalLink } from 'lucide-react';

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [platformFilter, setPlatformFilter] = useState('All');

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform = platformFilter === 'All' || job.platform === platformFilter;
    return matchesSearch && matchesPlatform;
  });

  return (
    <main className="container animate-fade-in" style={{ padding: '40px 24px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Opportunities Portal</h1>
        <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
          Discover unlocked AI roles that match your newly acquired skills.
        </p>
      </div>

      <div className="glass-panel flex-between" style={{ padding: '16px 24px', marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexGrow: 1, maxWidth: '500px' }}>
          <Search size={20} className="text-muted" />
          <input 
            type="text" 
            placeholder="Search by role or company..." 
            className="form-input" 
            style={{ border: 'none', background: 'transparent', padding: 0 }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
            <Filter size={18} />
            Platform:
          </div>
          <select 
            className="form-input" 
            style={{ width: 'auto', cursor: 'pointer' }}
            value={platformFilter}
            onChange={(e) => setPlatformFilter(e.target.value)}
          >
            <option value="All">All Platforms</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Naukri">Naukri</option>
          </select>
        </div>
      </div>

      <div className="grid-2">
        {filteredJobs.map((job) => (
          <div key={job.id} className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
            <div className="flex-between" style={{ marginBottom: '16px' }}>
              <div className="badge" style={{ 
                background: job.platform === 'LinkedIn' ? 'rgba(10, 102, 194, 0.1)' : 'rgba(255, 117, 85, 0.1)',
                color: job.platform === 'LinkedIn' ? '#0a66c2' : '#ff7555',
                borderColor: job.platform === 'LinkedIn' ? 'rgba(10, 102, 194, 0.2)' : 'rgba(255, 117, 85, 0.2)'
              }}>
                {job.platform}
              </div>
              <span style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: 600 }}>{job.match} Match</span>
            </div>

            <h3 style={{ margin: '0 0 12px 0' }}>{job.title}</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px', flexGrow: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                <Building2 size={16} /> {job.company}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                <MapPin size={16} /> {job.location}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontWeight: 500 }}>
                <Briefcase size={16} /> {job.salary}
              </div>
              <div style={{ marginTop: '12px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Requires: {mockLearningPath.find(m => m.id === job.requiredMilestone)?.title || 'Any'}
              </div>
            </div>

            <a href={job.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <button className="btn-primary" style={{ width: '100%', padding: '12px' }}>
                Apply on {job.platform} <ExternalLink size={16} />
              </button>
            </a>
          </div>
        ))}
        {filteredJobs.length === 0 && (
          <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
            No opportunities found matching your criteria.
          </div>
        )}
      </div>
    </main>
  );
}
