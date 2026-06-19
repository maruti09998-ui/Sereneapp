import React, { useState, useEffect } from 'react';

const WaitlistForm = ({ location = 'hero' }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [counter, setCounter] = useState(1428);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setCounter(c => c + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    
    setTimeout(() => {
      setSubmitted(true);
      setCounter(c => c + 1);
    }, 600);
  };

  const isHero = location === 'hero';

  return (
    <div style={{ maxWidth: '400px', margin: isHero ? '0 auto' : '0' }}>
      {!submitted ? (
        <>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1, padding: '12px 20px', borderRadius: '999px',
                  background: isHero ? 'rgba(255,255,255,0.1)' : 'var(--surface)', 
                  border: error ? '1px solid #f87171' : (isHero ? '1px solid rgba(255,255,255,0.2)' : '1px solid var(--border)'),
                  color: isHero ? 'var(--surface)' : 'var(--text-main)', 
                  fontSize: '15px', outline: 'none'
                }}
              />
              <button type="submit" className={isHero ? "btn btn-hero" : "btn btn-primary"} style={{ padding: '12px 24px' }}>
                Join
              </button>
            </div>
            {error && <span style={{ color: '#f87171', fontSize: '13px', textAlign: 'left', paddingLeft: '16px' }}>{error}</span>}
          </form>

          <div style={{ color: isHero ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: isHero ? 'center' : 'flex-start', gap: '8px', fontSize: '14px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)', animation: 'pulse 2s infinite' }} />
            <span>Join <strong>{counter.toLocaleString()}</strong> others on the waitlist.</span>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes pulse {
              0% { box-shadow: 0 0 0 0 rgba(229, 107, 48, 0.4); }
              70% { box-shadow: 0 0 0 10px rgba(229, 107, 48, 0); }
              100% { box-shadow: 0 0 0 0 rgba(229, 107, 48, 0); }
            }
          `}} />
        </>
      ) : (
        <div style={{ background: 'rgba(229, 107, 48, 0.1)', border: '1px solid rgba(229, 107, 48, 0.3)', padding: '24px', borderRadius: '16px', textAlign: 'center' }}>
          <h3 className="mb-2" style={{ color: 'var(--accent)', fontSize: '18px' }}>You're on the list!</h3>
          <p style={{ fontSize: '14px', color: isHero ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)' }}>
            We'll notify you as soon as early access opens.
          </p>
        </div>
      )}
    </div>
  );
};

export default WaitlistForm;
