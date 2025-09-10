/**
 * @typedef {Object} Tool
 * @property {string} name
 * @property {string} iconSrc
 */

/**
 * @typedef {Object} SiteFeature
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} href
 * @property {Tool[]} [tools]  // optional
 */

/** @type {SiteFeature[]} */
export const siteFeatures = [
  {
    id: 'uses',
    title: 'Uses',
    description: 'Check out my favorite tools and spots around the web.',
    href: '/uses',
    tools: [
      { name: 'Raycast', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/raycast_logo.png" },
      { name: 'Arc', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/arc_logo.png" },
      { name: 'VSCode', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/vscode_logo.png" },
      { name: 'Obsidian', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/obsidian_logo.png" },
      { name: 'Notion', iconSrc: "https://c.animaapp.com/mfbwn9s8eMdF5x/assets/notion_logo.png" }
    ]
  },
  {
    id: 'guestbook',
    title: 'Guestbook',
    description: 'Let me know you were here',
    href: '/guestbook'
  },
  {
    id: 'music',
    title: 'Recent Favorite',
    description: 'Currently listening to music',
    href: '/music'
  }
];
