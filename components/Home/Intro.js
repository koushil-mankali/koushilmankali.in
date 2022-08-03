import Button from "../../utils/Button";

import introCss from "./Intro.module.scss";

let Intro = () => {
  return (
    <div className={introCss.intro}>
      <div className={introCss.innerdiv}>
        <div className={introCss.d1}>Hi, I am</div>
        <div className={introCss.d2}>Koushil Mankali</div>
        <div className={introCss.d3}>
          Full Stack Web Developer, PHP Developer
        </div>
        <div className={introCss.d4}>
          I am a Full Stack Web Developer(MERN) and PHP Developer. Interested in
          working on MERN Stack Technology in building good looking and well
          performing websites.
        </div>
        <div className={introCss.btns}>
          <Button to="/resume/koushil mankali resume.pdf">Resume</Button>
          <Button to="#contact">Hire Me</Button>
        </div>
      </div>
      <div className={introCss.dummy}></div>
    </div>
  );
};

export default Intro;
