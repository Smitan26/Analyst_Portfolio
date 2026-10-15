import PageHeader from "../components/PageHeader.jsx";
import { skillGroups } from "../data/portfolio.js";

export default function Skills() {
  return (
    <div className="wrap">
      <PageHeader
        kicker="Skills"
        title="Analytics Toolkit"
        lead="Technical and professional capabilities used across projects and internships."
      />

      <section className="section-space card-grid cols-2">
        {skillGroups.map((group) => (
          <article className="card skill-card" key={group.category}>
            <span className="skill-icon" aria-hidden="true">{group.icon}</span>
            <div>
              <h3>{group.category}</h3>
              <p className="meta">{group.notes}</p>
              <div className="skill-tags" aria-label={group.category + " skills"}>
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
