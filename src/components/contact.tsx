import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "./ui/reveal";

export function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <Reveal className="contact-card">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2>Interested in research, ideas, or building something useful?</h2>
            <p>I welcome thoughtful conversations about research collaboration, graduate opportunities, and software or AI work.</p>
          </div>
          <div className="contact-actions">
            <a className="button button-light" href={`mailto:${profile.email}`}><Mail size={17} /> Email me</a>
            <div className="contact-links" aria-label="Professional and research profiles">
              {profile.profiles.map((item) => item.url ? (
                <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${profile.name} on ${item.label}`}>
                  <span className="profile-mark" aria-hidden="true">{item.mark}</span>
                  <span>{item.label}</span>
                  <ArrowUpRight size={14} />
                </a>
              ) : null)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
