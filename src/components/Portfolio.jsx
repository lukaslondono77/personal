import React from 'react'
import './Portfolio.css'

export default function Portfolio() {
  const projects = [
    {
      title: 'CloudIgnite',
      category: 'Founder · Cloud & DevOps',
      description: 'Consulting and solutions practice helping teams build cloud-native platforms with AWS, DevOps automation, and AI-driven tooling.',
      tech: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'AI/ML'],
      url: 'https://cloudignite.onrender.com/',
    },
    {
      title: 'G&L Interpreters',
      category: 'SaaS · Real-time platform',
      description: 'A video-based interpretation SaaS built on AWS EKS with PostgreSQL, WebRTC, and a fully automated CI/CD pipeline.',
      tech: ['AWS EKS', 'PostgreSQL', 'Flask', 'WebRTC', 'Docker'],
      url: 'https://www.gnlinterpreters.com/',
    },
    {
      title: 'Global ChatApp',
      category: 'Real-time messaging',
      description: 'A production chat platform with secure auth, encrypted messaging, and real-time updates across global users.',
      tech: ['React', 'WebSockets', 'Node.js', 'Auth', 'Encryption'],
      url: 'https://chat-app-frontend-ccy8.onrender.com/chat',
    },
    {
      title: 'Foqus Gym',
      category: 'Full-stack web app',
      description: 'Membership, scheduling, and health tracking platform with a polished UX designed for fitness operators.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'UX Design'],
      url: 'https://foqus.onrender.com/',
    },
    {
      title: 'Caribbean Reef Wayuu Bags',
      category: 'E-commerce',
      description: 'Boutique e-commerce storefront combining handcrafted product storytelling with integrated Square payments.',
      tech: ['Square', 'E-commerce', 'Web Design'],
      url: 'https://caribbean-reef-wayuu-bags.square.site/',
    },
  ]

  return (
    <section id="work" className="portfolio">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Selected Work</span>
          <h2>Projects &amp; platforms.</h2>
          <p>
            A snapshot of recent work across cloud infrastructure, SaaS platforms,
            and real-time applications.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card surface"
            >
              <div className="project-header">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-link">
                <span>Visit project</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
