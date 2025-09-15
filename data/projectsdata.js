/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} href
 * @property {string} imageSrc
 * @property {string} iconSrc
 */

/**
 * @typedef {Object} ProjectTechnology
 * @property {string} id
 * @property {string} name
 * @property {string} iconSrc
 */

/** @type {Project[]} */
export const projects = [
  // {
  //   id: 'next-venture',
  //   title: 'Next Ventures',
  //   description: 'A space for entrepreneurs to pitch ideas, explore others, and gain exposure with clean design.',
  //   href: '/projects/next-venture',
  //   imageSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/18.avif",
  //   iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/icon-16.svg"
  // },
  // {
  //   id: 'zenith-minds',
  //   title: 'Zenith Minds',
  //   description: 'A platform connecting students and instructors for enhanced learning experiences.',
  //   href: '/projects/zenith-minds',
  //   imageSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/19.avif",
  //   iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/icon-17.svg"
  // },
  // {
  //   id: 'snippix',
  //   title: 'Snippix',
  //   description: 'A platform for creating and sharing code snippets with a clean and intuitive design.',
  //   href: '/projects/snippix',
  //   imageSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/20.avif",
  //   iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/icon-18.svg"
  // },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: 'Design Unleashed: A Captivating Portfolio Showcasing Innovative Web Development and UI/UX',
    href: '/projects/portfolio',
    imageSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/21.avif",
    iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/icon-19.svg"
  },
  // {
  //   id: 'star-forge',
  //   title: 'StarForge',
  //   description: 'A sleek AI SaaS landing page with a user-friendly design that enhances engagement.',
  //   href: '/projects/star-forge',
  //   imageSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/31.avif",
  //   iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/icon-16.svg"
  // }
];

/** @type {ProjectTechnology[]} */
export const projectTechnologies = [
  { id: 'nextjs', name: 'Next.js', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/white.svg" },
  { id: 'react', name: 'React', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/react.svg" },
  { id: 'tailwind', name: 'Tailwind CSS', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/tailwindcss.svg" },

  { id: 'motion', name: 'Motion.dev', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/framer.svg" },
  { id: 'zustand', name: 'Zustand', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/redux.svg" },  
  { id: 'nodejs', name: 'NodeJS', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/nodedotjs.svg" },

];
