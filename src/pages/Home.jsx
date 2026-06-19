import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WaitlistForm from '../components/WaitlistForm';

const Home = () => {
  const [demoState, setDemoState] = useState('initial'); // initial, loading, complete

  const handleSynthesize = () => {
    setDemoState('loading');
    setTimeout(() => {
      setDemoState('complete');
    }, 2000);
  };

  return (
    <div style={{ animation: 'slide-up 0.5s ease-out' }}>
      
      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="container flex flex-col items-center text-center relative z-10">
          <div className="badge mb-8" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
            <span className="badge-pill">New</span>
            <span className="badge-text" style={{ color: 'rgba(255,255,255,0.9)' }}>Emotional wellness, always within reach.</span>
          </div>
          
          <h1 className="mb-4" style={{ maxWidth: '900px' }}>Find your center.<br/>Every single day.</h1>
          
          <p className="mb-12" style={{ fontSize: '20px', maxWidth: '600px', color: 'rgba(255,255,255,0.8)' }}>
            Gentle, evidence-informed practices to support your mental wellbeing. Take a breath, we're here.
          </p>

          <WaitlistForm location="hero" />

          {/* Interactive UI Mockup */}
          <div className="mt-16" style={{ width: '100%', maxWidth: '800px', background: 'var(--surface-alt)', border: '1px solid var(--border)', borderRadius: '24px', padding: '24px', boxShadow: '0 24px 64px rgba(0,0,0,0.4)', textAlign: 'left' }}>
            <div className="flex items-center gap-2 mb-4 pb-4 section-divider">
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}/>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}/>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}/>
              <span style={{ marginLeft: '16px', color: 'var(--text-muted)', fontSize: '13px', fontWeight: '500' }}>Daily Check-In</span>
            </div>
            
            {demoState === 'initial' && (
              <div className="flex flex-col items-center justify-center py-8" style={{ animation: 'fade-in 0.3s' }}>
                <div style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>Ready for your daily check-in?</div>
                <button 
                  onClick={handleSynthesize}
                  className="btn btn-hero" 
                  style={{ padding: '8px 24px', fontSize: '14px', border: 'none', cursor: 'pointer' }}
                >
                  Start Check-in
                </button>
              </div>
            )}

            {demoState === 'loading' && (
              <div className="flex flex-col items-center justify-center py-8" style={{ animation: 'fade-in 0.3s' }}>
                <div className="spinner mb-4" style={{ width: '24px', height: '24px', border: '3px solid var(--border)', borderTopColor: 'var(--accent)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                <div style={{ color: 'var(--accent)', fontFamily: 'monospace', fontSize: '14px' }}>Loading reflection prompt...</div>
              </div>
            )}

            {demoState === 'complete' && (
              <div style={{ animation: 'slide-up 0.4s ease-out' }}>
                <p style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '15px' }}>
                  "How are you feeling right now?"<br/><br/>
                  <span style={{ color: 'var(--accent)' }}>I'm feeling a bit overwhelmed with work.</span><br/><br/>
                  "It's completely normal to feel overwhelmed. Let's take a 60-second breathing break together. Breathe in for 4 seconds, hold for 4, exhale for 6..."
                </p>
                <button 
                  onClick={() => setDemoState('initial')}
                  style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '12px', marginTop: '16px', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Reset Demo
                </button>
              </div>
            )}
            <style>{`
              @keyframes spin { 100% { transform: rotate(360deg); } }
              @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
            `}</style>
          </div>
        </div>
      </section>

      {/* Logo Bar */}
      <section className="container text-center mb-32" style={{ opacity: 0.6 }}>
        <p className="mb-8" style={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', letterSpacing: '0.05em' }}>Developed alongside mental health professionals</p>
        <div className="flex justify-center gap-12" style={{ flexWrap: 'wrap', fontWeight: '800', fontSize: '20px', color: 'var(--text-muted)' }}>
          <div>Clinician-Informed</div>
          <div>CBT Based</div>
          <div>Evidence-Backed</div>
          <div>Privacy First</div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mb-32">
        <div className="text-center mb-16">
          <h2 className="mb-4">Your pocket companion.</h2>
          <p style={{ fontSize: '20px', maxWidth: '600px', margin: '0 auto' }}>
            Life can be overwhelming. Serene gives you the tools to ground yourself, track your patterns, and build resilience.
          </p>
        </div>

        {/* Bento Features Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          
          <div className="bento-card" style={{ gridColumn: 'span 2' }}>
            <h3 className="mb-4">Guided Check-ins</h3>
            <p className="mb-8">Take a moment for yourself. Our gentle, guided interactions help you identify what you're feeling and offer evidence-informed techniques right when you need them.</p>
            <div style={{ background: 'var(--surface-alt)', borderRadius: '16px', padding: '24px', border: '1px solid var(--border)' }}>
              <div style={{ padding: '12px', background: 'var(--surface)', borderRadius: '8px', marginBottom: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                <strong>Prompt:</strong> What's occupying your mind the most today?
              </div>
              <div style={{ padding: '12px', background: 'rgba(229, 107, 48, 0.1)', color: 'var(--hero-dark)', borderRadius: '8px', borderLeft: '4px solid var(--accent)' }}>
                <strong>Reflection:</strong> I'm worried about my upcoming presentation.
              </div>
            </div>
          </div>

          <div className="bento-card">
            <h3 className="mb-4">Mindfulness & CBT</h3>
            <p className="mb-8">Access a library of short, actionable exercises based on Cognitive Behavioral Therapy (CBT) and mindfulness principles.</p>
            <div style={{ padding: '16px', background: 'var(--surface-alt)', borderRadius: '12px', textAlign: 'center', fontWeight: '700', color: 'var(--accent)' }}>
              Evidence-Informed
            </div>
            <div className="mt-6 text-center">
              <Link to="/approach" style={{ color: 'var(--text-main)', textDecoration: 'underline', fontSize: '14px', fontWeight: '500' }}>Learn about our approach →</Link>
            </div>
          </div>

          <div className="bento-card">
            <h3 className="mb-4">Pattern Tracking</h3>
            <p>Visualize your emotional trends over time. Understand what drains your energy and what helps you recharge.</p>
          </div>

        </div>
      </section>

      {/* Trust Note */}
      <section className="mb-32" style={{ padding: '80px 0' }}>
        <div className="container text-center">
          <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(229, 107, 48, 0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h2 className="mb-4">Your safety is our priority.</h2>
          <p style={{ fontSize: '20px', maxWidth: '700px', margin: '0 auto', marginBottom: '24px' }}>
            Serene is a supportive wellness tool built with advisory input from clinical psychologists. It is not a replacement for professional therapy. Your data is strictly private, anonymized, and never sold.
          </p>
          <Link to="/safety" className="btn" style={{ display: 'inline-block', background: 'var(--surface-alt)', border: '1px solid var(--border)', color: 'var(--text-main)', padding: '12px 24px', textDecoration: 'none', borderRadius: '8px', fontWeight: '600' }}>
            Read our Privacy & Safety protocols
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mb-32">
        <h2 className="text-center mb-16">What our community is saying</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {[
            { quote: "It helps me organize my thoughts when everything feels chaotic. Just five minutes makes a difference.", author: "Anonymous", role: "Beta User" },
            { quote: "The guided breathing exercises are exactly what I needed. It's like having a calm friend in my pocket.", author: "Anonymous", role: "Beta User" },
            { quote: "Seeing my mood patterns over the last month helped me realize I need to prioritize sleep. Highly recommend.", author: "Anonymous", role: "Beta User" }
          ].map((t, i) => (
            <div key={i} className="bento-card" style={{ padding: '32px' }}>
              <p style={{ fontStyle: 'italic', marginBottom: '24px', fontSize: '16px', color: 'var(--text-main)' }}>"{t.quote}"</p>
              <div>
                <strong style={{ display: 'block' }}>{t.author}</strong>
                <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
