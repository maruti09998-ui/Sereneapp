import React from 'react';
import WaitlistForm from './WaitlistForm';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', paddingTop: '64px', paddingBottom: '32px' }}>
      <div className="container">
        
        {/* Global Waitlist CTA */}
        <div className="mb-16 pb-16" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-4">Emotional wellness, always within reach.</h2>
            <p className="mb-8 text-muted" style={{ maxWidth: '600px' }}>
              Join the waitlist to access early beta features. We are slowly rolling out to ensure stability and safety.
            </p>
            <div style={{ width: '100%', maxWidth: '400px' }}>
              <WaitlistForm location="footer" />
            </div>
          </div>
        </div>

        {/* Persistent Crisis Line */}
        <div className="mb-8 p-4 text-center" style={{ background: 'rgba(255, 95, 86, 0.1)', border: '1px solid rgba(255, 95, 86, 0.2)', borderRadius: '12px' }}>
          <strong style={{ color: '#ff5f56' }}>If you are in crisis, please get immediate help.</strong>
          <br />
          <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Call or text 988 (Suicide & Crisis Lifeline) or go to the nearest emergency room. Serene is not a crisis response tool.</span>
        </div>

          <div className="flex flex-col items-center text-center gap-4">
          <div style={{ fontSize: '14px', color: 'var(--text-main)', fontWeight: '500' }}>
            Clinician-Informed Design
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', maxWidth: '600px' }}>
            Serene is a supportive wellness tool, not a substitute for professional therapy or emergency care.
          </p>
          
          <div className="flex gap-4 mt-4" style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'underline' }}>Privacy (Sensitive Data)</a>
            <span>•</span>
            <a href="#" style={{ color: 'inherit', textDecoration: 'underline' }}>Terms</a>
            <span>•</span>
            <a href="/safety" style={{ color: 'inherit', textDecoration: 'underline' }}>Safety</a>
          </div>

          <div className="mt-8" style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
            &copy; {new Date().getFullYear()} Serene. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
