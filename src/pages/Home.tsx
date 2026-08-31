import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact'

const showcaseCards = [
  {
    title: 'Automotive',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Rail Transportation',
    image:
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Industrial Equipment & Heavy Machinery',
    image:
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Healthcare & MedTech',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
  },
]

const whyBglwPoints = [
  {
    number: '01',
    title: 'Deep Technical Expertise',
    description: 'Strong foundation in embedded and automotive engineering.',
  },
  {
    number: '02',
    title: 'Product-Focused Thinking',
    description: 'We understand that technology must ultimately solve a real product or business problem.',
  },
  {
    number: '03',
    title: 'Scalable Engineering',
    description: 'From individual engineering support to complete project development.',
  },
  {
    number: '04',
    title: 'Security & Reliability',
    description: 'Building secure, stable and production-ready technology solutions.',
  },
  {
    number: '05',
    title: 'Flexible Engagement',
    description: 'Project-based development, consulting, dedicated engineering teams and staffing support.',
  },
]

const homeServices = [
  {
    title: 'Industrial & Embedded Systems Engineering',
    description: 'Embedded software, firmware, RTOS, BSP, microcontroller, and HIL test automation for automotive, aerospace, rail, defense, and industrial sectors.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Functional Safety & Embedded Security',
    description: 'Safety auditing and compliance under ISO 26262, DO-178C, EN 50128, IEC 61508, plus HSM, secure boot, OTA, and ISO/SAE 21434 cybersecurity.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Digital Transformation & Custom Software',
    description: 'Web & mobile apps, cloud-native architectures, microservices, SaaS, API development, UI/UX design, and CI/CD pipeline engineering.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Testing & Quality Assurance',
    description: 'Software V&V, automated test benches, functional, performance, regression, and security testing across embedded and enterprise systems.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Cybersecurity, SOC & Compliance',
    description: 'SOC setup, threat hunting, VAPT, digital forensics, incident response, and GRC consulting across ISO 27001, GDPR, and global frameworks.',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Artificial Intelligence & Data Engineering',
    description: 'AI/ML models, Edge AI, computer vision, predictive maintenance, digital twins, and big data for mobility, smart infra, and enterprises.',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'IT Infrastructure & Managed Services',
    description: 'IT consulting, system integration, DevOps/DevSecOps, cloud migration, network security, and managed services for public and private sectors.',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Engineering Outsourcing, BPO & Staffing',
    description: 'ER&D outsourcing, technical staffing, ITES, project management, and BPO through onshore, nearshore, and offshore delivery models.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Skill Development, Training & Academics',
    description: 'Training centers, certification bootcamps, workshops, faculty development, industrial internships, and academic MoU partnerships.',
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Hardware Supply & Technology Integration',
    description: 'Import, export, sale, lease, and integration of embedded dev kits, cybersecurity appliances, server infrastructure, and networking equipment.',
    image:
      'https://images.unsplash.com/photo-1555618568-2babb5e1535f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Intellectual Property & R&D',
    description: 'Technology research, product innovation, patent filing, trademark registration, and commercialization of proprietary software and hardware.',
    image:
      'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Strategic Alliances & Ancillary Operations',
    description: 'Joint ventures, strategic partnerships, and any lawful business incidental to the core technology and engineering objectives of the firm.',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function Home() {
  const serviceTrackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const track = serviceTrackRef.current
    if (!track) return

    const cards = Array.from(track.children) as HTMLElement[]
    if (!cards.length) return

    const stepAmount = cards[0].offsetWidth + 18

    const scrollServices = () => {
      const maxScroll = track.scrollWidth - track.clientWidth

      if (track.scrollLeft >= maxScroll - 2) {
        track.scrollTo({ left: 0, behavior: 'smooth' })
        return
      }

      track.scrollTo({
        left: track.scrollLeft + stepAmount,
        behavior: 'smooth',
      })
    }

    const timer = window.setInterval(scrollServices, 3500)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <div id="top">
      <section className="showcase-hero">
        {/* Decorative animated orbs */}
        <div className="hero-orb hero-orb--1" aria-hidden="true" />
        <div className="hero-orb hero-orb--2" aria-hidden="true" />
        <div className="hero-orb hero-orb--3" aria-hidden="true" />

        <div className="container">
          <div className="showcase-header">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Trusted by Global Enterprises
            </div>

            <h1>
              Your Trusted Outsourcing Partner for{' '}
              <span className="gradient-text">Digital, ER&amp;D Services</span>
            </h1>
            <p className="hero-subtitle">
              The software expert to transform your business at speed and scale — delivering mission-critical engineering solutions across embedded, automotive, cloud, and AI.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-hero">
                <span>Get Started</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
              <Link to="/services" className="btn btn-secondary btn-hero">
                Explore Services
              </Link>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <strong className="hero-stat-number">150<span className="hero-stat-plus">+</span></strong>
                <span>Engineers</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <strong className="hero-stat-number">50<span className="hero-stat-plus">+</span></strong>
                <span>Projects Delivered</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <strong className="hero-stat-number">4<span className="hero-stat-plus">+</span></strong>
                <span>Industries Served</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <strong className="hero-stat-number">99<span className="hero-stat-plus">%</span></strong>
                <span>Client Retention</span>
              </div>
            </div>
          </div>

          <div className="showcase-grid" aria-label="Industry sectors">
            {showcaseCards.map((card) => {
              const inner = (
                <article
                  key={card.title}
                  className="showcase-card"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(5,24,35,0.18), rgba(7,19,31,0.7)), url("${card.image}")`,
                  }}
                >
                  <div className="showcase-card-title">{card.title}</div>
                </article>
              )

              const routeMap: Record<string, string> = {
                'Automotive': '/automotive',
                'Rail Transportation': '/rail-transportation',
                'Industrial Equipment & Heavy Machinery': '/industrial-equipment',
                'Healthcare & MedTech': '/healthcare',
              }

              if (routeMap[card.title]) {
                return (
                  <Link key={card.title} to={routeMap[card.title]} style={{ display: 'contents' }}>
                    {inner}
                  </Link>
                )
              }

              return inner
            })}
          </div>
        </div>
      </section>

      <section className="home-services-section section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Our Services</div>
            <h2>Technology services that power software-driven growth.</h2>
          </div>

          <div className="home-services-track" ref={serviceTrackRef} aria-label="Service offerings">
            {homeServices.map((service) => (
              <article
                key={service.title}
                className="showcase-card home-service-card"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(5,24,35,0.18), rgba(7,19,31,0.7)), url("${service.image}")`,
                }}
              >
                <div className="showcase-card-copy">
                  <div className="showcase-card-title">{service.title}</div>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why-bglw-section section">
        <div className="why-bglw-shell">
          <div className="section-heading why-bglw-heading">
            <div className="eyebrow">Why BGLW Technologies?</div>
            <h2>Built Around Engineering Excellence</h2>
          </div>

          <div className="why-bglw-grid">
            {whyBglwPoints.map((point) => (
              <article key={point.number} className="why-bglw-card">
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Contact />

    </div>
  )
}
