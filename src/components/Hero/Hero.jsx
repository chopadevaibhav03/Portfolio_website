import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,<br/> I'm Vaibhav</h1>
        <p className={styles.description}>
          Enthusiastic Software Developer skilled in object-oriented programming
          and full-stack development, eager to contribute to innovative projects
          and deliver enhanced user experiences.
        </p>
        <a
          href="mailto:chopadevaibhav03@gmail.com"
          className={styles.contactBtn}
        >
          {" "}
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/vaibhav.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
