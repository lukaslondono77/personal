import React from 'react'
import './Services.css'

const iconProps = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const Icons = {
  cloud: (
    <svg {...iconProps}><path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.78A6 6 0 0 0 4.5 13a4 4 0 0 0 .5 6h12.5z" /></svg>
  ),
  pipeline: (
    <svg {...iconProps}><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>
  ),
  container: (
    <svg {...iconProps}><rect x="3" y="4" width="18" height="16" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="9" y1="4" x2="9" y2="20" /></svg>
  ),
  ai: (
    <svg {...iconProps}><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 9h6v6H9z" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" /></svg>
  ),
  shield: (
    <svg {...iconProps}><path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" /><path d="M9 12l2 2 4-4" /></svg>
  ),
  gauge: (
    <svg {...iconProps}><path d="M21 12a9 9 0 1 0-18 0" /><path d="M12 12l4-3" /><circle cx="12" cy="12" r="1.2" /></svg>
  ),
}

export default function Services() {
  const services = [
    {
      icon: Icons.cloud,
      title: 'Cloud Architecture',
      description: 'Design and deploy AWS infrastructure — EKS, RDS, S3, and serverless — built for scale, cost-efficiency, and reliability.',
    },
    {
      icon: Icons.pipeline,
      title: 'DevOps & CI/CD',
      description: 'Automated build, test, and deployment pipelines using GitHub Actions and AWS-native tooling so teams ship with confidence.',
    },
    {
      icon: Icons.container,
      title: 'Containers & Kubernetes',
      description: 'Production-ready container platforms with Docker and Kubernetes, configured for high availability and zero-downtime deploys.',
    },
    {
      icon: Icons.ai,
      title: 'AI Integration',
      description: 'Practical AI and ML features embedded into real products — from retrieval and automation to intelligent analytics.',
    },
    {
      icon: Icons.shield,
      title: 'Security & Compliance',
      description: 'IAM, encryption, and observability baked into the platform from day one, with CloudTrail and CloudWatch monitoring.',
    },
    {
      icon: Icons.gauge,
      title: 'Performance & Cost',
      description: 'Measure, profile, and optimize cloud workloads to reduce spend and improve response times without sacrificing reliability.',
    },
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Services</span>
          <h2>How I help teams ship.</h2>
          <p>
            End-to-end support for cloud platforms and SaaS products — from
            architecture and infrastructure through delivery and ongoing optimization.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card surface">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
