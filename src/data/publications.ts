import type { Publication } from "./types";

export const publications: Publication[] = [
  {
    title: "Novel Class Classification using Random Forest and kNN",
    venue: "Undergraduate Thesis · Southeast University",
    year: 2026,
    kind: "Thesis",
    description:
      "Developed a machine-learning framework for detecting unseen classes using model uncertainty, distance-based methods, and outlier detection.",
    tags: ["Novel-class detection", "Random Forest", "kNN", "Outlier detection"],
  },
  {
    title: "Multi-Expert EfficientNet Forests with Lightweight Knowledge Distillation for Resource-Efficient Vehicle Classification",
    authors: "M. M. Hasan, A. Rahman, U. M. Jannat, K. Alam, T. Ahmed, M. H. Bhuiyan",
    venue: "2026 IEEE Region 10 Symposium (TENSYMP)",
    location: "Penang, Malaysia",
    date: "June 2026",
    year: 2026,
    kind: "Conference Paper",
    tags: ["Computer Vision", "Knowledge Distillation", "EfficientNet"],
  },
  {
    title: "Scalable K-Nearest Neighbors Classification for Mining Big Data",
    authors: "A. Rahman, S. R. Liza, A. K. M. Masum, D. M. Farid",
    venue: "28th International Conference on Computer and Information Technology (ICCIT)",
    year: 2025,
    kind: "Conference Paper",
    tags: ["Big Data", "kNN", "Classification"],
  },
  {
    title: "A Binary Insomnia Disease Classification Approach with Feature Optimization and Explainable AI Insights",
    authors: "A. Rahman, Md. S. Babu, M. Hasan, S. Mahmud",
    venue: "28th International Conference on Computer and Information Technology (ICCIT)",
    year: 2025,
    kind: "Conference Paper",
    tags: ["Explainable AI", "Feature Optimization", "Healthcare ML"],
  },
  {
    title: "Random Forest with Z-score in Supervised Machine Learning",
    authors: "A. Rahman, S. Rahman, H.-H. Nguyen, M. M. Hassan, A. K. M. Masum, D. Farid",
    venue: "International Conference on Intelligent Systems and Data Science (ISDS)",
    year: 2025,
    kind: "Conference Paper",
    tags: ["Random Forest", "Supervised Learning", "Data Science"],
  },
  {
    title: "Early Detection of Anemia Using Ensemble Machine Learning Algorithms with Data Balancing",
    authors: "S. R. Liza, A. Rahman, N. Uddin, M. Nur-A-Alam, K. M. M. Uddin",
    venue: "IEEE International Conference on Quantum Photonics",
    year: 2025,
    kind: "Conference Paper",
    tags: ["Ensemble Learning", "Data Balancing", "Healthcare ML"],
  },
];
