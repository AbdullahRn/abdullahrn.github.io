import { ArrowUpRight, BriefcaseBusiness, CodeXml, Mail } from "lucide-react";
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
            <div className="contact-links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness size={17} /> LinkedIn <ArrowUpRight size={14} /></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><CodeXml size={17} /> GitHub <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
