import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import WaitlistForm from '../components/WaitlistForm';

const Waitlist = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Will you spam my email?",
      a: "Never. We will only email you when it's time to grant you access, or for critical product updates. You can unsubscribe instantly at any time."
    },
    {
      q: "Why is there a waitlist?",
      a: "Mental health tools require immense care. We are scaling our infrastructure slowly and intentionally to ensure maximum stability, privacy, and clinical safety for every single user."
    },
    {
      q: "How long until I get access?",
      a: "We are onboarding users in batches every week. You can track your position using the live counter after signing up."
    }
  ];

  return (
    <div className="container mt-32 mb-32" style={{ animation: 'slide-up 0.5s ease-out' }}>
      <div className="text-center mb-16">
        <h1 className="mb-4">Emotional wellness, always within reach.</h1>
        <p style={{ fontSize: '20px', maxWidth: '600px', margin: '0 auto', color: 'var(--text-muted)' }}>
          We are slowly rolling out access to Serene to ensure stability, privacy, and safety for all our users. Join the waitlist to secure your spot.
        </p>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--surface-alt)', border: '1px solid var(--border)', borderRadius: '24px', padding: '48px', boxShadow: '0 24px 64px rgba(0,0,0,0.2)' }}>
        <h2 className="text-center mb-8">Join the Waitlist</h2>
        
        <WaitlistForm location="standalone" />

        <div className="mt-12 pt-8 text-center" style={{ borderTop: '1px solid var(--border)' }}>
          <h4 className="mb-4 text-muted">Why join early?</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent)' }}>★</span> 12 months of Serene Plus for free
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent)' }}>★</span> Direct access to our product team
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent)' }}>★</span> Help shape new CBT features
            </li>
          </ul>
        </div>
      </div>

      {/* Reassuring FAQ */}
      <div className="mt-32" style={{ maxWidth: '600px', margin: '128px auto 0' }}>
        <h3 className="text-center mb-8">Waitlist FAQs</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden' }}>
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px', background: 'none', border: 'none', color: 'var(--text-main)', fontSize: '16px', fontWeight: '600', cursor: 'pointer', textAlign: 'left' }}
              >
                {faq.q}
                {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openFaq === idx && (
                <div style={{ padding: '0 24px 24px', color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '15px' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Waitlist;
