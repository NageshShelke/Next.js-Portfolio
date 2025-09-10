/**
 * @typedef {Object} TechSkill
 * @property {string} id
 * @property {string} name
 * @property {string} iconSrc
 */

/** @type {TechSkill[]} */
export const frontendSkills = [
    { id: 'react', name: 'ReactJS', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/react.svg" },
    { id: 'nextjs', name: 'NextJS', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/white.svg" },
    { id: 'typescript', name: 'TypeScript', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/typescript.svg" },
    { id: 'tailwind', name: 'Tailwind CSS', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/tailwindcss.svg" },
    { id: 'motion', name: 'Motion', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/framer.svg" },
    { id: 'sanity', name: 'Sanity', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/sanity.svg" },
    { id: 'contentful', name: 'Contentful', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/contentful.svg" }
];

/** @type {TechSkill[]} */
export const backendSkills = [
    { id: 'nodejs', name: 'NodeJS', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/darkgreen.svg" },
    { id: 'express', name: 'ExpressJS', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/white-1.svg" },
    { id: 'postgresql', name: 'PostgreSQL', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/sky.svg" },
    { id: 'mongodb', name: 'MongoDB', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/darkgreen-1.svg" },
    { id: 'prisma', name: 'Prisma', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/blue.svg" },
    { id: 'zustand', name: 'Zustand', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/pink.svg" },
    { id: 'zod', name: 'Zod', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/zod.svg" }
];

/** @type {TechSkill[]} */
export const toolsSkills = [
    { id: 'pnpm', name: 'pnpm', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/pnpm.svg" },
    { id: 'bun', name: 'Bun', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/white-2.svg" },
    { id: 'git', name: 'Git', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/git.svg" },
    { id: 'github', name: 'GitHub', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/white-3.svg" },
    { id: 'vercel', name: 'Vercel', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/white-4.svg" },
    { id: 'aws', name: 'AWS', iconSrc: "https://cdn.simpleicons.org/amazonwebservices/gray" },
    { id: 'docker', name: 'Docker', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/docker.svg" },
    { id: 'expo', name: 'Expo', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/gray.svg" },
    { id: 'clerk', name: 'Clerk', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/clerk.svg" },
    { id: 'linux', name: 'Linux', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/linux.svg" }
];

/** @type {TechSkill[]} */
export const allSkills = [
    ...frontendSkills,
    ...backendSkills,
    ...toolsSkills
];
