import { BriefcaseBusiness, Users } from "lucide-react";
import { experience, leadership } from "@/data/experience";
import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";

export function Journey() {
  return (
    <section className="section section-tinted" id="experience">
      <div className="container">
        <SectionHeading eyebrow="Experience & leadership" title="Research contribution, community responsibility." />
        <div className="journey-grid">
          <Reveal className="timeline-panel">
            <div className="panel-heading"><BriefcaseBusiness size={19} /><span>Research experience</span></div>
            {experience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <div className="timeline-dot" />
                <p className="timeline-period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="timeline-org">{item.organization}</p>
                <p className="timeline-summary">{item.summary}</p>
              </article>
            ))}
          </Reveal>
          <Reveal className="leadership-panel" delay={0.08}>
            <div className="panel-heading"><Users size={19} /><span>Leadership & community</span></div>
            <div className="leadership-list">
              {leadership.map((item, index) => (
                <article key={item.role}>
                  <span>0{index + 1}</span>
                  <div><h3>{item.role}</h3><p>{item.organization}</p></div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
