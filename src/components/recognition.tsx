import { Award, Medal, Trophy } from "lucide-react";
import { achievements } from "@/data/achievements";
import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";

export function Recognition() {
  return (
    <section className="section" id="recognition">
      <div className="container">
        <SectionHeading eyebrow="Recognition" title="Competition, research, and technical distinction." />
        <div className="achievement-grid">
          {achievements.map((item, index) => (
            <Reveal className={`achievement-card ${item.tone}`} key={`${item.event}-${item.placement}`} delay={index * 0.04}>
              <div className="achievement-icon">{index === 0 ? <Trophy size={20} /> : index === 1 ? <Medal size={20} /> : <Award size={20} />}</div>
              <div><p className="achievement-placement">{item.placement}</p><h3>{item.event}</h3><p>{item.context}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
