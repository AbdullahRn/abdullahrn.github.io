import { skillGroups } from "@/data/skills";
import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";

export function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container skills-layout">
        <SectionHeading eyebrow="Technical toolkit" title="Tools selected for the problem." description="A practical foundation for research prototypes, production-oriented applications, and data-intensive systems." />
        <div className="skill-groups">
          {skillGroups.map((group, index) => (
            <Reveal className="skill-group" key={group.title} delay={index * 0.05}>
              <p>{group.title}</p>
              <div>{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
