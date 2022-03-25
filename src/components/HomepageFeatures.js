import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    Svg: '/img/phone1.svg',
    description: (
      <>
        Edit your design by tap, hold, drag & drop building blocks called Widget
      </>
    ),
  },
  {
    Svg: '/img/phone2.svg',
    description: (
      <>
        Tap on widget then color and layout options will appear to edit by your style
      </>
    ),
  },
  {
    Svg:'/img/phone3.svg',
    description: (
      <>
        Add more functionality to your project by adding more Plug-ins
      </>
    ),
  },
  {
    Svg: '/img/phone4.svg',
    description: (
      <>
        Automatically add interactions & database configuration without any code
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className={styles.box}>
        <div className="text--center">
          <img src={Svg} alt="" />
        </div>
        <div className="text--center">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
