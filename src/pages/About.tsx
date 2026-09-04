export default function About() {
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

        <div className="about-grid">
          <article className="about-card accent">
            <span className="card-kicker">Our Vision</span>
            <h3>Embedded systems and automotive software are where we started.</h3>
            <p>To build smarter tech solutions that empower us all, transforming ideas 
              into sustainable digital realities across IT and embedded landscapes.
            </p>
          </article>

          <article className="about-card">
            <span className="card-kicker">Our Mission</span>
            <h3>To help businesses build better products and solve complex engineering challenges.</h3>
            <p>
              To deliver reliable, bespoke software and embedded solutions from initial concept to long-term 
              maintenance—fostering enduring partnerships, exceptional user experiences, and measurable value for our clients
            </p>
          </article>
        </div>

      </div>
    </section>
  )
}
