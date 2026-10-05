import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div><strong>{profile.name}</strong><p>Machine learning research & software engineering.</p></div>
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href="#top" aria-label="Back to top">Back to top <ArrowUp size={15} /></a>
      </div>
    </footer>
  );
}
