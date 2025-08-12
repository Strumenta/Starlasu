import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
        link: {
            type: 'doc',
            id: 'intro',
        },
        items: [
            'pipeline'
        ]
    },

    {
      type: 'category',
      label: 'Features',
      link: {
        type: 'doc',
        id: 'features',
      },
      items: [
        {
          type: 'category',
          label: 'Interoperability',
          link: {
            type: 'doc',
            id: 'interoperability',
          },
          items: [
            'emf-interoperability',
              'lionweb-interoperability',
              'treesitter-interoperability',
              'antlr-interoperability',
              'javaparser-interoperability'
          ],
        },
          {
              type: 'category',
              label: 'Code Models',
              items: [
                  'position',
                  'origin-and-destination',
                  'common-elements',
                  'ast-representation',
              ]
          },
          {
              type: 'category',
              label: 'Parsers',
              items: [
                  'parse-tree-to-ast-mapping',
                  'documentation-generation',
                  'testing',
                  'cross-platform-parsers',
              ]
          },
          {
              type: 'category',
              label: 'Semantic Enrichment',
              link: {
                  type: 'doc',
                  id: 'semantic-enrichment',
              },
              items: [
                  'symbol-resolution',
                  'type-checking',
              ]
          },
          {
              type: 'category',
              label: 'APIs',
              items: [
                  'serialization',
                  'code-generation',
                  'dual-code-model-apis',
                  'ast-traversal-and-querying',
                  'transformation-framework',
                  'validation',
              ]
          },
        'editor-support',

      ],
    },
    {
      type: 'category',
      label: 'Methods',
      link: {
        type: 'doc',
        id: 'methods',
      },
      items: [
        'chisel-method',
      ],
    },
    {
      type: 'category',
      label: 'Use Cases',
      link: {
        type: 'doc',
        id: 'use-cases',
      },
      items: [
        'building-transpiler',
        'building-parser',
        'building-codegenerator',
      ],
    },
  ],
};

export default sidebars;
