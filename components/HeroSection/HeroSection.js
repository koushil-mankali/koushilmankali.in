import css from "./HeroSection.module.css";

import Button from "../Button/RedBtn/Button";

const HeroSection = () => {
  return (
    <div className={css.outerDiv} id="hero">
      <div className={css.innerDiv}>
        <div className={css.sec1}>
          <div className={css.intTtl}>Hi, I am</div>
          <div className={css.name}>Koushil Mankali</div>
          <div className={css.position}>Full Stack Web Developer (MERN)</div>
          <div className={css.about}>
            I am a Full Stack Web Developer(MERN). Interested in working on MERN
            Stack Technology in building good looking and well performing web
            applications.
          </div>
          <div className={css.btns}>
            <Button txt="Resume" link="/resume/koushil mankali resume.pdf" />
            <Button txt="Hire Me" link="/#contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
