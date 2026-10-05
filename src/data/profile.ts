export const profile = {
  name: "Abdullah Rahman",
  shortName: "AR",
  title: "Machine Learning Researcher & Software Engineer",
  location: "Dhaka, Bangladesh",
  email: "abdullahrn746@gmail.com",
  profiles: [
    { id: "linkedin", label: "LinkedIn", mark: "in", url: "https://linkedin.com/in/abdullahrn" },
    { id: "github", label: "GitHub", mark: "GH", url: "https://github.com/AbdullahRn" },
    // Placeholder: replace null with Abdullah's verified ResearchGate profile URL.
    { id: "researchgate", label: "ResearchGate", mark: "RG", url: null },
    // Placeholder: replace null with Abdullah's verified ORCID profile URL.
    { id: "orcid", label: "ORCID", mark: "iD", url: null },
    // Placeholder: replace null with Abdullah's verified Google Scholar profile URL.
    { id: "google-scholar", label: "Google Scholar", mark: "GS", url: null },
  ],
  introduction:
    "Computer Science and Engineering undergraduate working across machine learning research and dependable software systems, with a focus on turning rigorous ideas into useful, efficient technology.",
  about:
    "I am a CSE undergraduate at Southeast University with research experience in machine learning, artificial intelligence, and data mining. My work spans novel-class detection, scalable classification, explainable AI, knowledge distillation, and applied software engineering. I enjoy the full path from framing a research question to building and evaluating a working system.",
} as const;

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Recognition", href: "#recognition" },
  { label: "Contact", href: "#contact" },
] as const;
