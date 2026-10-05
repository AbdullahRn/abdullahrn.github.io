import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "AI-Enabled E-commerce Platform",
    description:
      "A full-stack commerce platform that brings secure transactions and AI-assisted product discovery into one coherent shopping experience.",
    technologies: ["Java 21", "Spring Boot", "Spring Security", "Thymeleaf", "MySQL", "JPA"],
    features: ["Secure authentication", "Product management", "Intelligent search", "PC recommendations", "Cart and checkout", "Order processing"],
  },
  {
    title: "Intelligent Inventory System",
    description:
      "An inventory and sales system connecting operational dashboards with machine-learning-based demand forecasting and restocking guidance.",
    technologies: ["Spring Boot", "MongoDB", "Thymeleaf", "FastAPI", "Random Forest"],
    features: ["Role-based dashboards", "Demand forecasting", "Restocking recommendations", "Inventory management", "Sales management"],
  },
  {
    title: "Student Management System",
    description:
      "A desktop administration system designed around the academic workflows of students, faculty, and institutional staff.",
    technologies: ["JavaFX", "FXML", "JDBC", "MySQL"],
    features: ["Role-based administration", "Course assignment", "Marks and grades", "Payments and waivers", "Academic records"],
  },
];
