export type LinkSet = {
  paperUrl?: string;
  doi?: string;
  codeUrl?: string;
  demoUrl?: string;
};

export type Publication = LinkSet & {
  title: string;
  authors?: string;
  venue: string;
  location?: string;
  date?: string;
  year: number;
  kind: "Thesis" | "Conference Paper";
  description?: string;
  citation?: string;
  tags: string[];
};

export type Project = LinkSet & {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  imageUrl?: string;
};
