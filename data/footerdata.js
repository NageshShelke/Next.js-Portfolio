/**
 * @typedef {Object} FooterLink
 * @property {string} text
 * @property {string} href
 */

/**
 * @typedef {Object} FooterSection
 * @property {string} title
 * @property {FooterLink[]} links
 */

/** @type {FooterSection[]} */
export const footerLinks = [
  {
    title: 'General',
    links: [
      { text: 'Home', href: '/' },
      { text: 'About', href: '/about' },
      { text: 'Projects', href: '/projects' },
      { text: 'Blog', href: '/blog' }
    ]
  },
  {
    title: 'Specifics',
    links: [
      { text: 'Guest Book', href: '/guestbook' },
      { text: 'Bucket List', href: '/bucket-list' },
      { text: 'Uses', href: '/uses' },
      { text: 'Attribution', href: '/attribution' }
    ]
  },
  {
    title: 'More',
    links: [
      { text: 'Book a call', href: '/contact' },
      { text: 'Links', href: '/links' },
      { text: 'RSS', href: '/rss' }
    ]
  }
];

export { socialLinks } from './sociallinks';
