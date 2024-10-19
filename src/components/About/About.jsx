import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience in developing fast and optimized back-end
                systems and APIs using technologies such as Java, Spring Boot,
                and SQL. My focus has been on ensuring scalability, efficiency,
                and smooth communication between services.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I have worked extensively on the frontend, building responsive
                and dynamic user interfaces using React, HTML, CSS, and
                JavaScript, ensuring a seamless user experience across various
                devices. My work with React has focused on creating efficient
                and interactive single-page applications (SPAs) that enhance
                user engagement.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                I have worked on full-stack applications and created
                design systems as well.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
