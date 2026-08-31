import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Careers() {
  const [skillFilter, setSkillFilter] = useState('')
  const [designationFilter, setDesignationFilter] = useState('')
  const [locationFilter, setLocationFilter] = useState('')
  const [experienceFilter, setExperienceFilter] = useState('')

  const [appliedFilters, setAppliedFilters] = useState({
    skill: '',
    designation: '',
    location: '',
    experience: ''
  })

  const openings = [
    { 
      id: 1, 
      title: 'Embedded Software Engineer', 
      postingDate: '18-08-2026', 
      location: 'Remote', 
      experience: '3-5 Years',
      description: 'We are looking for an experienced Embedded Software Engineer to design, develop, and test low-level software for complex hardware systems. You will work extensively with C/C++, RTOS, and microcontrollers. A strong understanding of hardware interfaces and debugging tools is essential.',
      skills: ['C/C++', 'RTOS', 'Microcontrollers', 'Device Drivers', 'Hardware Debugging', 'Embedded']
    },
    { 
      id: 2, 
      title: 'Automotive Software Engineer', 
      postingDate: '12-08-2026', 
      location: 'Pune', 
      experience: '4-6 Years',
      description: 'Join our automotive team to develop AUTOSAR compliant software for Electronic Control Units (ECU). You will be responsible for BSW configuration, application layer integration, and ensuring functional safety (ISO 26262) compliance throughout the software lifecycle.',
      skills: ['AUTOSAR', 'CAN/LIN', 'C/C++', 'ISO 26262', 'CANoe', 'Automotive']
    },
    { 
      id: 3, 
      title: 'Technical HR Executive', 
      postingDate: '31-08-2026', 
      location: 'Pune', 
      experience: 'Fresher / 1-3 Years',
      description: 'We are hiring a dynamic HR to drive our recruitment and talent acquisition strategies. You will be responsible for sourcing top engineering talent, running employee engagement programs, and handling HR operations. Educational requirement: MBA, B.Tech, or M.Tech.',
      skills: ['Talent Acquisition', 'MBA', 'B.Tech', 'M.Tech', 'Technical Recruiting', 'Employee Engagement']
    },
  ]

  const handleSearch = () => {
    setAppliedFilters({
      skill: skillFilter,
      designation: designationFilter,
      location: locationFilter,
      experience: experienceFilter
    })
  }

  const filteredOpenings = openings.filter(job => {
    let match = true
    if (appliedFilters.skill) {
      match = match && (job.skills.some(s => s.toLowerCase().includes(appliedFilters.skill.toLowerCase())) || job.title.toLowerCase().includes(appliedFilters.skill.toLowerCase()))
    }
    if (appliedFilters.designation) {
      match = match && job.title.toLowerCase().includes(appliedFilters.designation.toLowerCase())
    }
    if (appliedFilters.location) {
      match = match && job.location.toLowerCase() === appliedFilters.location.toLowerCase()
    }
    if (appliedFilters.experience) {
      // Loose match for experience ranges
      match = match && job.experience.toLowerCase().includes(appliedFilters.experience.toLowerCase())
    }
    return match
  })

  const values = [
    {
      icon: 'lock',
      title: 'Openness',
      description:
        'Onward Tech believes in transparency in all areas and free, unrestricted access to knowledge and information. We incorporate and promote positive collaboration, cooperative management and decision-making with an emphasis on learning.',
    },
    {
      icon: 'diamond',
      title: 'Hunger For Excellence',
      description:
        'Emerging user behavior, interactions and expectations around technology are forcing constant and more frequent innovation and adaptation. We act on the principle “There is no best, only better.”',
    },
    {
      icon: 'person',
      title: 'Customer First',
      description:
        'Our stakeholders expect more than just vendors, they are looking for reliable, strategic partners. In everything we do, the only question we look to answer is “How will this add value.”',
    },
    {
      icon: 'link',
      title: 'Responsive',
      description:
        'Everyone and everything is connected. We must respond swiftly and with purpose to the changes around us.',
    },
    {
      icon: 'shield',
      title: 'Integrity',
      description:
        'What we do, what we say, what we see do. There is no compromise when it comes to doing the right thing.',
    },
  ]

  return (
    <section id="careers" className="careers-page section">
      <div className="careers-banner">
        <div className="container careers-banner-inner">
          <div className="careers-hero-copy">
            <div className="eyebrow">Careers</div>
            <h1>Why Choose BGLW Technologies?</h1>
            <div className="careers-divider" />
          </div>

          <div className="careers-hero-grid">
            <div className="careers-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="Traveler at the airport"
              />
            </div>

            <div className="careers-story">
              <h2>Global Career Paths</h2>
              <p>
                At BGLW Technologies, your career isn&apos;t just a job, it&apos;s a global journey.
                As a strategic technology partner for Global 2000 clients and a rapidly expanding
                footprint across the USA and Europe, a career with BGLW Technologies is your
                passport to enriching experiences and connections that span continents.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container current-openings-shell">
        <h2 className="current-openings-title">Current Openings</h2>
        <div className="current-openings-divider" />

        <p className="current-openings-intro">
          At BGLW Tech we have an ambitious plan to grow our business across North America and
          are planning to hire highly skilled and technically competent candidates for our current
          and upcoming projects in the US. Please send your resumes to{' '}
          <a href="mailto:namaste@Bglwtech.Com">namaste@Bglwtech.Com</a> with the role you are applying for mentioned in the subject line.
        </p>

        <p className="current-openings-note">
          <strong>Note:</strong> Successful candidates will be eligible for the necessary VISA sponsorship(s) by BGLW Tech. Post completion of VISA formalities, eligible candidates will be required to go through a corporate training program before they are assigned to any of our projects.
        </p>

        <form className="openings-filter-form" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
          <div className="filter-field">
            <label htmlFor="skills">Skills</label>
            <select id="skills" value={skillFilter} onChange={(e) => setSkillFilter(e.target.value)}>
              <option value="">All</option>
              <option value="Embedded">Embedded</option>
              <option value="Automotive">Automotive</option>
              <option value="Cloud">Cloud</option>
              <option value="Talent">Talent Acquisition</option>
            </select>
          </div>

          <div className="filter-field">
            <label htmlFor="designation">Designation</label>
            <select id="designation" value={designationFilter} onChange={(e) => setDesignationFilter(e.target.value)}>
              <option value="">All</option>
              <option value="Engineer">Engineer</option>
              <option value="Senior Engineer">Senior Engineer</option>
              <option value="Architect">Architect</option>
              <option value="Executive">Executive</option>
            </select>
          </div>

          <div className="filter-field">
            <label htmlFor="location">Location</label>
            <select id="location" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
              <option value="">All</option>
              <option value="Remote">Remote</option>
              <option value="Pune">Pune</option>
              <option value="USA">USA</option>
            </select>
          </div>

          <div className="filter-field">
            <label htmlFor="experience">Exp (In years)</label>
            <select id="experience" value={experienceFilter} onChange={(e) => setExperienceFilter(e.target.value)}>
              <option value="">All</option>
              <option value="1-3">1-3 Years</option>
              <option value="3-5">3-5 Years</option>
              <option value="4-6">4-6 Years</option>
              <option value="5+">5+ Years</option>
              <option value="Fresher">Fresher</option>
            </select>
          </div>
        </form>

        <button type="button" className="search-button" onClick={handleSearch}>SEARCH</button>

        <div className="job-table">
          <div className="job-table-head">
            <span>Sr. No.</span>
            <span>Job Title</span>
            <span>Posting Date</span>
            <span>Location</span>
            <span>Experience</span>
            <span>Action</span>
          </div>

          {filteredOpenings.length > 0 ? (
            filteredOpenings.map((job) => (
              <div key={job.id} className="job-table-row">
                <span>{job.id}</span>
                <span>{job.title}</span>
                <span>{job.postingDate}</span>
                <span>{job.location}</span>
                <span>{job.experience}</span>
                <span>
                  <Link 
                    to="/apply" 
                    state={{ job }}
                    className="btn btn-outline"
                    style={{ padding: '6px 14px', fontSize: '0.9rem', display: 'inline-block' }}
                  >
                    Apply Now
                  </Link>
                </span>
              </div>
            ))
          ) : (
            <div style={{ padding: '32px', textAlign: 'center', gridColumn: '1 / -1', color: '#647b91' }}>
              No openings found matching your criteria.
            </div>
          )}
        </div>
      </div>

      <div className="container values-shell">
        <h2 className="values-title">Our Values</h2>
        <div className="values-divider" />

        <div className="values-grid">
          {values.map((value) => (
            <article key={value.title} className="value-card">
              <div className="value-icon value-icon--lock" aria-hidden="true">
                {value.icon === 'lock' && '🔒'}
                {value.icon === 'diamond' && '💎'}
                {value.icon === 'person' && '👤'}
                {value.icon === 'link' && '🔗'}
                {value.icon === 'shield' && '🛡️'}
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
