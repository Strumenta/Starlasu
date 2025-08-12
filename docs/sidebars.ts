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
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Features',
      link: {
        type: 'doc',
        id: 'features',
      },
      items: [
        'serialization',
        'position',
        'origin-and-destination',
        'parse-tree-to-ast-mapping',
        'naming',
        'cross-platform-parsers',
        'common-elements',
        'transformation-framework',
        'code-generation',
        'dual-code-model-apis',
        'documentation-generation',
        'testing',
        'ast-traversal-and-querying',
        {
          type: 'category',
          label: 'Interoperability',
          link: {
            type: 'doc',
            id: 'interoperability',
          },
          items: [
            'emf-interoperability',
          ],
        },
        'semantic-enrichment',
        'editor-support',
        'ast-representation',
        'validation',
        'symbol-resolution',
        'type-checking',
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
