import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'The Starlasu Framework',
  tagline: 'An opionated framework for building advanced Language Engineering systems',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://starlasu.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'strumenta', // Usually your GitHub org/user name.
  projectName: 'starlasu', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          editUrl:
            'https://github.com/strumenta/starlasu/tree/main/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/strumenta/starlasu/tree/main/docs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Starlasu',
      logo: {
        alt: 'Starlasu Logo',
        src: 'img/starlasu-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/strumenta/starlasu',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: '/docs/intro',
            },
            {
              label: 'Features',
              to: '/docs/features',
            },
            {
              label: 'Methods',
              to: '/docs/methods',
            },
            {
              label: 'Use Cases',
              to: '/docs/use-cases',
            },
          ],
        },
          {
              title: 'Libraries',
              items: [
                  {
                      label: 'Kolasu',
                      href: 'https://github.com/Strumenta/kolasu',
                  },
                  {
                      label: 'Tylasu',
                      href: 'https://github.com/Strumenta/tylasu',
                  },
                  {
                      label: 'Pylasu',
                      href: 'https://github.com/Strumenta/pylasu',
                  },
                  {
                      label: 'Sharplasu',
                      href: 'https://github.com/Strumenta/sharplasu',
                  },
              ],
          },
        {
          title: 'Community',
          items: [
            {
              label: 'LionWeb',
              href: 'https://lionweb.io',
            },
            {
              label: 'Strumenta',
              href: 'https://strumenta.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Strumenta. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
