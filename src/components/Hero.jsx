import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content fade-in-up">
          <div className="hero-tag">
            <span className="hero-dot"></span>
            Available for select engagements
          </div>

          <h1>
            Building resilient cloud platforms
            <br />
            for <span className="accent-text">ambitious teams</span>.
          </h1>

          <p className="hero-description">
            I'm Lukas Londono — a Cloud &amp; DevOps engineer and founder of CloudIgnite.
            I help companies ship faster with scalable AWS infrastructure, automated
            pipelines, and production-grade SaaS platforms.
          </p>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Start a conversation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#work" className="btn btn-secondary">
              View work
            </a>
          </div>

          <div className="hero-meta">
            <span>Based in the US</span>
            <span className="dot-sep"></span>
            <span>AWS · Kubernetes · Python · Node</span>
          </div>
        </div>
      </div>
    </section>
  )
}
