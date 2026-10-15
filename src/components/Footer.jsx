import { profile } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <span>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
