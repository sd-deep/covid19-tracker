import React from "react";
import * as Icon from "react-feather";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>Stay Home. Stay Safe.</p>
        <div className={styles.githubButtonContainer}>
          <a
            href="https://github.com/sd-deep/covid19-tracker"
            className={styles.githubButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon.GitHub />
            <span>Open Sourced on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
