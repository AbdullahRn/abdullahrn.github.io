import Image from "next/image";
import { ArrowDownRight, ArrowRight, FileText, MapPin } from "lucide-react";
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
            <a className="button button-secondary" href="/abdullah-rahman-cv.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open Abdullah Rahman's CV as a PDF in a new tab"><FileText size={16} /> View CV</a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={15} /> {profile.location}</span>
            <div className="hero-profile-links" aria-label="Professional profiles">
              {profile.profiles.map((item) => item.url ? (
                <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${profile.name} on ${item.label}`}>
                  <span aria-hidden="true">{item.mark}</span>{item.label}
                </a>
              ) : null)}
            </div>
          </div>
        </Reveal>

        <Reveal className="hero-aside" delay={0.12}>
          <div className="hero-monogram">
            <Image className="hero-portrait" src="/abdullah-rahman.jpg" alt="Portrait of Abdullah Rahman" width={560} height={570} priority sizes="(max-width: 720px) 0px, (max-width: 980px) 230px, 310px" />
            <div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" />
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
