import { ArrowDownRight, ArrowRight, BriefcaseBusiness, CodeXml, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "./ui/reveal";

export function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-layout">
        <Reveal className="hero-copy">
          <div className="availability"><span /> Open to research collaboration</div>
          <p className="hero-kicker">Research · Engineering · Applied AI</p>
          <h1>{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-intro">{profile.introduction}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#research">Explore research <ArrowRight size={17} /></a>
            <a className="button button-secondary" href="#projects">View projects</a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={15} /> {profile.location}</span>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><CodeXml size={18} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><BriefcaseBusiness size={18} /></a>
          </div>
        </Reveal>

        <Reveal className="hero-aside" delay={0.12}>
          <div className="hero-monogram" aria-hidden="true">
            <span>AR</span>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          </div>
          <div className="hero-note">
            <span className="note-index">01</span>
            <p>Building at the intersection of <strong>machine intelligence</strong> and <strong>reliable software.</strong></p>
            <ArrowDownRight size={21} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
