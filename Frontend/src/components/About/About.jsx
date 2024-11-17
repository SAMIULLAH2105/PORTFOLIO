import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutimage2.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Hello, I'm Samiullah, a MERN Stack Developer</h3>
              <br />
              <p>
                From building full-stack applications to optimizing seamless
                user experiences, I thrive on turning ideas into fully
                functional websites. With a passion for both frontend and
                backend development, I focus on creating dynamic, responsive,
                and efficient web applications.
              </p>
              <br />
              <p>
                Technology is ever-evolving, and I’m always looking for ways to
                innovate and contribute to meaningful projects. Inclusion and
                accessibility are key pillars in my development process,
                ensuring that every user experience is enjoyable and
                user-centric.
              </p>
              <br />
              <p>
                I'm eager to continue learning and refining my skills with the
                right opportunities. Drop me a line or reach out for potential
                collaborations!
              </p>
            </div>
          </li>

          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I'm passionate about crafting seamless user experiences, and I'm actively expanding my skill set by diving into backend development
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default About;
