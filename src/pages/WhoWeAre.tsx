import bahuraoPhoto from '../assets/bahurao-removebg-preview.png'
import balajiPhoto from '../assets/balaji.w-removebg-preview.png'
import linkedinLogo from '../assets/linkdin_logo-removebg-preview.png'
import nikitaPhoto from '../assets/nikita.w_2-removebg-preview.png'

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="section about-section">
      <div className="container about-shell">
        <div className="about-intro">
          <div className="eyebrow">Who we are</div>
          <h2>Engineering expertise grounded in real-world impact.</h2>
          <p>
            BGLW Technologies is a software and technology services company focused on
            building innovative, reliable, and scalable technology solutions for ambitious
            teams and organizations.
          </p>
          <p>
            We began in 2026 with roots in embedded systems and automotive software. Today,
            our work continues to grow across modern software engineering, digital
            transformation, and emerging technology delivery.
          </p>
        </div>

        <div className="leadership-group">
          <h3 className="leadership-heading">Directors</h3>
          <div className="leadership-grid directors-grid">
            <article className="leadership-card">
              <img className="leadership-photo" src={bahuraoPhoto} alt="Bhaurao Kanhekar" />
              <h3>Bhaurao Kanhekar</h3>
              <span className="card-kicker">Director</span>
              <p>3 decades of engineering experience.</p>
              <a
                className="linkedin-link"
                href="https://www.linkedin.com/in/bhaurao-kanhekar-178b0842a/"
                target="_blank"
                rel="noreferrer"
                aria-label="View Bhaurao Kanhekar on LinkedIn"
              >
                <img src={linkedinLogo} alt="" aria-hidden="true" />
              </a>
            </article>
            <article className="leadership-card">
              <img className="leadership-photo" src={nikitaPhoto} alt="Nikita W" />
              <h3>Nikita W</h3>
              <span className="card-kicker">Director</span>
            </article>
          </div>
        </div>

        <div className="leadership-group adviser-group">
          <h3 className="leadership-heading">Technical Adviser</h3>
          <div className="leadership-grid adviser-grid">
            <article className="leadership-card">
              <img className="leadership-photo" src={balajiPhoto} alt="Balaji Wanole" />
              <h3>Balaji Wanole</h3>
              <span className="card-kicker">Technical Adviser</span>
              <p>11 years of technical expertise.</p>
              <a
                className="linkedin-link"
                href="https://www.linkedin.com/in/balajiwanole/"
                target="_blank"
                rel="noreferrer"
                aria-label="View Balaji Wanole on LinkedIn"
              >
                <img src={linkedinLogo} alt="" aria-hidden="true" />
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}