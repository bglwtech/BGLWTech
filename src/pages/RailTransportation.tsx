import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact'

const railServices = [
  {
    icon: '🚆',
    title: 'Signalling & Train Control Systems',
    description:
      'We develop and integrate ETCS, CBTC, and interlocking software — including wayside and onboard signalling controllers — ensuring safe, efficient train operations across mainline and urban rail networks.',
  },
  {
    icon: '🛡️',
    title: 'Functional Safety (EN 50128 / IEC 61508)',
    description:
      'Our safety engineers conduct hazard analysis, SIL assessment, FMEA, and full V&V activities for SIL 1–SIL 4 rail systems, ensuring compliance with CENELEC standards and railway safety directives.',
  },
  {
    icon: '🔧',
    title: 'Embedded Software for Rolling Stock',
    description:
      'From traction control, brake management, and door control units to HVAC and passenger information systems — we build safety-critical embedded software for trains, metros, and trams.',
  },
  {
    icon: '📡',
    title: 'Communication & Network Systems',
    description:
      'Expertise in GSM-R, FRMCS, train-to-ground communication, onboard Ethernet backbone, and TCMS (Train Control & Management Systems) that form the digital nervous system of modern rail vehicles.',
  },
  {
    icon: '🧪',
    title: 'HIL & Simulation-Based Testing',
    description:
      'We design and execute Hardware-in-the-Loop test benches, simulation environments, and automated test suites for rail ECUs — validating safety functions under all operational scenarios.',
  },
  {
    icon: '🤖',
    title: 'Predictive Maintenance & Digital Twins',
    description:
      'Leveraging IoT sensors, edge computing, and AI/ML models to build digital twins of rail assets — enabling condition-based maintenance, anomaly detection, and fleet optimization.',
  },
  {
    icon: '☁️',
    title: 'Rail Operations & Fleet Management',
    description:
      'Cloud-native platforms for real-time fleet tracking, route optimization, energy management, crew scheduling, and passenger flow analytics — driving operational excellence.',
  },
  {
    icon: '🔒',
    title: 'Cybersecurity for Rail Systems',
    description:
      'Threat analysis, secure architecture design, intrusion detection, and compliance with TS 50701 and IEC 62443 — protecting rail infrastructure from evolving cyber threats.',
  },
]

const workCulturePoints = [
  {
    number: '01',
    title: 'Safety-First Engineering Culture',
    description:
      'Every line of code we write for rail is governed by safety integrity levels. Our engineers are trained in CENELEC standards and operate under strict safety management systems.',
  },
  {
    number: '02',
    title: 'V-Model Development Lifecycle',
    description:
      'We follow the classic V-model with rigorous requirements traceability, design reviews, code inspections, and multi-level verification — as mandated by EN 50128.',
  },
  {
    number: '03',
    title: 'Independent Verification & Validation',
    description:
      'Our IV&V teams operate independently from development, providing unbiased safety assessments, code reviews, and test coverage analysis to meet assessor expectations.',
  },
  {
    number: '04',
    title: 'Domain-Expert Teams',
    description:
      'Our rail engineering pods include signalling experts, embedded developers, safety analysts, and rolling stock specialists — ensuring deep domain knowledge in every project.',
  },
  {
    number: '05',
    title: 'Collaboration with Railway Authorities',
    description:
      'We work closely with infrastructure managers, operators, and national safety authorities — understanding regulatory frameworks across European, Indian, and global rail markets.',
  },
]

const keyStandards = [
  'EN 50128 (Software)',
  'EN 50129 (Safety Systems)',
  'EN 50126 (RAMS)',
  'IEC 61508 (Functional Safety)',
  'IEC 62278 (RAMS)',
  'IEC 62280 (Communication Safety)',
  'TS 50701 (Cybersecurity)',
  'IEC 62443 (Industrial Security)',
  'ETCS Baseline 3',
  'ERA TSIs',
]

const toolsAndTechnologies = [
  { category: 'Embedded & RTOS', tools: 'VxWorks, QNX, Embedded Linux, INTEGRITY, FreeRTOS, Safe RTOS' },
  { category: 'Safety Analysis', tools: 'Medini Analyze, APIS IQ, FaultTree+, IBM DOORS, Polarion' },
  { category: 'Testing & Simulation', tools: 'dSPACE, NI TestStand, Railway Dynamics Simulators, MATLAB/Simulink' },
  { category: 'Communication', tools: 'MVB, WTB, Ethernet (TCN), GSM-R, FRMCS, Profinet, CAN' },
  { category: 'DevOps & CI/CD', tools: 'Jenkins, GitLab CI, Docker, Artifactory, LDRA, Polyspace' },
  { category: 'Languages', tools: 'C, C++, Ada, Python, CAPL, MATLAB' },
]

const processSteps = [
  {
    step: '01',
    title: 'System Requirements & RAMS',
    description: 'Capture system-level requirements, perform RAMS analysis (Reliability, Availability, Maintainability, Safety), and define SIL targets.',
  },
  {
    step: '02',
    title: 'Safety Case & Hazard Analysis',
    description: 'Develop the safety case structure, conduct hazard identification, risk assessment, and derive safety requirements.',
  },
  {
    step: '03',
    title: 'Architecture & Detailed Design',
    description: 'Define software architecture with safety partitioning, redundancy patterns, and interface specifications per EN 50128.',
  },
  {
    step: '04',
    title: 'Implementation & Static Analysis',
    description: 'Develop safety-critical code with MISRA compliance, static analysis (LDRA, Polyspace), and peer code reviews.',
  },
  {
    step: '05',
    title: 'V&V, Certification & Deployment',
    description: 'Execute multi-level testing (unit, integration, system), IV&V assessment, safety authority approval, and field deployment.',
  },
]

export default function RailTransportation() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="automotive-page">
      {/* ── Hero Banner ── */}
      <section className="auto-hero">
        <div className="auto-hero-orb auto-hero-orb--1" aria-hidden="true" />
        <div className="auto-hero-orb auto-hero-orb--2" aria-hidden="true" />
        <div className="container">
          <div className="auto-hero-content">
            <div className="auto-hero-badge">
              <span className="auto-hero-badge-dot" />
              Industry — Rail Transportation
            </div>
            <h1>
              Engineering the Future of{' '}
              <span className="gradient-text">Rail Transportation</span>
            </h1>
            <p className="auto-hero-subtitle">
              From signalling systems and rolling stock software to predictive maintenance and cybersecurity — we deliver safety-critical rail engineering solutions that keep the world moving. Our teams operate at the intersection of safety, innovation, and operational excellence.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-hero">
                <span>Talk to Our Experts</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <Link to="/services" className="btn btn-secondary btn-hero">
                All Services
              </Link>
            </div>
          </div>

          <div className="auto-hero-image">
            <img
              src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80"
              alt="Rail transportation engineering"
            />
            <div className="auto-hero-image-overlay" />
          </div>
        </div>
      </section>

      {/* ── What We Provide ── */}
      <section className="auto-services section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">What We Provide</div>
            <h2>End-to-End Rail Engineering Services</h2>
            <p className="lead">
              We cover the entire rail software lifecycle — from safety-critical signalling systems to connected fleet management platforms.
            </p>
          </div>

          <div className="auto-services-grid">
            {railServices.map((service) => (
              <article key={service.title} className="auto-service-card">
                <div className="auto-service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="auto-process section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">How We Work</div>
            <h2>Our Rail Development Process</h2>
            <p className="lead">
              A V-model aligned, CENELEC-compliant development lifecycle that ensures safety, quality, and regulatory approval at every milestone.
            </p>
          </div>

          <div className="auto-process-timeline">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="auto-process-step">
                <div className="auto-process-number">{step.step}</div>
                <div className="auto-process-connector" aria-hidden="true" />
                <div className="auto-process-body">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="auto-process-arrow" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Work Culture ── */}
      <section className="auto-culture section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Work Culture</div>
            <h2>How Our Rail Engineering Teams Operate</h2>
            <p className="lead">
              Our rail engineering culture is built around safety integrity, deep domain expertise, and rigorous process discipline — meeting the expectations of the most demanding railway authorities.
            </p>
          </div>

          <div className="auto-culture-grid">
            {workCulturePoints.map((point) => (
              <article key={point.number} className="auto-culture-card">
                <div className="auto-culture-number">{point.number}</div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Standards & Tools ── */}
      <section className="auto-standards section">
        <div className="container">
          <div className="auto-standards-split">
            <div className="auto-standards-left">
              <div className="section-heading">
                <div className="eyebrow">Standards & Compliance</div>
                <h2>Industry Standards We Follow</h2>
                <p className="lead">
                  We adhere to the most rigorous rail safety and cybersecurity standards, ensuring every solution is certified, safe, and ready for revenue service.
                </p>
              </div>
              <div className="auto-standards-tags">
                {keyStandards.map((standard) => (
                  <span key={standard} className="auto-standard-tag">{standard}</span>
                ))}
              </div>
            </div>

            <div className="auto-standards-right">
              <div className="section-heading">
                <div className="eyebrow">Tools & Technologies</div>
                <h2>Our Tech Stack</h2>
              </div>
              <div className="auto-tools-list">
                {toolsAndTechnologies.map((item) => (
                  <div key={item.category} className="auto-tool-row">
                    <span className="auto-tool-category">{item.category}</span>
                    <span className="auto-tool-items">{item.tools}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose BGLW for Rail ── */}
      <section className="auto-why section">
        <div className="container">
          <div className="section-heading center">
            <div className="eyebrow">Why BGLW for Rail?</div>
            <h2>Your Engineering Partner for Next-Gen Rail Systems</h2>
          </div>

          <div className="auto-why-grid">
            <div className="auto-why-card auto-why-card--accent">
              <div className="auto-why-stat">150<span>+</span></div>
              <h3>Skilled Engineers</h3>
              <p>Specializing in signalling, rolling stock, safety, and rail cybersecurity.</p>
            </div>
            <div className="auto-why-card">
              <div className="auto-why-stat">50<span>+</span></div>
              <h3>Projects Delivered</h3>
              <p>Across mainline, metro, light rail, and high-speed rail systems worldwide.</p>
            </div>
            <div className="auto-why-card">
              <div className="auto-why-stat">SIL 4</div>
              <h3>Highest Safety Integrity</h3>
              <p>Proven delivery of SIL 3 and SIL 4 certified safety-critical rail software.</p>
            </div>
            <div className="auto-why-card auto-why-card--accent">
              <div className="auto-why-stat">24/7</div>
              <h3>Global Delivery</h3>
              <p>Onshore, nearshore, and offshore models supporting rail operators across continents.</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}
