import { ArrowUpRight, FileText } from "lucide-react";
import { publications } from "@/data/publications";
import type { Publication } from "@/data/types";
import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";

function PublicationLinks({ publication }: { publication: Publication }) {
  const href = publication.paperUrl ?? publication.doi ?? publication.codeUrl;
  if (!href) return <span className="link-pending">Links forthcoming</span>;
  return <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">View publication <ArrowUpRight size={15} /></a>;
}

export function Research() {
  const thesis = publications.find((publication) => publication.kind === "Thesis");
  const papers = publications.filter((publication) => publication.kind === "Conference Paper");
  return (
    <section className="section section-tinted" id="research">
      <div className="container">
        <SectionHeading eyebrow="Research & publications" title="Work shaped by useful questions." description="Research in scalable classification, explainable AI, efficient computer vision, and machine learning for real-world decision support." />
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
        {thesis ? (
          <Reveal className="thesis-card thesis-after-papers">
            <div className="publication-mark"><FileText size={22} /></div>
            <div className="publication-main">
              <div className="publication-meta"><span>{thesis.kind}</span><span>{thesis.year}</span></div>
              <h3>{thesis.title}</h3>
              <p className="publication-description">{thesis.description}</p>
              <div className="tag-row">{thesis.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
