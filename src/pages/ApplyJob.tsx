import { useState, type FormEvent, useEffect } from 'react'
import { useLocation, Navigate, Link } from 'react-router-dom'

type Job = {
  id: number
  title: string
  postingDate: string
  location: string
  experience: string
  description: string
  skills: string[]
}

export default function ApplyJob() {
  const location = useLocation()
  const job = location.state?.job as Job | undefined

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // If someone navigates here directly without a job, redirect back to careers
  if (!job) {
    return <Navigate to="/careers" replace />
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmitting) return

    const form = e.currentTarget
    const data = new FormData(form)

    data.append('_subject', `New Job Application: ${job.title}`)
    data.append('Job Title', job.title)

    setIsSubmitting(true)

    try {
      await fetch('https://formsubmit.co/ajax/namaste@bglwtech.com', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        },
      })

      setShowThankYou(true)
      form.reset()
    } catch {
      alert('Something went wrong submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="apply-page section" style={{ paddingTop: '120px', minHeight: '100vh', background: '#f8fbff' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <Link to="/careers" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px', color: '#1aa8d9', fontWeight: '500', textDecoration: 'none' }}>
          <span>&larr;</span> Back to Careers
        </Link>
        
        <div style={{ background: '#fff', padding: '40px', borderRadius: '16px', boxShadow: '0 24px 60px rgba(0,0,0,0.06)' }}>
          
          <div style={{ borderBottom: '1px solid #e1ecf4', paddingBottom: '24px', marginBottom: '32px' }}>
            <h1 style={{ color: '#0b1a28', fontSize: '2rem', marginBottom: '12px' }}>
              <span className="gradient-text">{job.title}</span>
            </h1>
            <div style={{ display: 'flex', gap: '16px', color: '#647b91', fontSize: '0.95rem' }}>
              <span>📍 {job.location}</span>
              <span>💼 {job.experience}</span>
              <span>📅 {job.postingDate}</span>
            </div>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ color: '#0b1a28', marginBottom: '12px' }}>Job Description</h3>
            <p style={{ color: '#4a5c6d', lineHeight: '1.7' }}>{job.description}</p>
            
            <h3 style={{ color: '#0b1a28', marginBottom: '12px', marginTop: '24px' }}>Required Skills</h3>
            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: 0, listStyle: 'none' }}>
              {job.skills?.map((skill, index) => (
                <li key={index} style={{ padding: '6px 12px', background: 'rgba(26, 168, 217, 0.1)', color: '#1aa8d9', borderRadius: '4px', fontSize: '0.9rem', fontWeight: '500' }}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <h3 style={{ color: '#0b1a28', marginBottom: '24px', borderTop: '1px solid #e1ecf4', paddingTop: '32px' }}>Submit Your Application</h3>
          
          <form className="apply-form" onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1d2d39' }}>
                Full Name <span className="required-star" style={{ color: '#e53e3e' }}>*</span>
              </label>
              <input type="text" name="Full Name" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #c2d4e3' }} />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1d2d39' }}>
                Phone Number <span className="required-star" style={{ color: '#e53e3e' }}>*</span>
              </label>
              <input type="tel" name="Phone Number" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #c2d4e3' }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1d2d39' }}>
                Email Address <span className="required-star" style={{ color: '#e53e3e' }}>*</span>
              </label>
              <input type="email" name="Email" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #c2d4e3' }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1d2d39' }}>
                Total Experience <span className="required-star" style={{ color: '#e53e3e' }}>*</span>
              </label>
              <select name="Total Experience" required defaultValue="" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #c2d4e3', background: '#fff' }}>
                <option value="" disabled>Select experience level...</option>
                <option value="Fresher">Fresher (0 Years)</option>
                <option value="1-3 Years">1 - 3 Years</option>
                <option value="3-5 Years">3 - 5 Years</option>
                <option value="5-8 Years">5 - 8 Years</option>
                <option value="8+ Years">8+ Years</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#1d2d39' }}>
                Attach Resume <span className="required-star" style={{ color: '#e53e3e' }}>*</span>
              </label>
              <input type="file" name="attachment" accept=".pdf,.doc,.docx" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px dashed #c2d4e3', background: '#f8fbff' }} />
            </div>

            <div style={{ marginTop: '16px' }}>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ width: '100%' }}>
                {isSubmitting ? (
                  <span className="submit-loading" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <span className="spinner" /> Sending...
                  </span>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ── Thank You Modal ── */}
      {showThankYou && (
        <div className="thankyou-overlay" onClick={() => setShowThankYou(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(10,20,30,0.6)', backdropFilter: 'blur(8px)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div className="thankyou-modal" onClick={(e) => e.stopPropagation()} style={{ background: '#fff', padding: '40px', borderRadius: '16px', maxWidth: '420px', textAlign: 'center', boxShadow: '0 24px 60px rgba(0,0,0,0.2)' }}>
            <div className="thankyou-icon" style={{ marginBottom: '20px' }}>
              <svg width="64" height="64" viewBox="0 0 54 54" fill="none">
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
            <h3 style={{ margin: '0 0 16px', color: '#0b1a28', fontSize: '1.5rem' }}>Application Received!</h3>
            <p style={{ margin: '0 0 24px', color: '#4a5c6d', lineHeight: '1.6' }}>Thank you for applying to BGLW Technologies. We have received your resume and will reach out to you shortly if your profile matches our requirements!</p>
            <button 
              className="btn btn-primary"
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
