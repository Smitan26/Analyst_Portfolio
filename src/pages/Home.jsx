import { Link } from "react-router-dom";
import { profile, quickHighlights, skillGroups } from "../data/portfolio.js";

export default function Home() {
  const expertise = skillGroups.slice(0, 4).map((group) => group.category);

  return (
    <div className="wrap">
      <section className="hero">
        <div className="hero-panel">
          <div className="hero-split">
            <p className="hero-kicker hero-kicker-mobile">Executive Data Analyst Portfolio</p>
            <div className="hero-main">
              <p className="hero-kicker hero-kicker-desktop">Executive Data Analyst Portfolio</p>
              <h1 className="hero-title">{profile.headline}</h1>
              <p className="hero-copy">{profile.intro}</p>
              <div className="btn-row">
                <Link className="btn primary" to="/projects">
                  <span className="btn-label-desktop">View My Projects</span>
                  <span className="btn-label-mobile">Projects</span>
                </Link>
                <Link className="btn secondary" to="/contact">
                  <span className="btn-label-desktop">Get in Touch</span>
                  <span className="btn-label-mobile">Contact</span>
                </Link>
                <a className="btn secondary" href={profile.resume} target="_blank" rel="noreferrer">
                  <span className="btn-label-desktop">View Resume</span>
                  <span className="btn-label-mobile">Resume</span>
                </a>
              </div>

              <div className="stats-grid" aria-label="Quick highlights">
                {quickHighlights.map((item) => (
                  <article className="stat-card" key={item.label}>
                    <span className="stat-value">{item.value}</span>
                    <span className="stat-label">{item.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <aside className="profile-card" aria-label="Profile summary card">
              <div className="hero-visual" aria-label="Profile image card">
                <img className="profile-image" src="/smita.png" alt={profile.name + " profile photo"} loading="lazy" />
              </div>
              <div className="profile-meta" aria-label="Profile details">
                <h3>{profile.name}</h3>
                <p>{profile.role}</p>
                <p>{profile.location}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="section-head">
          <span className="section-kicker">Core Expertise</span>
          <h2>Where I Create Business Value</h2>
          <p className="lead">Focused capabilities I use to deliver trustworthy analysis and decision-ready outputs.</p>
        </div>

        <div className="card-grid cols-2">
          {expertise.map((item) => (
            <article className="card" key={item}>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
