export default function PageHeader({ kicker, title, lead }) {
  return (
    <div className="section-head">
      {kicker && <span className="section-kicker">{kicker}</span>}
      <h1>{title}</h1>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}
