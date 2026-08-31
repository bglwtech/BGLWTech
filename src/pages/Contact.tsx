import { useState, type FormEvent } from 'react'

export default function Contact() {
  const [showThankYou, setShowThankYou] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmitting) return

    const form = e.currentTarget
    const data = new FormData(form)

    setIsSubmitting(true)

    const firstName = data.get('firstName') as string
    const lastName = data.get('lastName') as string
    const companyName = data.get('companyName') as string
    const jobTitle = data.get('jobTitle') as string
    const email = data.get('email') as string
    const industry = data.get('industry') as string
    const message = data.get('message') as string

    try {
      await fetch('https://formsubmit.co/ajax/namaste@bglwtech.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'First Name': firstName,
          'Last Name': lastName,
          'Company Name': companyName,
          'Job Title': jobTitle,
          Email: email,
          Industry: industry,
          Message: message,
          _subject: `New Enquiry from ${firstName} ${lastName}`,
        })
      })

      setShowThankYou(true)
      form.reset()
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-shell">
        <div className="contact-intro">
          <div className="eyebrow">Let's build what's next</div>
          <h2>Your next platform, automation layer, or transformation initiative starts here.</h2>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid two-col">
            <label>
              <span>First Name <span className="required-star">*</span></span>
              <input type="text" name="firstName" placeholder="First name" required />
            </label>

            <label>
              <span>Last Name <span className="required-star">*</span></span>
              <input type="text" name="lastName" placeholder="Last name" required />
            </label>
          </div>

          <div className="form-grid two-col">
            <label>
              <span>Company Name</span>
              <input type="text" name="companyName" placeholder="Company name" />
            </label>

            <label>
              <span>Job Title</span>
              <input type="text" name="jobTitle" placeholder="Job title" />
            </label>
          </div>

          <div className="form-grid two-col">
            <label>
              <span>Company Email <span className="required-star">*</span></span>
              <input type="email" name="email" placeholder="name@company.com" required />
            </label>

            <label>
              <span>Industry</span>
              <input type="text" name="industry" placeholder="Industry" />
            </label>
          </div>

          <label>
            <span>Tell us more</span>
            <textarea name="message" rows={6} placeholder="Tell us about your project, goals, or requirements." />
          </label>

          <label className="checkbox-row">
            <input type="checkbox" name="consent" />
            <span>
              I consent to receive marketing communications from BGLW Technologies.
            </span>
          </label>

          <label className="checkbox-row privacy-row">
            <input type="checkbox" name="privacy" />
            <span>
              I have read and understood the <a href="#" target="_blank" rel="noreferrer">privacy policy</a>.
            </span>
          </label>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="submit-loading">
                  <span className="spinner" />
                  Sending...
                </span>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
      </div>

      {/* ── Thank-you modal ── */}
      {showThankYou && (
        <div className="thankyou-overlay" onClick={() => setShowThankYou(false)}>
          <div className="thankyou-modal" onClick={(e) => e.stopPropagation()}>
            <div className="thankyou-icon">
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
                <circle cx="27" cy="27" r="27" fill="url(#grad)" />
                <path d="M16 27.5l7 7 15-15" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="54" y2="54">
                    <stop stopColor="#0e7ca6" />
                    <stop offset="1" stopColor="#1aa8d9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3>Thank You!</h3>
            <p>Your message has been sent successfully. We'll get back to you shortly.</p>
            <button 
              className="btn btn-primary thankyou-close-btn"
              onClick={() => setShowThankYou(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
