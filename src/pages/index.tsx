import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.homeBanner}>
        <div className={clsx(styles.homeBannerItem, styles.thumbBlock)}>
          <img className={styles.imgBanner} src="/img/phone_design.png" alt="phone" />
        </div>
        <div className={styles.homeBannerItem}>
          <div>
            <div>
              <img src="/img/full-logo.png" alt="logo" className={clsx(styles.fullLogo, styles.hideOnMobile)} />
              <p className={clsx("hero__subtitle", styles.subtitle)}>
                <b>
                  The <span className={styles.colorBlue}>Fastest</span> and{" "}
                  <span className={styles.colorBlue}>Simplest</span> way to create, design, and operate your mobile apps{" "}
                  <span className={styles.colorYellow}>without</span> coding or design skill
                </b>
              </p>
            </div>

            <div className={styles.btnBlock}>
              <a href="https://apps.apple.com/vn/app/appfast-studio/id1614592863?l=vihttps://apps.apple.com/vn/app/appfast-studio/id1614592863?l=vihttps://apps.apple.com/vn/app/appfast-studio/id1614592863?l=vi">
                <div className={styles.btnDownload}>IOS</div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=io.appfast.studio&hl=vi&gl=US">
                <div className={styles.btnDownload}>ANDROID</div>
              </a>
              <a href="https://dash.appfast.io/">
                <div className={styles.btnDownload}>DESKTOP</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The Fastest and Simplest way to build your mobile apps without coding knowledge"
    >
      <HomepageHeader />
      <main className={styles.featuresBlock}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
