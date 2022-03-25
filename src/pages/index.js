import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.homeBanner}>
        <div className={styles.homeBannerItem}>
          <div>
            <div>
              <img src='/img/full-logo.svg' alt='logo' className={styles.fullLogo} />
              <p className="hero__subtitle">The Fastest and Simplest way to create, design, and operate your mobile apps without coding or design skill</p>
            </div>

            <div className={styles.btnBlock}>
              <a href='#ios'>
                <div className={styles.btnDownload}>IOS</div>
              </a>
              <a href='#ios'>
                <div className={styles.btnDownload}>ANDROID</div>
              </a>
              <a href='#ios'>
                <div className={styles.btnDownload}>DESKTOP</div>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.homeBannerItem}>
          <img className={styles.imgBanner} src='/img/phone_design.png' alt='phone' />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The Fastest and Simplest way to build your mobile apps without coding knowledge">
      <HomepageHeader />
      <main className={styles.featuresBlock}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
