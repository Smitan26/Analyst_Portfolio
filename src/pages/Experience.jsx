import PageHeader from "../components/PageHeader.jsx";
import { experience, education, certifications, achievements, academicProjects } from "../data/portfolio.js";

export default function Experience() {
  return (
    <div className="wrap">
      <PageHeader
        kicker="Experience and Education"
        title="Professional Readiness"
        lead="Internships, academic project exposure, certifications, and verifiable achievements relevant to analytics roles."
      />

      <section className="card section-space">
        <h2>Internships and Experience</h2>
        <ol className="timeline">
          {experience.map((e) => (
            <li key={e.role + e.organization}>
              <h3>{e.role}, {e.organization}</h3>
              <p className="meta">{e.period}</p>
              <p className="meta">{e.type}</p>
              <ul className="bullet-list">
                {e.outcomes.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {e.certificate && (
                <a className="btn secondary cert-btn" href={e.certificate} target="_blank" rel="noreferrer">View Internship Certificate</a>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="section-space card-grid cols-2">
        <article className="card">
          <h2>Academic Projects</h2>
          <ul className="bullet-list">
            {academicProjects.map((project) => (
              <li key={project}>{project}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h2>Achievements</h2>
          <ul className="bullet-list">
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-space card">
        <h2>Education</h2>
        <ol className="timeline">
          {education.map((e) => (
            <li key={e.degree}>
              <h3>{e.degree}</h3>
              <p>{e.institution}</p>
              <p className="meta">{e.period} | Graduation year: {e.graduationYear} | {e.score}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-space card">
        <h2>Certifications</h2>
        <ul className="cert-list">
          {certifications.map((c) => (
            <li key={c.title}>
              <div>
                <strong>{c.title}</strong>
                <span className="meta">{c.issuer}</span>
              </div>
              <a className="btn secondary cert-btn" href={c.link} target="_blank" rel="noreferrer">View Certificate</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
