import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact'

const automotiveServices = [
  {
    icon: '⚡',
    title: 'Embedded Software & ECU Development',
    description:
      'We design, develop, and integrate embedded software for Electronic Control Units (ECUs) — from powertrain and body controllers to ADAS and infotainment — following AUTOSAR Classic & Adaptive architectures.',
  },
  {
    icon: '🛡️',
    title: 'Functional Safety (ISO 26262)',
    description:
      'Our safety engineers perform hazard analysis, FMEA, safety concept development, and verification/validation across all ASIL levels (A–D), ensuring your systems meet the highest functional safety standards.',
  },
  {
    icon: '🔒',
    title: 'Automotive Cybersecurity (ISO/SAE 21434)',
    description:
      'We deliver threat analysis & risk assessment (TARA), secure boot, HSM integration, intrusion detection, and end-to-end OTA security — aligning with UN R155 and ISO/SAE 21434.',
  },
  {
    icon: '🧪',
    title: 'HIL, SIL & MIL Test Automation',
    description:
      'Our test engineers build and execute automated test benches using dSPACE, Vector CANoe, NI tools, and custom frameworks for Hardware-in-the-Loop, Software-in-the-Loop, and Model-in-the-Loop testing.',
  },
  {
    icon: '🤖',
    title: 'ADAS & Autonomous Driving',
    description:
      'We develop perception, sensor fusion, path planning, and decision-making algorithms for Level 2+ to Level 4 autonomous driving, leveraging lidar, radar, camera, and V2X data.',
  },
  {
    icon: '🔌',
    title: 'EV & E-Mobility Solutions',
    description:
      'From Battery Management Systems (BMS) and motor control to charging infrastructure software and fleet management platforms — we power the electric revolution.',
  },
  {
    icon: '📡',
    title: 'Vehicle Diagnostics & Communication',
    description:
      'Expertise in UDS, OBD-II, CAN, CAN-FD, LIN, FlexRay, and Ethernet-based diagnostics. We develop diagnostic tools, flash bootloaders, and ECU reprogramming solutions.',
  },
  {
    icon: '☁️',
    title: 'Connected Vehicle & Cloud Platforms',
    description:
      'Building IoT-enabled telematics, OTA update platforms, predictive maintenance dashboards, and cloud-native backends for next-gen connected vehicle ecosystems.',
  },
]

const workCulturePoints = [
  {
    number: '01',
    title: 'Agile & ASPICE-Compliant',
    description:
      'We blend agile development speed with Automotive SPICE process maturity — delivering rapid iterations while maintaining full traceability, documentation, and governance required by OEMs.',
  },
  {
    number: '02',
    title: 'Cross-Functional Pods',
    description:
      'Our automotive teams are organized into autonomous pods of embedded engineers, safety analysts, test automation experts, and domain leads — enabling fast, end-to-end delivery.',
  },
  {
    number: '03',
    title: 'Continuous Integration & DevOps',
    description:
      'We embrace CI/CD pipelines with Jenkins, GitLab CI, and container-based build environments — ensuring every commit is tested, validated, and production-ready.',
  },
  {
    number: '04',
    title: 'Knowledge Sharing Culture',
    description:
      'Weekly tech talks, internal hackathons, and a shared knowledge base ensure our engineers stay at the cutting edge of automotive technology trends and standards.',
  },
  {
    number: '05',
    title: 'OEM & Tier-1 Aligned Processes',
    description:
      'We operate under the same standards, tools, and governance models used by leading OEMs and Tier-1 suppliers — making integration and collaboration seamless.',
  },
]

const keyStandards = [
  'ISO 26262 (Functional Safety)',
  'ISO/SAE 21434 (Cybersecurity)',
  'AUTOSAR Classic & Adaptive',
  'Automotive SPICE (ASPICE)',
  'MISRA C/C++',
  'UN R155/R156 (UN-ECE)',
  'DO-178C (Cross-domain)',
  'ISO 11898 (CAN Bus)',
  'SAE J1939',
  'UDS / OBD-II',
]

const toolsAndTechnologies = [
  { category: 'Embedded & RTOS', tools: 'AUTOSAR BSW, FreeRTOS, QNX, VxWorks, Embedded Linux, Zephyr' },
  { category: 'Safety & FMEA', tools: 'Medini Analyze, APIS IQ, IBM DOORS, Polarion, Jama Connect' },
  { category: 'Testing & Simulation', tools: 'dSPACE, Vector CANoe, NI TestStand, MATLAB/Simulink, CarMaker' },
  { category: 'Communication', tools: 'CAN, CAN-FD, LIN, FlexRay, Automotive Ethernet, SOME/IP' },
  { category: 'DevOps & CI/CD', tools: 'Jenkins, GitLab CI, Docker, Artifactory, SonarQube' },
  { category: 'Languages', tools: 'C, C++, Python, CAPL, Rust, MATLAB' },
]

const processSteps = [
  {
    step: '01',
    title: 'Requirement Analysis',
    description: 'Deep-dive into system and software requirements with full traceability (DOORS, Polarion).',
  },
  {
    step: '02',
    title: 'Architecture & Design',
    description: 'Define software architecture, safety concepts, and interface specifications aligned with AUTOSAR.',
  },
  {
    step: '03',
    title: 'Development & Integration',
    description: 'Iterative development with code reviews, static analysis (MISRA), and continuous integration.',
  },
  {
    step: '04',
    title: 'Verification & Validation',
    description: 'Automated testing across MIL, SIL, HIL — plus safety and cybersecurity validation.',
  },
  {
    step: '05',
    title: 'Deployment & Support',
    description: 'Production release, OTA deployment, field monitoring, and ongoing maintenance.',
  },
]

export default function Automotive() {
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
              Industry — Automotive
            </div>
            <h1>
              Driving the Future of{' '}
              <span className="gradient-text">Automotive Engineering</span>
            </h1>
            <p className="auto-hero-subtitle">
              From embedded ECU software to ADAS, cybersecurity, and EV platforms — we deliver
              mission-critical automotive engineering solutions that meet the highest industry
              standards. Our engineers work at the intersection of safety, performance, and
              innovation.
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
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"
              alt="Automotive engineering"
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
            <h2>End-to-End Automotive Engineering Services</h2>
            <p className="lead">
              We cover the entire automotive software lifecycle — from concept and architecture through development, testing, and production deployment.
            </p>
          </div>

          <div className="auto-services-grid">
            {automotiveServices.map((service) => (
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
            <h2>Our Automotive Development Process</h2>
            <p className="lead">
              A structured, V-model aligned development lifecycle that ensures quality, safety, and compliance at every stage.
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
            <h2>How Our Automotive Teams Operate</h2>
            <p className="lead">
              Our automotive engineering culture is built around precision, collaboration, and continuous improvement — mirroring the standards of world-class OEMs.
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
                  We adhere to the most rigorous automotive standards, ensuring every solution is production-grade, safe, and compliant.
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

      {/* ── Why Choose BGLW for Automotive ── */}
      <section className="auto-why section">
        <div className="container">
          <div className="section-heading center">
            <div className="eyebrow">Why BGLW for Automotive?</div>
            <h2>Your Engineering Partner for the Software-Defined Vehicle Era</h2>
          </div>

          <div className="auto-why-grid">
            <div className="auto-why-card auto-why-card--accent">
              <div className="auto-why-stat">150<span>+</span></div>
              <h3>Skilled Engineers</h3>
              <p>Specializing in embedded, safety, ADAS, and EV technologies.</p>
            </div>
            <div className="auto-why-card">
              <div className="auto-why-stat">50<span>+</span></div>
              <h3>Projects Delivered</h3>
              <p>Across powertrain, ADAS, body electronics, and connected vehicles.</p>
            </div>
            <div className="auto-why-card">
              <div className="auto-why-stat">99<span>%</span></div>
              <h3>Client Retention</h3>
              <p>Long-term partnerships with OEMs and Tier-1 automotive suppliers.</p>
            </div>
            <div className="auto-why-card auto-why-card--accent">
              <div className="auto-why-stat">24/7</div>
              <h3>Global Delivery</h3>
              <p>Onshore, nearshore, and offshore models for round-the-clock engineering.</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}
