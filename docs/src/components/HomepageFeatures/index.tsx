import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Comprehensive',
    Svg: require('@site/static/img/Star.svg').default,
    description: (
      <>
        Build parsers, transpilers, code analyzers, interpreters, code generators, and domain-specific languages with a systematic approach.
      </>
    ),
  },
  {
    title: 'Cross-Platform',
    Svg: require('@site/static/img/Star.svg').default,
    description: (
      <>
        Use Starlasu on JVM (Kolasu), Node.js (Tylasu), the browser (Tylasu), Python (Pylasu), and .NET (Sharplasu) with consistent APIs.
      </>
    ),
  },
  {
    title: 'Proven Methods',
    Svg: require('@site/static/img/Star.svg').default,
    description: (
      <>
        Leverage the Chisel Method and other proven approaches developed from over a decade of experience working on
          language engineering projects with clients from all over the world.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
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
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
} 