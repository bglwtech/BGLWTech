import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import logo from './assets/logo.png'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="page-shell">
      <header className={`site-header ${menuOpen ? 'nav-open' : ''}`}>
        <div className="container nav-wrap">
          <Link to="/" className="brand" aria-label="BGLW Technologies home">
            <img src={logo} alt="BGLW Technologies logo" className="brand-logo" />
          </Link>

          <button
            className="nav-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((state) => !state)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className="site-nav" aria-label="Main navigation">
            <NavLink to="/services" onClick={() => setMenuOpen(false)} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Services</NavLink>
            <div className="about-menu">
              <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>About</NavLink>
              <div className="about-menu-items">
                <NavLink
                  to="/who-we-are"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => `about-menu-link${isActive ? ' active' : ''}`}
                >
                  Who We Are
                </NavLink>
              </div>
            </div>
            <NavLink to="/careers" onClick={() => setMenuOpen(false)} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Careers</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>Contact</NavLink>
          </nav>

          <Link to="/contact" className="btn btn-primary desktop-only">
            Contact Us
          </Link>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand-block">
            <Link to="/" className="brand footer-brand" aria-label="BGLW Technologies home">
              <img src={logo} alt="BGLW Technologies logo" className="brand-logo" />
            </Link>
          </div>

          <div className="footer-column">
            <h3>About Us</h3>
            <Link to="/who-we-are">Who We Are</Link>
          </div>

          <div className="footer-column">
            <h3>Services</h3>
            <Link to="/services">Embedded Systems Engineering</Link>
            <Link to="/services">Functional Safety &amp; Security</Link>
            <Link to="/services">Digital Transformation</Link>
            <Link to="/services">Cybersecurity, SOC &amp; Compliance</Link>
            <Link to="/services">AI &amp; Data Engineering</Link>
          </div>

          <div className="footer-column">
            <h3>Industries</h3>
            <Link to="/automotive">Automotive</Link>
            <Link to="/industrial-equipment">Industrial</Link>
            <Link to="/healthcare">Healthcare</Link>
            <Link to="/rail-transportation">Rail Transportation</Link>
          </div>

          <div className="footer-column">
            <h3>Careers</h3>
            <Link to="/careers">Careers</Link>
          </div>

          <div className="footer-column social-column">
            <h3>Connect With Us</h3>
            <a href="mailto:namaste@bglwtech.com">namaste@bglwtech.com</a>
            <a href="tel:9765539953">+91 97655 39953</a>
            <a href="https://www.linkedin.com/company/bglw-technologies/" target="_blank" rel="noreferrer" className="linkedin-link" aria-label="LinkedIn">
              Linked<span>in</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <span>
              © Copyright {new Date().getFullYear()} BGLW Technologies. All Rights Reserved. Legal Disclaimer Open Source License Disclosure - Privacy Policy
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
