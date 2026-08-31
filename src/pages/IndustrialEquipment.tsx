import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact'

const industrialServices = [
  {
    icon: '⚙️',
    title: 'PLC & SCADA Software Development',
    description:
      'We design, develop, and commission PLC programs and SCADA/HMI systems for process automation, discrete manufacturing, and heavy machinery — using Siemens, Rockwell, ABB, and Schneider platforms.',
  },
  {
    icon: '🛡️',
    title: 'Functional Safety (IEC 61508 / IEC 62061)',
    description:
      'Our safety engineers perform hazard analysis, SIL determination, FMEA, safety function design, and verification/validation across SIL 1–SIL 3 to ensure machinery and process safety compliance.',
  },
  {
    icon: '🔧',
    title: 'Embedded Controls & Motor Drives',
    description:
      'From servo and VFD control software to hydraulic/pneumatic valve controllers and CNC motion systems — we build real-time embedded firmware for industrial actuators, drives, and controllers.',
  },
  {
    icon: '📡',
    title: 'Industrial IoT & Edge Computing',
    description:
      'We develop IIoT gateways, edge analytics, and OPC UA/MQTT-based data pipelines that connect shop-floor equipment to cloud platforms — enabling real-time monitoring and remote diagnostics.',
  },
  {
    icon: '🧪',
    title: 'HIL & Automated Test Systems',
    description:
      'Our test engineers design and execute Hardware-in-the-Loop test benches, automated end-of-line testers, and data acquisition systems for validating industrial control units and powertrains.',
  },
  {
    icon: '🤖',
    title: 'Robotics & Motion Control',
    description:
      'We develop motion planning, kinematic control, path optimization, and safety-rated monitoring software for industrial robots, AGVs, AMRs, and automated material handling systems.',
  },
  {
    icon: '☁️',
    title: 'Predictive Maintenance & Digital Twins',
    description:
      'Leveraging vibration analysis, thermal imaging, and AI/ML models to build digital twins of heavy machinery — enabling condition-based maintenance and asset lifecycle optimization.',
  },
  {
    icon: '🔒',
    title: 'Industrial Cybersecurity (IEC 62443)',
    description:
      'Threat modeling, network segmentation, secure remote access, intrusion detection, and compliance with IEC 62443 and NIST CSF — protecting critical industrial infrastructure from cyber threats.',
  },
]

const workCulturePoints = [
  {
    number: '01',
    title: 'Safety & Reliability First',
    description:
      'Every system we engineer for heavy industry is designed with fail-safe principles. Our engineers follow rigorous safety lifecycle processes, ensuring machines operate reliably in the most demanding environments.',
  },
  {
    number: '02',
    title: 'Cross-Domain Engineering Pods',
    description:
      'Our industrial teams combine controls engineers, embedded developers, safety analysts, and domain experts from manufacturing, mining, energy, and construction — delivering holistic solutions.',
  },
  {
    number: '03',
    title: 'Standards-Driven Development',
    description:
      'We follow IEC 61508, Machinery Directive, and industry-specific standards from concept through commissioning — ensuring every deliverable meets regulatory and customer requirements.',
  },
  {
    number: '04',
    title: 'Field-Ready Engineering',
    description:
      'Our engineers are experienced in on-site commissioning, factory acceptance testing (FAT), and site acceptance testing (SAT) — bridging the gap between software development and real-world deployment.',
  },
  {
    number: '05',
    title: 'Continuous Improvement & Kaizen',
    description:
      'We embrace lean engineering practices, continuous integration, and iterative improvement — mirroring the operational excellence standards of world-class heavy industry manufacturers.',
  },
]

const keyStandards = [
  'IEC 61508 (Functional Safety)',
  'IEC 62061 (Machine Safety)',
  'ISO 13849 (Safety of Machinery)',
  'IEC 62443 (Industrial Cybersecurity)',
  'IEC 61131-3 (PLC Programming)',
  'OPC UA (Interoperability)',
  'ISA-95 / IEC 62264',
  'Machinery Directive 2006/42/EC',
  'ATEX / IECEx (Hazardous Areas)',
  'ISO 12100 (Risk Assessment)',
]

const toolsAndTechnologies = [
  { category: 'PLC & SCADA', tools: 'Siemens TIA Portal, Rockwell Studio 5000, ABB AC500, Schneider EcoStruxure, Codesys' },
  { category: 'Embedded & RTOS', tools: 'FreeRTOS, VxWorks, QNX, Embedded Linux, Zephyr, TI-RTOS' },
  { category: 'Safety & Analysis', tools: 'SISTEMA, Medini Analyze, APIS IQ, IBM DOORS, Polarion' },
  { category: 'IIoT & Protocols', tools: 'OPC UA, MQTT, Modbus, PROFINET, EtherCAT, EtherNet/IP, CAN' },
  { category: 'DevOps & CI/CD', tools: 'Jenkins, GitLab CI, Docker, Artifactory, SonarQube, LDRA' },
  { category: 'Languages', tools: 'C, C++, Structured Text, Python, Rust, MATLAB/Simulink' },
]

const processSteps = [
  {
    step: '01',
    title: 'Requirements & Hazard Analysis',
    description: 'Capture system requirements, perform hazard identification, risk assessment, and define SIL targets per IEC 61508.',
  },
  {
    step: '02',
    title: 'System Architecture & Safety Concept',
    description: 'Define control system architecture, safety instrumented functions, redundancy patterns, and interface specifications.',
  },
  {
    step: '03',
    title: 'Development & Integration',
    description: 'Iterative development of PLC/embedded software with code reviews, static analysis, and continuous integration.',
  },
  {
    step: '04',
    title: 'Verification, Validation & FAT',
    description: 'Automated testing across HIL, SIL, and factory acceptance tests — plus safety and cybersecurity validation.',
  },
  {
    step: '05',
    title: 'Commissioning & Lifecycle Support',
    description: 'On-site commissioning, SAT execution, performance optimization, and ongoing maintenance and lifecycle support.',
  },
]

export default function IndustrialEquipment() {
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
              Industry — Industrial Equipment & Heavy Machinery
            </div>
            <h1>
              Powering the Future of{' '}
              <span className="gradient-text">Industrial Engineering</span>
            </h1>
            <p className="auto-hero-subtitle">
              From PLC & SCADA systems to industrial IoT, robotics, and predictive maintenance — we deliver mission-critical engineering solutions for heavy machinery, manufacturing, mining, energy, and construction. Our engineers operate at the intersection of safety, automation, and operational excellence.
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
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80"
              alt="Industrial equipment and heavy machinery"
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
            <h2>End-to-End Industrial Engineering Services</h2>
            <p className="lead">
              We cover the entire industrial automation lifecycle — from control system design and embedded firmware through IIoT integration, testing, and on-site commissioning.
            </p>
          </div>

          <div className="auto-services-grid">
            {industrialServices.map((service) => (
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
            <h2>Our Industrial Development Process</h2>
            <p className="lead">
              A structured, safety-lifecycle aligned development process that ensures reliability, compliance, and operational readiness at every stage.
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
            <h2>How Our Industrial Engineering Teams Operate</h2>
            <p className="lead">
              Our industrial engineering culture is built around safety integrity, field-ready expertise, and continuous improvement — meeting the demands of the most challenging heavy industry environments.
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
                  We adhere to the most rigorous industrial safety and cybersecurity standards, ensuring every solution is certified, reliable, and ready for production deployment.
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

      {/* ── Why Choose BGLW for Industrial ── */}
      <section className="auto-why section">
        <div className="container">
          <div className="section-heading center">
            <div className="eyebrow">Why BGLW for Industrial?</div>
            <h2>Your Engineering Partner for Smart Industry & Heavy Machinery</h2>
          </div>

          <div className="auto-why-grid">
            <div className="auto-why-card auto-why-card--accent">
              <div className="auto-why-stat">150<span>+</span></div>
              <h3>Skilled Engineers</h3>
              <p>Specializing in controls, embedded systems, IIoT, safety, and industrial cybersecurity.</p>
            </div>
            <div className="auto-why-card">
              <div className="auto-why-stat">40<span>+</span></div>
              <h3>Projects Delivered</h3>
              <p>Across manufacturing, mining, energy, construction, and heavy machinery OEMs.</p>
            </div>
            <div className="auto-why-card">
              <div className="auto-why-stat">SIL 3</div>
              <h3>Safety Integrity</h3>
              <p>Proven delivery of SIL 2 and SIL 3 certified safety-critical industrial control systems.</p>
            </div>
            <div className="auto-why-card auto-why-card--accent">
              <div className="auto-why-stat">24/7</div>
              <h3>Global Delivery</h3>
              <p>Onshore, nearshore, and offshore models supporting industrial clients across continents.</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}
