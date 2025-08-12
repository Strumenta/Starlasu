import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Flexible Framework',
        icon: '🔧',
        description: (
            <>
                Build parsers, transpilers, code analyzers, interpreters, code generators, and domain-specific languages with a systematic approach.
            </>
        ),
    },
    {
        title: 'Cross-Platform',
        icon: '🌐',
        description: (
            <>
                Use Starlasu on JVM (Kolasu), Node.js (Tylasu), Python (Pylasu), and .NET (Sharplasu) with consistent APIs.
            </>
        ),
    },
    {
        title: 'Openness',
        icon: '🔓',
        description: (
            <>
                Built on LionWeb standards for interoperability, with all base libraries open-source for transparency and community contributions.
            </>
        ),
    },
    {
        title: 'Proven Methods',
        icon: '📚',
        description: (
            <>
                Leverage the Chisel Method and other proven approaches developed from hundreds of language engineering projects.
            </>
        ),
    },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
      <div className={clsx('feature')}>
          <div className="text--center">
              <div className={styles.featureIcon}>
                  <span style={{ fontSize: '3rem' }}>{icon}</span>
              </div>
          </div>
          <div className="text--center padding-horiz--md content">
              <h3>{title}</h3>
              <p>{description}</p>
          </div>
      </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
              <div className="featureHolder">
            <Feature key={idx} {...props} />
              </div>
          ))}
        </div>
      </div>
    </section>
  );
} 