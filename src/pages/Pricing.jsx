import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import WaitlistForm from '../components/WaitlistForm';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "What's included in the Free tier?",
      a: "The Free tier includes daily guided check-ins, basic mood tracking, and access to a limited library of foundational breathing and grounding exercises."
    },
    {
      q: "How does Serene Plus differ?",
      a: "Serene Plus unlocks our complete library of CBT-based exercises, advanced pattern recognition and emotional analytics, and personalized exercise recommendations based on your check-ins."
    },
    {
      q: "Can I cancel at any time?",
      a: "Yes, you can cancel your Serene Plus subscription at any time from your account settings. You will retain access until the end of your billing period."
    }
  ];

  return (
    <div className="container mt-32 mb-32" style={{ animation: 'slide-up 0.5s ease-out' }}>
      <div className="text-center mb-16">
        <h1 className="mb-4">Invest in your wellbeing.</h1>
        <p style={{ fontSize: '20px' }}>Join the waitlist today to lock in early beta pricing.</p>
      </div>

      {/* Pricing Toggle */}
      <div className="flex justify-center items-center gap-4 mb-16">
        <span style={{ color: !isAnnual ? 'var(--text-main)' : 'var(--text-muted)' }}>Monthly</span>
        <button 
          onClick={() => setIsAnnual(!isAnnual)}
          style={{
            width: '60px', height: '32px', borderRadius: '16px', 
            background: 'var(--surface-alt)', border: '1px solid var(--border)',
            position: 'relative', cursor: 'pointer', transition: 'all 0.3s'
          }}
        >
          <div style={{
            width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent)',
            position: 'absolute', top: '3px', left: isAnnual ? '31px' : '3px', transition: 'left 0.3s'
          }}/>
        </button>
        <span style={{ color: isAnnual ? 'var(--text-main)' : 'var(--text-muted)' }}>
          Annually <span style={{ color: 'var(--accent)', fontSize: '12px', marginLeft: '4px', fontWeight: '700' }}>Save 20%</span>
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '64px', maxWidth: '800px', margin: '0 auto 64px' }}>
        
        {/* Free Tier */}
        <div className="bento-card" style={{ padding: '40px' }}>
          <h3 className="mb-2">Free</h3>
          <p className="text-muted mb-8">Essential tools for daily grounding.</p>
          <div className="mb-8">
            <span style={{ fontSize: '48px', fontWeight: '800' }}>$0</span>
            <span className="text-muted"> / forever</span>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
            <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--accent)' }}>✓</span> Daily check-ins</li>
            <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--accent)' }}>✓</span> Basic mood tracking</li>
            <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--accent)' }}>✓</span> Foundational exercises</li>
          </ul>
          <div className="text-center">
            <WaitlistForm location="pricing" />
          </div>
        </div>

        {/* Plus Tier */}
        <div className="bento-card" style={{ padding: '40px', border: '2px solid var(--accent)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent)', color: 'white', padding: '4px 16px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>RECOMMENDED</div>
          <h3 className="mb-2">Serene Plus</h3>
          <p className="text-muted mb-8">Deep analytics and personalized CBT.</p>
          <div className="mb-8">
            <span style={{ fontSize: '48px', fontWeight: '800' }}>{isAnnual ? '$8' : '$10'}</span>
            <span className="text-muted"> / month</span>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
            <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--accent)' }}>✓</span> Everything in Free</li>
            <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--accent)' }}>✓</span> Full CBT exercise library</li>
            <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--accent)' }}>✓</span> Advanced emotional analytics</li>
            <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--accent)' }}>✓</span> Personalized recommendations</li>
          </ul>
          <div className="text-center">
            <WaitlistForm location="pricing" />
          </div>
        </div>

      </div>

      {/* FAQ Accordion */}
      <div className="mb-32" style={{ maxWidth: '800px', margin: '0 auto 64px' }}>
        <h2 className="text-center mb-8">Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden' }}>
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px', background: 'none', border: 'none', color: 'var(--text-main)', fontSize: '18px', fontWeight: '600', cursor: 'pointer', textAlign: 'left' }}
              >
                {faq.q}
                {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openFaq === idx && (
                <div style={{ padding: '0 24px 24px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
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

export default Pricing;
