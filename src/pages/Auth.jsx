import React, { useState } from 'react';
import { BrainCircuit, Mail, Lock, User, Briefcase, MapPin, Target, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    currentRole: '',
    targetRole: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Mock login - just pass default or existing data if we had a real backend
      onLogin({ username: 'John Doe', currentRole: 'Software Engineer', targetRole: 'ML Engineer', location: 'Bangalore, India' });
    } else {
      // Pass the collected form data
      onLogin(formData);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)' }}>
      <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '450px', padding: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div style={{ background: 'var(--accent-gradient)', padding: '12px', borderRadius: '16px' }}>
            <BrainCircuit color="white" size={32} />
          </div>
        </div>
        
        <h2 style={{ textAlign: 'center', marginBottom: '8px' }}>
          {isLogin ? 'Welcome Back' : (step === 1 ? 'Join EvolveAI' : 'Complete Profile')}
        </h2>
        <p className="text-secondary" style={{ textAlign: 'center', marginBottom: '32px' }}>
          {isLogin ? 'Enter your credentials to continue.' : (step === 1 ? 'Create an account to start your journey.' : 'Help the Agent personalize your path.')}
        </p>

        <form onSubmit={isLogin || step === 2 ? handleSubmit : handleNextStep} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {(isLogin || step === 1) && (
            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {!isLogin && (
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Username</label>
                  <div style={{ position: 'relative' }}>
                    <User size={18} className="text-muted" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input type="text" name="username" required value={formData.username} onChange={handleChange} className="form-input" placeholder="johndoe" style={{ paddingLeft: '40px' }} />
                  </div>
                </div>
              )}
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Email Address</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={18} className="text-muted" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="form-input" placeholder="john@example.com" style={{ paddingLeft: '40px' }} />
                </div>
              </div>
              
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Password</label>
                <div style={{ position: 'relative' }}>
                  <Lock size={18} className="text-muted" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input type="password" name="password" required value={formData.password} onChange={handleChange} className="form-input" placeholder="••••••••" style={{ paddingLeft: '40px' }} />
                </div>
              </div>
            </div>
          )}

          {!isLogin && step === 2 && (
            <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Current Role</label>
                <div style={{ position: 'relative' }}>
                  <Briefcase size={18} className="text-muted" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input type="text" name="currentRole" required value={formData.currentRole} onChange={handleChange} className="form-input" placeholder="e.g. Frontend Developer" style={{ paddingLeft: '40px' }} />
                </div>
              </div>
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Target AI Role</label>
                <div style={{ position: 'relative' }}>
                  <Target size={18} className="text-muted" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input type="text" name="targetRole" required value={formData.targetRole} onChange={handleChange} className="form-input" placeholder="e.g. ML Engineer" style={{ paddingLeft: '40px' }} />
                </div>
              </div>
              <div className="form-group" style={{ margin: 0 }}>
                <label className="form-label">Location</label>
                <div style={{ position: 'relative' }}>
                  <MapPin size={18} className="text-muted" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input type="text" name="location" required value={formData.location} onChange={handleChange} className="form-input" placeholder="e.g. Remote, Bangalore" style={{ paddingLeft: '40px' }} />
                </div>
              </div>
            </div>
          )}

          <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
            {!isLogin && step === 2 && (
              <button type="button" className="btn-outline" onClick={() => setStep(1)} style={{ flex: 1 }}>
                <ArrowLeft size={18} /> Back
              </button>
            )}
            <button type="submit" className="btn-primary" style={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
              {isLogin ? 'Sign In' : (step === 1 ? 'Continue' : 'Create Account')} { (isLogin || step === 1) && <ArrowRight size={18} /> }
            </button>
          </div>
        </form>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <button 
            onClick={() => { setIsLogin(!isLogin); setStep(1); }} 
            style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9rem' }}
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}
