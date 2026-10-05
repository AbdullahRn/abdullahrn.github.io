import { ArrowUpRight, FileText } from "lucide-react";
import { publications } from "@/data/publications";
import type { Publication } from "@/data/types";
import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";

function PublicationLinks({ publication }: { publication: Publication }) {
  const href = publication.paperUrl ?? publication.doi ?? publication.codeUrl;
  if (!href) return <span className="link-pending">Links forthcoming</span>;
  return <a className="text-link" href={href} target="_blank" rel="noreferrer">View work <ArrowUpRight size={15} /></a>;
}

export function Research() {
  const [thesis, ...papers] = publications;
  return (
    <section className="section section-tinted" id="research">
      <div className="container">
        <SectionHeading eyebrow="Research & publications" title="Work shaped by useful questions." description="Research in scalable classification, explainable AI, efficient computer vision, and machine learning for real-world decision support." />
        <Reveal className="thesis-card">
          <div className="publication-mark"><FileText size={22} /></div>
          <div className="publication-main">
            <div className="publication-meta"><span>{thesis.kind}</span><span>{thesis.year}</span></div>
            <h3>{thesis.title}</h3>
            <p className="publication-description">{thesis.description}</p>
            <div className="tag-row">{thesis.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
          <PublicationLinks publication={thesis} />
        </Reveal>
        <div className="publication-list">
          {papers.map((paper, index) => (
            <Reveal className="publication-row" key={paper.title} delay={Math.min(index * 0.04, 0.16)}>
              <div className="publication-year">{paper.year}</div>
              <div className="publication-content">
                <div className="publication-meta"><span>{paper.kind}</span><span>{paper.venue}</span></div>
                <h3>{paper.title}</h3>
                <p className="authors">{paper.authors}</p>
                {(paper.location || paper.date) ? <p className="publication-place">{[paper.location, paper.date].filter(Boolean).join(" · ")}</p> : null}
                <div className="tag-row compact">{paper.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <PublicationLinks publication={paper} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
