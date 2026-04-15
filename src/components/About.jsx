import React from 'react'
import './About.css'

export default function About() {
  const stats = [
    { number: '15+', label: 'Platforms shipped' },
    { number: '5+', label: 'Years in cloud' },
    { number: 'AWS', label: 'Certified architect' },
    { number: '100%', label: 'Remote & async' },
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">About</span>
          <h2>Engineer. Founder. Partner.</h2>
          <p>
            I bridge modern cloud infrastructure with pragmatic product engineering —
            helping teams move from idea to production without compromising on
            reliability, security, or speed.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Through my company <strong>CloudIgnite</strong>, I partner with founders
              and engineering teams to design resilient systems on AWS, automate the
              delivery pipeline, and ship production-ready SaaS products. My focus is
              infrastructure that scales, code that stays maintainable, and workflows
              that keep teams shipping.
            </p>
            <p>
              I work end-to-end: architecting Kubernetes workloads and CI/CD pipelines,
              building full-stack features in Python and JavaScript, and integrating
              real-time and AI-driven capabilities where they create real leverage.
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card surface">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
