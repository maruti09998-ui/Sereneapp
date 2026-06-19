import React from 'react';
import { Link } from 'react-router-dom';

const Safety = () => {
  return (
    <div className="container mt-32 mb-32" style={{ animation: 'slide-up 0.5s ease-out' }}>
      <div className="text-center mb-16">
        <div className="badge mb-8" style={{ border: '1px solid var(--border)' }}>
          <span className="badge-pill">Trust</span>
          <span className="badge-text">Your Safety First</span>
        </div>
        <h1 className="mb-4">Safety & Privacy</h1>
        <p style={{ fontSize: '20px', maxWidth: '700px', margin: '0 auto', color: 'var(--text-muted)' }}>
          Mental health data is incredibly sensitive. Here is how we protect you and what you need to know about using Serene.
        </p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        {/* What Serene is and is not */}
        <div className="bento-card" style={{ padding: '40px' }}>
          <h2 className="mb-6">What Serene Is (And Is Not)</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div>
              <h4 style={{ color: 'var(--accent)', marginBottom: '12px' }}>Serene IS:</h4>
              <ul style={{ color: 'var(--text-muted)', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li>A tool for self-guided emotional reflection</li>
                <li>A library of evidence-informed coping skills</li>
                <li>A mood and pattern tracker</li>
                <li>A preventative maintenance application</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#ff5f56', marginBottom: '12px' }}>Serene IS NOT:</h4>
              <ul style={{ color: 'var(--text-muted)', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li>A licensed therapist or doctor</li>
                <li>A diagnostic medical device</li>
                <li>A crisis intervention or emergency service</li>
                <li>A treatment for severe mental illness</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Crisis Escalation */}
        <div className="bento-card" style={{ padding: '40px', border: '2px solid rgba(255, 95, 86, 0.3)' }}>
          <h2 className="mb-4 text-center">Crisis Escalation & Real Resources</h2>
          <p className="mb-6 text-center text-muted">
            If you are experiencing a mental health emergency, experiencing thoughts of self-harm, or are in immediate danger, do not use this app. Please use the resources below immediately.
          </p>
          <div style={{ background: 'var(--surface-alt)', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #ff5f56' }}>
            <h3 style={{ color: '#ff5f56', marginBottom: '8px' }}>988 Suicide & Crisis Lifeline</h3>
            <p style={{ marginBottom: '16px' }}>Available 24/7. Free and confidential support for people in distress.</p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="tel:988" className="btn" style={{ background: '#ff5f56', color: 'white', padding: '8px 24px', textDecoration: 'none', borderRadius: '24px', fontWeight: 'bold' }}>Call 988</a>
              <a href="sms:988" className="btn" style={{ background: 'transparent', color: '#ff5f56', border: '2px solid #ff5f56', padding: '8px 24px', textDecoration: 'none', borderRadius: '24px', fontWeight: 'bold' }}>Text 988</a>
            </div>
          </div>
        </div>

        {/* Privacy */}
        <div className="bento-card" style={{ padding: '40px' }}>
          <h2 className="mb-4">Privacy of Sensitive Data</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '16px' }}>
            Your emotional landscape is yours alone. We believe that mental health data requires the highest level of protection.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-main)' }}>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent)' }}>✓</span> <strong>End-to-End Encryption:</strong> Your journal entries and reflections are encrypted. We cannot read them.</li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent)' }}>✓</span> <strong>Zero Data Selling:</strong> We will never sell your data to advertisers, data brokers, or third parties. Our business model is subscription-based, not ad-based.</li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: 'var(--accent)' }}>✓</span> <strong>Instant Deletion:</strong> You have the right to permanently delete your account and all associated data with a single click.</li>
          </ul>
        </div>

        {/* Clinician Advisory */}
        <div className="bento-card" style={{ padding: '40px' }}>
          <h2 className="mb-4">Clinician Advisory Involvement</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '24px' }}>
            Serene is built in collaboration with a board of licensed clinical psychologists and licensed clinical social workers (LCSWs). Every guided exercise, CBT framework, and crisis escalation protocol is reviewed by our advisory board to ensure it meets ethical guidelines for digital wellness tools.
          </p>
          <Link to="/approach" style={{ color: 'var(--text-main)', textDecoration: 'underline', fontWeight: '600', fontSize: '14px' }}>
            Read about our CBT methodology →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Safety;
