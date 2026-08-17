/**
 * ALL SITE CONTENT LIVES HERE — edit these objects to update the site.
 * To swap an asset: upload it, then point the matching entry at the new import.
 */
import cvAsset from "@/assets/Julius_Boamah_CV.pdf.asset.json";
import alxAsset from "@/assets/alx.jpeg.asset.json";
import celebrityAsset from "@/assets/celebrity2.png.asset.json";
import bankAsset from "@/assets/bank.png.asset.json";
import bank3Asset from "@/assets/bank3.png.asset.json";
import foodAsset from "@/assets/food1.png.asset.json";
import arikobAsset from "@/assets/d10.png.asset.json";
import beautyAsset from "@/assets/d11.png.asset.json";
import konama4Asset from "@/assets/konama4.png.asset.json";
import konama7Asset from "@/assets/konama7.png.asset.json";

export const profile = {
  name: "Julius Boamah",
  headline: "Building Digital Experiences Where Code Meets Creativity.",
  status: "SOFTWARE DEVELOPER • DESIGNER • BUILDER",
  location: "Accra, Ghana",
  email: "jboamah211006@gmail.com",
  phone: "+233 50 461 6160",
  github: "https://github.com/codegamer211006-lang",
  githubUser: "codegamer211006-lang",
  linkedin: "", // add your LinkedIn URL here
  intro:
    "I work across software development, AI, UI/UX design and digital products — turning ideas into things people can actually use. Curious by default, hands-on by habit.",
};

export const cv = {
  url: cvAsset.url,
  fileName: "Julius_Boamah_CV.pdf",
  fileType: "PDF",
  fileSize: `${Math.round(cvAsset.size / 1024)} KB`,
  description:
    "A full overview of my education, work experience, projects, skills and leadership roles.",
};

export const certification = {
  provider: "ALX",
  program: "AI Career Essentials",
  title: "AI-Augmented Professional Development Skills in the Digital Age",
  date: "28th August 2024",
  focus: ["AI-augmented workflows", "Critical thinking", "Collaboration", "Problem solving"],
  image: alxAsset.url,
  verifyUrl: "https://intranet.alxswe.com/certificates/GNmxez9hXS",
  note: "8-week programme • Certificate of Achievement",
};

export type Project = {
  name: string;
  description: string;
  category: string;
  url: string;
  image?: string;
  designUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Hearts Ink Bookshop",
    description: "An online bookshop experience built for browsing and discovering titles.",
    category: "E-commerce • Web",
    url: "https://Hearts-ink-bookshop.vercel.app",
  },
  {
    name: "BarteyDecor",
    description: "A decor brand website presenting products and services to customers online.",
    category: "Business Website",
    url: "https://barteydecor.com",
  },
  {
    name: "The Locher",
    description: "A digital product interface built as a focused, modern web experience.",
    category: "Web App",
    url: "https://the-locher.vercel.app",
  },
  {
    name: "Shopall GH",
    description: "A Ghanaian online shopping platform connecting buyers with products.",
    category: "E-commerce",
    url: "https://Shopallgh.com",
  },
  {
    name: "Ghana Deal Find",
    description: "A deal discovery platform helping people find offers across Ghana.",
    category: "Product • Web",
    url: "https://ghana-deal-find.lovable.app/",
  },
];

export type DesignItem = {
  title: string;
  category: string;
  description: string;
  tools: string;
  image: string;
  span?: "tall" | "wide";
};

export const designs: DesignItem[] = [
  {
    title: "Konama's Mango Juice",
    category: "Brand & Packaging",
    description: "Promotional artwork for Konama Drinks, built around bold type and product focus.",
    tools: "Photoshop, Canva",
    image: konama7Asset.url,
    span: "tall",
  },
  {
    title: "Banking App Concept",
    category: "UI / UX Concept",
    description:
      "Interface concept for a multi-account banking app, focused on clarity and usability.",
    tools: "Figma",
    image: bankAsset.url,
    span: "wide",
  },
  {
    title: "Arikob Farms Campaign",
    category: "Social Media Design",
    description: "Product launch flyer for a farm-to-table poultry campaign.",
    tools: "Photoshop, Canva",
    image: arikobAsset.url,
    span: "tall",
  },
  {
    title: "Konama's Watermelon Label",
    category: "Label Design",
    description: "Product label design with ingredient layout and brand marks.",
    tools: "Photoshop",
    image: konama4Asset.url,
  },
  {
    title: "Banking App — Home Screen",
    category: "UI / UX Concept",
    description: "Dashboard screen exploring balance, services and transaction hierarchy.",
    tools: "Figma",
    image: bank3Asset.url,
    span: "tall",
  },
  {
    title: "Organic Shops",
    category: "Mobile App Design",
    description: "Food and grocery delivery app concept with auth, browse and category flows.",
    tools: "Figma",
    image: foodAsset.url,
    span: "wide",
  },
  {
    title: "Beauty Editorial Poster",
    category: "Creative Experiment",
    description: "Editorial poster experimenting with distortion and monochrome contrast.",
    tools: "Photoshop",
    image: beautyAsset.url,
  },
];

export type FigmaProject = {
  title: string;
  summary: string;
  role: string;
  focus: string;
  challenge: string;
  approach: string;
  prototypeUrl: string;
  image: string;
};

export const figmaProjects: FigmaProject[] = [
  {
    title: "The Celebrity Chefs — Ordering Experience",
    summary:
      "A mobile ordering interface for a traditional buffet restaurant in Accra, covering the menu, cart and pickup/delivery flow.",
    role: "UI/UX Design & Prototyping",
    focus: "Mobile ordering, menu hierarchy, conversion",
    challenge:
      "Present a large food menu on a small screen while keeping pricing, imagery and the add-to-cart action instantly readable.",
    approach:
      "A single-column card menu with photography-led items, a persistent cart indicator, and a high-contrast brand palette for clear calls to action.",
    prototypeUrl:
      "https://www.figma.com/proto/quXwzYqbKmkoyRQy1xxISx/celebrity-chief?node-id=29-57&t=BrAtYAm1ExCg4Azy-1&starting-point-node-id=4%3A2",
    image: celebrityAsset.url,
  },
];

export type CaseStudy = {
  business: string;
  category: string;
  challenge: string;
  solution: string;
  result: string;
  url?: string;
  image?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    business: "Konama Drinks",
    category: "Beverage Brand • Design",
    challenge: "A young juice brand needed visual identity material for retail and social.",
    solution: "Product labels and promotional artwork with a consistent brand system.",
    result: "Shelf-ready packaging and campaign assets.",
    image: konama4Asset.url,
  },
  {
    business: "Arikob Farms",
    category: "Agriculture • Digital Marketing",
    challenge: "Reach new customers for locally raised poultry.",
    solution: "Social media management plus campaign design across platforms.",
    result: "A consistent, recognisable presence for the farm online.",
    image: arikobAsset.url,
  },
  {
    business: "The Celebrity Chefs",
    category: "Restaurant • Product Design",
    challenge: "Take a buffet restaurant's pickup and delivery orders online.",
    solution: "A mobile ordering interface designed and prototyped in Figma.",
    result: "An interactive prototype ready for development.",
    image: celebrityAsset.url,
  },
  {
    business: "Shopall GH",
    category: "E-commerce • Web",
    challenge: "Give shoppers a single place to browse products online.",
    solution: "A live e-commerce web experience.",
    result: "A running storefront on the web.",
    url: "https://Shopallgh.com",
  },
  {
    business: "BarteyDecor",
    category: "Decor • Business Website",
    challenge: "Move a decor business from offline word-of-mouth to a web presence.",
    solution: "A brand website presenting products and services.",
    result: "A live site customers can be pointed to.",
    url: "https://barteydecor.com",
  },
];

export const journey = [
  {
    phase: "LEARN",
    title: "Starting with curiosity",
    body: "A science background turned into late nights with HTML, CSS and JavaScript — reading docs, breaking things, and rebuilding them until they made sense.",
    tags: ["HTML/CSS", "JavaScript", "Git"],
  },
  {
    phase: "BUILD",
    title: "From tutorials to real interfaces",
    body: "Moved into React and modern tooling, and started designing the things I was building instead of only coding them.",
    tags: ["React", "Vite", "Figma", "TypeScript"],
  },
  {
    phase: "EXPERIMENT",
    title: "AI, data and mobile",
    body: "Explored machine learning with Python, recommendation systems and yield-prediction models, plus mobile interfaces with Flutter and React Native.",
    tags: ["Python", "TensorFlow", "Flutter", "LLM tooling"],
  },
  {
    phase: "SHIP",
    title: "Putting products in front of people",
    body: "Built and deployed websites for real businesses using Supabase, Firebase and modern deployment platforms — live URLs, real users, real feedback.",
    tags: ["Supabase", "Firebase", "Vercel"],
  },
  {
    phase: "ITERATE",
    title: "Learning in public, continuously",
    body: "Every project feeds the next one. I keep refining how I design, build and ship — and keep exploring what emerging tools make possible.",
    tags: ["APIs", "Next.js", "Product thinking"],
  },
];

export const stack = [
  "React",
  "Next.js",
  "Vite",
  "TypeScript",
  "JavaScript",
  "Flutter",
  "Dart",
  "Python",
  "Supabase",
  "Firebase",
  "Prisma",
  "TensorFlow",
  "PyTorch",
  "Hugging Face",
  "OpenAI APIs",
  "Scikit-learn",
  "GitHub",
  "Vercel",
  "Figma",
  "Photoshop",
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Development", href: "#development" },
  { label: "Projects", href: "#projects" },
  { label: "Design", href: "#design" },
  { label: "Figma", href: "#figma" },
  { label: "Certification", href: "#certification" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
];
