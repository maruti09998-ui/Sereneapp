import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-pill logo-pill">
          <Link to="/" className="logo-link">
            <img src="/logo.png" alt="Serene Logo" style={{ height: '32px', width: 'auto' }} />
          </Link>
        </div>

        <div className="nav-pill links-pill hidden-mobile">
          <Link to="/" className="nav-link">How it works</Link>
          <Link to="/approach" className="nav-link">Approach</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="/safety" className="nav-link">Safety</Link>
        </div>

        <div className="nav-pill cta-pill hidden-mobile">
          <Link to="/waitlist" className="btn btn-hero" style={{ padding: '8px 16px', fontSize: '14px' }}>
            Join waitlist
          </Link>
        </div>

        <div className="nav-pill mobile-toggle" style={{ display: 'none' }}>
          <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', padding: '8px', cursor: 'pointer', color: 'var(--surface)' }}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="mobile-menu" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <Link to="/" style={{ color: 'var(--text-main)' }} onClick={() => setIsOpen(false)}>How it works</Link>
          <Link to="/approach" style={{ color: 'var(--text-main)' }} onClick={() => setIsOpen(false)}>Approach</Link>
          <Link to="/pricing" style={{ color: 'var(--text-main)' }} onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link to="/safety" style={{ color: 'var(--text-main)' }} onClick={() => setIsOpen(false)}>Safety</Link>
          <Link to="/waitlist" style={{ color: 'var(--accent)' }} onClick={() => setIsOpen(false)}>Join waitlist</Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
