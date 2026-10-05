import { BookOpen, GraduationCap, MapPinned } from "lucide-react";
import { education } from "@/data/experience";
import { profile } from "@/data/profile";
import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading eyebrow="About" title="Research-minded. Engineering-grounded." />
        <div className="about-grid">
          <Reveal><p className="about-statement">{profile.about}</p></Reveal>
          <Reveal className="education-card" delay={0.08}>
            <div className="card-icon"><GraduationCap size={21} /></div>
            <div>
              <p className="card-label">Education</p>
              <h3>{education.degree}</h3>
              <p>{education.institution}</p>
              <div className="education-details">
                <span><MapPinned size={14} /> {education.location}</span>
                <span><BookOpen size={14} /> {education.graduation}</span>
              </div>
            </div>
            <div className="cgpa"><span>CGPA</span><strong>{education.cgpa}</strong></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
