const services = [
  {
    number: '01',
    title: 'Industrial & Embedded Systems Engineering',
    description: 'Embedded software development, firmware engineering, RTOS, Board Support Packages, microcontrollers, and HIL test automation for automotive, aerospace, rail, defense, and industrial automation.',
  },
  {
    number: '02',
    title: 'Functional Safety & Embedded Security',
    description: 'Functional safety auditing and compliance under ISO 26262, DO-178C, EN 50128, IEC 61508, plus embedded cybersecurity — HSM, secure boot, OTA frameworks, and ISO/SAE 21434.',
  },
  {
    number: '03',
    title: 'Digital Transformation & Custom Software',
    description: 'Custom software engineering, web & mobile development, cloud-native architectures, microservices, SaaS, API development, UI/UX design, and CI/CD pipeline delivery.',
  },
  {
    number: '04',
    title: 'Testing & Quality Assurance',
    description: 'Software verification & validation, automated test bench creation, functional, performance, regression, and security testing across embedded and enterprise systems.',
  },
  {
    number: '05',
    title: 'Cybersecurity, SOC & Compliance',
    description: 'SOC setup and monitoring, threat hunting, VAPT, digital forensics, incident response, and GRC consulting across ISO 27001, GDPR, and global security frameworks.',
  },
  {
    number: '06',
    title: 'Artificial Intelligence & Data Engineering',
    description: 'AI/ML models, Edge AI, computer vision, predictive maintenance, digital twins, and big data management for mobility, smart infrastructure, and enterprise clients.',
  },
  {
    number: '07',
    title: 'IT Infrastructure & Managed Services',
    description: 'IT consulting, system integration, DevOps/DevSecOps engineering, cloud migration, network security management, and IT managed services for public and private sectors.',
  },
  {
    number: '08',
    title: 'Engineering Outsourcing, BPO & Staffing',
    description: 'ER&D outsourcing, technical staffing, ITES, technology project management, and business process support through onshore, nearshore, and offshore delivery models.',
  },
  {
    number: '09',
    title: 'Skill Development, Training & Academics',
    description: 'Technology training centers, certification bootcamps, workshops, faculty development programs, industrial internships, competency certificates, and academic MoU partnerships.',
  },
  {
    number: '10',
    title: 'Hardware Supply & Technology Integration',
    description: 'Import, export, sale, lease, and integration of embedded development kits, evaluation boards, cybersecurity appliances, server infrastructure, and networking equipment.',
  },
  {
    number: '11',
    title: 'Intellectual Property & R&D',
    description: 'Technology research, product innovation, patent filing, trademark registration, and commercialization of proprietary software and hardware products and platforms.',
  },
  {
    number: '12',
    title: 'Strategic Alliances & Ancillary Operations',
    description: 'Joint ventures, strategic partnerships, and any other lawful business incidental or ancillary to the core technology and engineering objectives of the firm.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">Capabilities</div>
          <h2>Technology capability built for real-world complexity.</h2>
        </div>

        <div className="card-grid four-up">
          {services.map((s) => (
            <article className="feature-card" key={s.title}>
              <div className="icon-wrap"><span>{s.number}</span></div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
