import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <Typewriter
            options={{
              strings: ["Hi, I'm Samiullah"], // The text to type
              autoStart: true, // Start typing automatically
              loop: false, // No loop (typing will happen only once)
              delay: 75, // Typing speed
              deleteSpeed: 2000000, // Prevent text from disappearing (set to 0)
            }}
          />
        </h1>

        <p className={styles.description}>
        As a passionate MERN Stack Developer, I specialize in building full-stack web applications. Feel free to connect to know more!
        </p>



        <a href="#ContactForm" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img
        src={getImageUrl("hero/h16.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
