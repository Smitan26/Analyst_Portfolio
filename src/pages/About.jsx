import PageHeader from "../components/PageHeader.jsx";
import { about } from "../data/portfolio.js";

export default function About() {
  return (
    <div className="wrap">
      <PageHeader
        kicker="About"
        title="Profile Overview"
        lead="Professional summary, approach, and career direction."
      />

      <section className="card section-space">
        <h2>Professional Summary</h2>
        <p>{about.professionalSummary}</p>
      </section>

      <section className="section-space card-grid cols-2">
        <article className="card">
          <h3>Career Objective</h3>
          <p>{about.careerObjective}</p>
        </article>
        <article className="card">
          <h3>Career Goals</h3>
          <p>{about.careerGoals}</p>
        </article>
      </section>

      <section className="section-space card">
        <h3>Analytical Approach</h3>
        <ul className="approach-list">
          {about.analyticalApproach.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
