import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Paladium Bedrock',
  tagline: '',
  favicon: 'img/favicon.ico',

  url: 'https://nationsglorybedrok/wiki.github.io',
  baseUrl: '/ng-be-wiki-2/',

  organizationName: 'Paladium',
  projectName: 'Paladium Bedrock',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/Dadadou972/ng-be-wiki-2/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    announcementBar: {
      id: "prerelease",
      content: 'The Wiki is currently in development, some pages may be incomplete or missing.',
      backgroundColor: "#df4b30",
      textColor: "#ffffff",
      isCloseable: true,
    },
    navbar: {
      title: 'Paladium Bedrock',
      logo: {
        alt: 'Paladium Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'wikiSidebar',
          position: 'left',
          label: 'Wiki',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
