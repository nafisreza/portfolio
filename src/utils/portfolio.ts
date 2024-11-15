import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SocialSectionType,
} from '../types/sections';
import { StringKeyValueType } from '../types';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  fiverr: 'https://www.fiverr.com/nafis_reza',
  twitter: 'https://twitter.com/nafisreza_',
  github: 'https://github.com/nafisreza',
  linkedin: 'https://www.linkedin.com/in/nafisreza/',
};

export const author = {
  name: 'Nafis Reza',
  email: 'nafisrezabd@gmail.com',
};

export const seoData = {
  title: 'Nafis Reza - Frontend Engineer',
  description:
    'Nafis Reza is a frontend developer who specializes in building exceptional visual interfaces.',
  author: author.name,
  image:
    'https://gist.github.com/user-attachments/assets/9bcc604d-7298-4474-96b1-05f86938bfbd',
  url: 'https://nafisreza.com',
  keywords: [
    'Nafis',
    'Nafis Reza',
    'Nafis Reza Dider',
    'nafisreza',
    'Frontend Developer',
    'Nafis Portfolio ',
    'Nafis Reza Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    {index: '01.', name: 'about', url: '/#about' },
    {index: '02.', name: 'experience', url: '/#experience' },
    {index: '03.', name: 'projects', url: '/#projects' },
    {index: '04.', name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: "Hello there 👋 I'm",
  title: 'Nafis Reza.',
  tagline: `I architect softwares that drive business forward.`,
  description: `I'm a frontend engineer focused on building modern, accessible, human-centered products using React and Next.js.`,
  specialText: 'Previously, Frontend @Guideasy',

  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'Next.js',
      'React.js',
      'Typescript',
      'Redux',
      'Cypress/Jest',
      'TailwindCSS',
      'Shadcn',
      'Material UI',
    ],
  },
  img: '/nafis-reza.jpeg',
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "Where I've Worked",
  experiences: [
    {
      company: 'Guideasy',
      companyUrl: 'https://guideasy.com',
      role: 'Frontend Engineer',
      started: 'Jan 2024',
      upto: 'Dec 2024',
      tasks: [
        "Built the front end of Guideasy's user app using React.js and Next.js, achieving a 40% increase in page load speed, which now averages just 1.5 seconds",

        'Managed global state effectively with Redux.js and Context API, reducing data-fetching times.',

        'Integrated RESTful APIs for Visa, Holiday, & Flight, enhancing backend connectivity and enabling seamless data handling across 50K+ monthly users',

        'Implemented secure user authentication with NextAuth using HTTP POST and JWT token validation.',

        'Integrated secure payment processing with Stripe and bKash.',

        'Developed multi-language support using Next-Intl, dynamically adapting language based on users’ geolocation.',

        'Form validation with React-Hook-Form and Yup/Zod, decreasing form errors.',

        'Brought Figma designs to life with responsive, high-performance interfaces using TailwindCSS, MaterialUI, and ShadCn etc.',
      ],
    },
    {
      company: 'Fiverr',
      companyUrl: 'https://fiverr.com',
      role: 'Freelance Web Developer',
      started: 'May 2020',
      upto: 'Dec 2023',
      tasks: [
        "Partnered with 60+ clients from 17 countries, delivering web solutions that align with diverse business goals and user needs.",
        "Developed a wide range of applications using React, Next.js, Python, and WordPress, improving clients' digital presence and user engagement.",
        "Provided consulting services to new businesses, offering insights on building scalable and maintainable web systems.",
        "Managed projects from inception to deployment, ensuring timely delivery and client satisfaction.",
        "Tutored beginners in web development, guiding them on how to be a successful freelancer.",
        "5 star rating from every client I worked with."
      ],
    },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Guideasy - Travel App',
      url: 'https://www.guideasy.com/',
      repo: 'https://www.guideasy.com/',
      img: '/guideasy.png',
      description: "Guideasy is a travel app that allows users to plan and book their trips with ease. It's a one-stop-shop for all your travel needs, from finding the perfect destination to booking your accommodations and activities.",
      tags: ['React', 'Next', 'Redux', 'NextAuth', 'TailwindCSS'],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    "I'm currently looking for a remote job or any new opportunities.",
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
    {
      icon: 'tabler:brand-fiverr',
      url: socialLinks.fiverr,
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Design Inspiration @ Brittany Chiang',
  link: 'https://github.com/bchiang7',
};
