export const personalInfo = {
  name: "Abdelkhalek Belwefi",
  title: "Développeur Full-Stack",
  location: "Menzel Temime, Nabeul",
  phone: "29794213",
  email: "abdoublw5@gmail.com",
  github: "https://github.com/Abdelkhalek-Belwefi",
  linkedin: "https://www.linkedin.com/in/abdelkhalek-belwefi",
  bio: "Diplômé en Informatique, spécialité Multimédia et Développement Web, je recherche une opportunité en développement web. Compétent en développement front-end/back-end, conception d’applications web et bases de données."
};

export const skills = [
  { category: "Programmation", level: 80, items: ["Java", "PHP", "JavaScript", "Python", "C", "C++"] },
  { category: "Frameworks & bibliothèques", level: 75, items: ["React.js", "Angular", "Laravel", "Symfony", "Spring Boot"] },
  { category: "Bases de données", level: 75, items: ["MySQL", "MariaDB", "PostgreSQL", "Oracle"] },
  { category: "Tests & outils", level: 70, items: ["JUnit 5", "Selenium", "Postman", "XAMPP"] },
  { category: "Modélisation & conception UML", level: 75, items: ["StarUML", "Draw.io", "Visual Paradigm"] },
  { category: "Intégration ERP", level: 65, items: ["Microsoft Dynamics 365 Business Central"] }
];

export const experience = [
  {
    period: "02/2026 – 06/2026",
    type: "Internship",
    company: "L-mobile – Nabeul",
    role: "Stage Développeur d'applications web",
    tasks: [
      "Projet : Migration vers le Web du produit Unified Warehouse (UWH)",
      "Migration d’une application desktop vers une application web",
      "Développement front-end/back-end et intégration avec l’ERP Microsoft Dynamics 365 Business Central"
    ],
  },
  {
    period: "01/2025 – 02/2025",
    type: "Internship",
    company: "ProvestaSoft Kélibia",
    role: "Stage Développeur d'applications web",
    tasks: [
      "Application web de gestion et d'organisation des tâches pour différents rôles (ouvriers, employés et livreurs)",
      "Développement full-stack avec React.js (frontend), Laravel (backend) et MySQL (base de données), sous Laragon",
      "Ajout, modification et suppression de tâches, gestion des espaces utilisateurs et sécurisation de la connexion/inscription"
    ],
  },
  {
    period: "01/2024 – 02/2024",
    type: "Internship",
    company: "TUNISIE TELECOM",
    role: "Stage en Télécommunications",
    tasks: [
      "Découverte des réseaux GSM et 4G, observation du fonctionnement des systèmes de communication mobile et immersion dans un environnement professionnel"
    ],
  }
];

export const education = [
  {
    period: "Depuis 2026",
    type: "University",
    school: "ITBS — Nabeul, Tunisie",
    degree: "Cycle ingénieur en Informatique",
  },
  {
    period: "2023 – 06/2026",
    type: "University",
    school: "Institut supérieur d'études technologiques de Nabeul",
    degree: "Licence en Informatique — Multimédia et Développement Web",
  },
  {
    period: "06/2023",
    type: "High School",
    school: "Lycée 7 Avril 1997",
    degree: "Baccalauréat en Informatique",
  }
];

export const aiData = [
  {
    icon: "🎮",
    title: "3D & Moteur de jeu",
    desc: "Unreal Engine 5, Blender",
    level: 60
  },
  {
    icon: "🎨",
    title: "Design graphique",
    desc: "Photoshop, Illustrator",
    level: 65
  },
  {
    icon: "📐",
    title: "UI / UX",
    desc: "Figma",
    level: 70
  }
];

export const projects = [
  {
    title: "Gestion des tâches",
    desc: "Application web de gestion de tâches multi-rôles (ouvriers, employés, livreurs) pour ProvestaSoft.",
    tech: ["React.js", "Laravel", "MySQL"]
  },
  {
    title: "Migration Web UWH",
    desc: "Migration du produit Unified Warehouse vers le web, intégré à Dynamics 365 Business Central (L-mobile).",
    tech: ["Web", "Business Central", "Full-Stack"]
  },
  {
    title: "Portfolio Personnel",
    desc: "Ce CV en ligne, développé avec React & Tailwind.",
    tech: ["React", "Vite", "Tailwind"]
  }
];
