export default function About() {
  const companyFacts = [
    { label: 'Phone', value: '9765539953' },
    { label: 'Industry', value: 'IT Services and IT Consulting' },
    { label: 'Company size', value: '2-10 employees' },
    { label: 'Headquarters', value: 'Pune, Maharashtra' },
    { label: 'Founded', value: '2026' },
    { label: 'Founder', value: 'BGLW Leadership' },
  ]

  return (
    <section id="about" className="section about-section">
      <div className="container about-shell">
        <div className="about-intro">
          <div className="eyebrow">About us</div>
          <h2>Building reliable technology for a faster-moving world.</h2>
          <p>
            BGLW TECHNOLOGIES is a software and technology services company focused on
            building innovative, reliable, and scalable technology solutions. We work with
            startups, product teams, and technology organizations that need engineering
            partners who can turn complexity into practical, production-ready outcomes.
          </p>
          <p>
            Our journey began in 2026, rooted in embedded systems and automotive software,
            with a focus on software quality, performance, and long-term reliability. As the
            company grows, we continue to expand with a broader mindset around modern
            software engineering, digital transformation, and emerging technology delivery.
          </p>
        </div>

        <div className="about-facts">
          {companyFacts.map((fact) => (
            <div className="fact-item" key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </div>
          ))}
        </div>

        <div className="about-grid">
          <article className="about-card accent">
            <span className="card-kicker">Our focus</span>
            <h3>Embedded systems and automotive software are where we started.</h3>
            <p>
              We bring expertise in firmware development, embedded software, Linux, BSP,
              device drivers, SoC bring-up, bootloaders, AUTOSAR, automotive protocols, and
              cybersecurity to help teams build robust, secure products.
            </p>
          </article>

          <article className="about-card">
            <span className="card-kicker">Our mission</span>
            <h3>To help businesses build better products and solve complex engineering challenges.</h3>
            <p>
              We combine deep technical capability with practical execution to help companies
              innovate faster, reduce risk, and deliver software that performs under real-world conditions.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
