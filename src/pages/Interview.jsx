import React, { useState } from 'react';
import { mockInterviewQuestions, mockLearningPath } from '../data/mockData';
import { BrainCircuit, ChevronRight, ChevronLeft, RefreshCcw } from 'lucide-react';

export default function Interview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1) % mockInterviewQuestions.length);
  };

  const handlePrev = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev - 1 + mockInterviewQuestions.length) % mockInterviewQuestions.length);
  };

  const currentQuestion = mockInterviewQuestions[currentIndex];
  const relatedMilestone = mockLearningPath.find(m => m.id === currentQuestion.milestone)?.title || 'General AI';

  return (
    <main className="container animate-fade-in" style={{ padding: '40px 24px', maxWidth: '800px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <div style={{ background: 'var(--accent-gradient)', padding: '16px', borderRadius: '50%' }}>
            <BrainCircuit color="white" size={32} />
          </div>
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>Interview Prep</h1>
        <p className="text-secondary" style={{ fontSize: '1.1rem' }}>
          Test your knowledge with agent-curated technical questions.
        </p>
      </div>

      <div 
        className="glass-panel" 
        style={{ 
          minHeight: '300px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          textAlign: 'center',
          cursor: 'pointer',
          position: 'relative'
        }}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <div className="badge" style={{ position: 'absolute', top: '24px', left: '24px' }}>
          Topic: {relatedMilestone}
        </div>
        <div style={{ position: 'absolute', top: '24px', right: '24px', color: 'var(--text-muted)' }}>
          {currentIndex + 1} / {mockInterviewQuestions.length}
        </div>

        <div style={{ padding: '40px', width: '100%' }}>
          {!showAnswer ? (
            <div>
              <h2 style={{ fontSize: '1.8rem', lineHeight: '1.4' }}>{currentQuestion.question}</h2>
              <p className="text-muted" style={{ marginTop: '24px' }}>Click card to reveal answer</p>
            </div>
          ) : (
            <div className="animate-fade-in">
              <h3 style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '1.2rem' }}>Answer:</h3>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--text-primary)' }}>
                {currentQuestion.answer}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex-between" style={{ marginTop: '32px' }}>
        <button className="btn-outline" onClick={handlePrev}>
          <ChevronLeft size={20} /> Previous
        </button>
        <button className="btn-outline" onClick={() => setShowAnswer(!showAnswer)}>
          <RefreshCcw size={18} /> Flip Card
        </button>
        <button className="btn-primary" onClick={handleNext}>
          Next <ChevronRight size={20} />
        </button>
      </div>
    </main>
  );
}
