import React from 'react';
import { Link } from 'react-router-dom';
import WaitlistForm from '../components/WaitlistForm';

const Approach = () => {
  return (
    <div className="container mt-32 mb-32" style={{ animation: 'slide-up 0.5s ease-out' }}>
      <div className="text-center mb-16">
        <div className="badge mb-8" style={{ border: '1px solid var(--border)' }}>
          <span className="badge-pill">Methodology</span>
          <span className="badge-text">How Serene Helps</span>
        </div>
        <h1 className="mb-4">Our Approach</h1>
        <p style={{ fontSize: '20px', maxWidth: '700px', margin: '0 auto', color: 'var(--text-muted)' }}>
          We blend empathetic design with evidence-informed techniques to support your daily emotional wellbeing.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px', marginBottom: '64px' }}>
        
        <div className="bento-card" style={{ padding: '40px' }}>
          <h3 className="mb-4">Guided Check-ins & Reflection</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Taking just 60 seconds to name your emotions can reduce their intensity. Serene offers gentle, structured prompts to help you untangle your thoughts. Think of it as a conversational journal that guides you through the process of self-reflection without judgment.
          </p>
        </div>

        <div className="bento-card" style={{ padding: '40px' }}>
          <h3 className="mb-4">Evidence-Informed Techniques</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
            We don't rely on toxic positivity. Our exercises draw from Cognitive Behavioral Therapy (CBT) and mindfulness principles. Whether it's a cognitive restructuring exercise to challenge an anxious thought or a grounding technique for panic, the tools are rooted in established psychological science.
          </p>
        </div>

        <div className="bento-card" style={{ padding: '40px' }}>
          <h3 className="mb-4">Mood & Pattern Tracking</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Awareness is the first step toward change. Serene gently tracks your emotional landscape over time, helping you visualize patterns. Do you consistently feel drained on Thursdays? Does a 10-minute walk reliably improve your mood? We help you connect the dots.
          </p>
        </div>

        <div className="bento-card" style={{ padding: '40px', background: 'rgba(255, 95, 86, 0.05)', border: '1px solid rgba(255, 95, 86, 0.2)' }}>
          <h3 className="mb-4" style={{ color: '#ff5f56' }}>Clear Scope: Supportive, Not Clinical</h3>
          <p style={{ color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '24px' }}>
            It is critical to understand our limits. Serene is designed to be a supportive tool for emotional maintenance and mild distress. <strong>It is not a replacement for clinical therapy, psychiatric care, or crisis intervention.</strong> If you need professional help, we encourage you to seek it.
          </p>
          <Link to="/safety" style={{ color: '#ff5f56', textDecoration: 'underline', fontWeight: '600', fontSize: '14px' }}>
            View Crisis Resources & Safety Limits →
          </Link>
        </div>

      </div>

      {/* Cross-linking to Pricing */}
      <div className="text-center mb-16">
        <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>
          Want to access the full CBT library? <Link to="/pricing" style={{ color: 'var(--accent)', textDecoration: 'underline', fontWeight: '600' }}>View our pricing plans</Link>.
        </p>
      </div>
      
      <div className="text-center mt-32">
        <h2 className="mb-8">Start your journey today.</h2>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <WaitlistForm location="page" />
        </div>
      </div>
    </div>
  );
};

export default Approach;
