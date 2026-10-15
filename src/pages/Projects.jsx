import PageHeader from "../components/PageHeader.jsx";
import { projects } from "../data/portfolio.js";

export default function Projects() {
  return (
    <div className="wrap">
      <PageHeader
        kicker="Featured Projects"
        title="Analytics Case Studies"
        lead="Each project includes the business objective, dataset context, analysis method, findings, and recommendations."
      />

      <div className="project-list">
        {projects.map((p) => (
          <article className="project-card" key={p.title}>
            <div className="project-body">
              <h2>{p.title}</h2>
              <p>{p.summary}</p>
              <div className="project-tags" aria-label={p.title + " tools"}>
                {p.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>

              <div className="project-detail-grid">
                <dl className="detail">
                  <dt>Business problem</dt>
                  <dd>{p.businessProblem}</dd>
                </dl>
                <dl className="detail">
                  <dt>Dataset source</dt>
                  <dd>{p.dataset}</dd>
                </dl>
                <dl className="detail">
                  <dt>Cleaning and preprocessing</dt>
                  <dd>{p.cleaning}</dd>
                </dl>
                <dl className="detail">
                  <dt>Methodology and tools</dt>
                  <dd>{p.methodology}</dd>
                </dl>
                <dl className="detail">
                  <dt>Key findings</dt>
                  <dd>{p.findings}</dd>
                </dl>
                <dl className="detail">
                  <dt>Recommendations and limitations</dt>
                  <dd>{p.recommendations} {p.limitations}</dd>
                </dl>
              </div>

              {p.github && (
                <div className="btn-row">
                  <a className="btn secondary" href={p.github} target="_blank" rel="noreferrer">{p.githubLabel || "GitHub Repository"}</a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <section className="section-space card">
        <h3>Project Detail Page Checklist</h3>
        <div className="mini-tags" aria-label="Case study checklist">
          <span>Business problem and objective</span>
          <span>Dataset source and dictionary</span>
          <span>Preprocessing workflow</span>
          <span>Analysis methodology</span>
          <span>Charts and key findings</span>
          <span>Recommendations and limitations</span>
          <span>Project links and references</span>
        </div>
      </section>
    </div>
  );
}
