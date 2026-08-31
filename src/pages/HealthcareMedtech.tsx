import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact'

const healthcareServices = [
  {
    icon: '⚕️',
    title: 'Medical Device Software Development',
    description:
      'We develop secure, compliant, and robust software for Class I, II, and III medical devices, ensuring patient safety and regulatory adherence (IEC 62304).',
  },
  {
    icon: '🏥',
    title: 'Healthcare IT & Interoperability',
    description:
      'Building seamless EHR/EMR integrations, telehealth platforms, and health information exchanges using HL7, FHIR, and DICOM standards.',
  },
  {
    icon: '🔒',
    title: 'Cybersecurity & HIPAA Compliance',
    description:
      'End-to-end security architectures, penetration testing, and compliance consulting for medical devices and healthcare IT systems to protect patient data (MDCG, FDA guidance).',
  },
  {
    icon: '📱',
    title: 'Mobile Health (mHealth) Apps',
    description:
      'Developing patient-centric and clinician-facing mobile applications for remote monitoring, chronic disease management, and wellness tracking.',
  },
  {
    icon: '🤖',
    title: 'AI/ML in Diagnostics & Analytics',
    description:
      'Applying predictive analytics, image recognition, and machine learning algorithms (SaMD) to improve diagnostic accuracy and patient outcomes.',
  },
  {
    icon: '🧬',
    title: 'Wearables & IoT for Healthcare',
    description:
      'Embedded software development for biosensors, smart wearables, and IoT gateways to enable continuous, real-time patient monitoring.',
  },
  {
    icon: '🧪',
    title: 'Verification & Validation (V&V)',
    description:
      'Rigorous software testing, including unit, integration, and system testing, backed by complete documentation for regulatory submissions (FDA 510(k), CE Mark).',
  },
  {
    icon: '☁️',
    title: 'Cloud Medical Platforms',
    description:
      'Designing scalable and secure cloud infrastructure architectures for medical data storage, analysis, and device fleet management.',
  },
]

const workCulturePoints = [
  {
    number: '01',
    title: 'Patient-First Engineering',
    description:
      'We embed quality and safety into every line of code, understanding that medical software directly impacts human lives and health outcomes.',
  },
  {
    number: '02',
    title: 'Agile within Regulatory Boundaries',
    description:
      'We utilize Agile methodologies while maintaining the strict documentation, traceability, and design controls required by FDA and ISO regulations.',
  },
  {
    number: '03',
    title: 'Cross-Disciplinary Teams',
    description:
      'Our teams combine software engineers, regulatory experts, and QA specialists to deliver solutions that are both technologically advanced and compliant.',
  },
  {
    number: '04',
    title: 'Continuous Quality Improvement',
    description:
      'We foster a culture of continuous learning and CAPA (Corrective and Preventive Action) to persistently enhance our processes and deliverables.',
  },
  {
    number: '05',
    title: 'Transparent Collaboration',
    description:
      'We work as an extension of your team, providing complete transparency into the development lifecycle, risk management, and V&V activities.',
  },
]

const keyStandards = [
  'ISO 13485 (QMS)',
  'IEC 62304 (Software Lifecycle)',
  'ISO 14971 (Risk Management)',
  'HIPAA / GDPR / HITECH',
  'FDA 21 CFR Part 11 & Part 820',
  'HL7 FHIR & DICOM',
  'IEC 82304 (Health Software)',
  'UL 2900 (Cybersecurity)',
]

const toolsAndTechnologies = [
  { category: 'Embedded & IoT', tools: 'FreeRTOS, Embedded Linux, ARM Cortex, Bluetooth LE, Wi-Fi' },
  { category: 'Data & Interoperability', tools: 'HL7, FHIR, DICOM, Mirth Connect, Intersystems IRIS' },
  { category: 'Compliance & ALM', tools: 'Polarion, Jama Connect, Jira, Confluence, Greenlight Guru' },
  { category: 'Cloud & Backend', tools: 'AWS (HIPAA Eligible), Azure (Health Data Services), Node.js, Python' },
  { category: 'Frontend & Mobile', tools: 'React, React Native, Swift, Kotlin, Flutter' },
  { category: 'Testing & QA', tools: 'Selenium, Appium, VectorCAST, LDRA, Parasoft C/C++test' },
]

const processSteps = [
  {
    step: '01',
    title: 'Concept & Regulatory Strategy',
    description: 'Define intended use, regulatory pathways, and initial risk assessments.',
  },
  {
    step: '02',
    title: 'Requirements & Design Control',
    description: 'Establish software requirements specifications (SRS) and architecture with full traceability.',
  },
  {
    step: '03',
    title: 'Development & Code Quality',
    description: 'Implement software following rigorous coding standards (e.g., MISRA) and continuous integration.',
  },
  {
    step: '04',
    title: 'Verification & Validation',
    description: 'Execute test protocols, perform code reviews, and compile necessary V&V documentation.',
  },
  {
    step: '05',
    title: 'Submission & Post-Market Support',
    description: 'Support FDA/CE submissions and provide ongoing maintenance and security updates.',
  },
]

export default function HealthcareMedtech() {
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
              Industry — Healthcare & MedTech
            </div>
            <h1>
              Innovating <span className="gradient-text">Healthcare Engineering</span>
            </h1>
            <p className="auto-hero-subtitle">
              From secure medical device software (IEC 62304) to connected health platforms and IoMT — we engineer compliant, life-enhancing technologies that meet strict global regulatory standards.
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
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"
              alt="Healthcare and Medical Technology"
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
            <h2>End-to-End MedTech Engineering Services</h2>
            <p className="lead">
              We cover the entire medical software lifecycle — from initial concept and risk management through development, V&V, and post-market surveillance.
            </p>
          </div>

          <div className="auto-services-grid">
            {healthcareServices.map((service) => (
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
            <h2>Our MedTech Development Process</h2>
            <p className="lead">
              A meticulously structured lifecycle that ensures patient safety, rigorous quality assurance, and compliance with global health regulators.
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
            <h2>How Our Healthcare Teams Operate</h2>
            <p className="lead">
              Our engineering culture is built around uncompromising quality, ethical development, and a deep understanding of the regulatory landscape.
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
                  We adhere strictly to the regulatory frameworks that govern medical device software and healthcare data privacy.
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

      {/* ── Why Choose BGLW ── */}
      <section className="auto-why section">
        <div className="container">
          <div className="section-heading center">
            <div className="eyebrow">Why BGLW for Healthcare?</div>
            <h2>Your Partner in Digital Health Innovation</h2>
          </div>

          <div className="auto-why-grid">
            <div className="auto-why-card auto-why-card--accent">
              <div className="auto-why-stat">ISO<span>13485</span></div>
              <h3>Compliant Processes</h3>
              <p>Aligned with top regulatory standards and best practices.</p>
            </div>
            <div className="auto-why-card">
              <div className="auto-why-stat">100<span>%</span></div>
              <h3>Traceability</h3>
              <p>Comprehensive requirements to testing coverage.</p>
            </div>
            <div className="auto-why-card">
              <div className="auto-why-stat">Zero</div>
              <h3>Compromise</h3>
              <p>On patient safety, data security, and software quality.</p>
            </div>
            <div className="auto-why-card auto-why-card--accent">
              <div className="auto-why-stat">Expert</div>
              <h3>Teams</h3>
              <p>Engineers trained in medical software lifecycles.</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}
