import { Boxes, Check, Database, ShoppingBag } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { projects } from "@/data/projects";
import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";

const icons: LucideIcon[] = [ShoppingBag, Boxes, Database];

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading eyebrow="Selected projects" title="Software with intelligence built in." description="Selected systems spanning secure web platforms, predictive operations, and academic administration." />
        <div className="project-grid">
          {projects.map((project, index) => {
            const Icon = icons[index];
            return (
              <Reveal className="project-card" key={project.title} delay={index * 0.07}>
                <div className="project-top"><span className="project-number">0{index + 1}</span><Icon size={23} /></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="feature-list">
                  {project.features.slice(0, 4).map((feature) => <li key={feature}><Check size={14} /> {feature}</li>)}
                </ul>
                <div className="tech-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
