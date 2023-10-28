import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "College Graduation",
    location: "Valsad, Guj",
    description:
      "I completed my graduation in Bachelor of Engineering in the field of Mechanical Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Systems Engineer",
    location: "Jaipur, Raj",
    description:
      "I am now working as Systems Engineer in Infosys Limited.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Note Manager",
    description:
      "CRUD operations to be performed on individual notes and user also get authenticated and authorised using JWT technologies",
    tags: ["React", "Java", "Spring boot", "Tailwind", "Mysql"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Blog Application",
    description:
      "User can read or react on individual blogs but blogs can only be created by Admin",
    tags: ["React", "TypeScript", "Java", "Spring boot", "Mysql", "Spring Security"],
    imageUrl: rmtdevImg,
  },
  
] 

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Java",
  "Spring Boot",
  "Spring Security",
  "MySql",
  "Tailwind",
  "Redux",
  "Git",
  "GitHub",
  "Postman",
  "Framer Motion",
] as const;