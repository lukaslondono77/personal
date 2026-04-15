import React from 'react'
import './Contact.css'

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57v-2c-3.34.72-4.04-1.6-4.04-1.6-.55-1.38-1.34-1.75-1.34-1.75-1.08-.75.09-.73.09-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.3.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.81 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .31.22.69.83.57A12 12 0 0 0 12 .3"/>
  </svg>
)

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <polyline points="3 7 12 13 21 7" />
  </svg>
)

export default function Contact() {
  const links = [
    {
      name: 'LinkedIn',
      handle: 'in/lukas-londono',
      url: 'https://www.linkedin.com/in/lukas-londono-688829110/',
      icon: <LinkedInIcon />,
    },
    {
      name: 'GitHub',
      handle: '@lukaslondono77',
      url: 'https://github.com/lukaslondono77',
      icon: <GitHubIcon />,
    },
    {
      name: 'Email',
      handle: 'lukaslondono77@gmail.com',
      url: 'mailto:lukaslondono77@gmail.com',
      icon: <MailIcon />,
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Contact</span>
          <h2>Let's build something solid.</h2>
          <p>
            Open to consulting engagements, technical partnerships, and projects where
            infrastructure and product engineering need to move together.
          </p>
        </div>

        <div className="contact-links">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target={link.url.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="contact-link surface"
            >
              <span className="contact-icon">{link.icon}</span>
              <span className="contact-text">
                <span className="contact-name">{link.name}</span>
                <span className="contact-handle">{link.handle}</span>
              </span>
              <svg className="contact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          ))}
        </div>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Lukas Londono · CloudIgnite</p>
          <p className="footer-built">Designed &amp; built from scratch.</p>
        </footer>
      </div>
    </section>
  )
}
