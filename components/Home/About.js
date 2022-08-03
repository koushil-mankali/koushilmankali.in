import Image from "next/image";

import Button from "../../utils/Button";

import aboutCss from "./About.module.scss";

let About = () => {
  return (
    <div className={aboutCss.about}>
      <h1 className={aboutCss.ht} id="about">
        About Me
      </h1>
      <div className={aboutCss.innerDiv}>
        <div className={aboutCss.imgDiv}>
          <Image
            className={aboutCss.imgTag}
            src="/Images/koushil.jpg"
            alt="koushil"
            width="300px"
            height="400px"
          />
        </div>
        <div className={aboutCss.abtDiv}>
          <p className={aboutCss.p}>
            Hi, My self Koushil Mankali I enjoy creating websites and making
            them live on the internet. I have started learning web developement
            in my 3rd year of Under Graduation. But actually i have started
            creating websites when i was in my 11th standard on wordpress
            platform. It was fun to create websites and host them online but
            also i was a computer enthusiastic which driven me to create
            computer and tech related websites. So my websites creation or
            development journey started way long.
          </p>
          <p className={aboutCss.p}>
            I have started my web development with PHP but now i am working on
            technologies :
          </p>
          <ul className={aboutCss.ul}>
            <div className={aboutCss.ldiv}>
              <li className={aboutCss.li}>JavaScript</li>
              <li className={aboutCss.li}>React JS</li>
              <li className={aboutCss.li}>Next JS</li>
              <li className={aboutCss.li}>Node JS</li>
            </div>
            <div className={aboutCss.ldiv}>
              <li className={aboutCss.li}>Express JS</li>
              <li className={aboutCss.li}>MongoDB</li>
              <li className={aboutCss.li}>MySQL</li>
              <li className={aboutCss.li}>PHP</li>
            </div>
            <div className={aboutCss.ldiv}>
              <li className={aboutCss.li}>HTML</li>
              <li className={aboutCss.li}>CSS</li>
              <li className={aboutCss.li}>SCSS</li>
              <li className={aboutCss.li}>BOOTSTRAP</li>
            </div>
          </ul>
        </div>
      </div>
      <div className={aboutCss.kmam}>
        <Button to="/about">Know More About Me ...</Button>
      </div>
    </div>
  );
};

export default About;
