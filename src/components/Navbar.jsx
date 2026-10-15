import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { profile } from "../data/portfolio.js";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-icon" aria-hidden="true">{profile.initials}</span>
          <span className="brand-text">{profile.name}</span>
        </Link>
        <nav className={"nav-links" + (open ? " open" : "")} aria-label="Main">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <button
          className={"menu-btn" + (open ? " open" : "")}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="menu-bar" aria-hidden="true"></span>
          <span className="menu-bar" aria-hidden="true"></span>
          <span className="menu-bar" aria-hidden="true"></span>
        </button>
      </div>
    </header>
  );
}
