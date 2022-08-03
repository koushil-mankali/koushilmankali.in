import Image from "next/image";

import icons from "./Icons.module.scss";

let Icons = () => {
  return (
    <div className={icons.container}>
      <a
        href="https://github.com/koushil-mankali"
        target="_blank"
        rel="noreferrer"
        className={icons.logos}
      >
        <Image
          src="/Images/github.svg"
          alt="github"
          width="30px"
          height="30px"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/koushil-mankali/"
        target="_blank"
        rel="noreferrer"
        className={icons.logos}
      >
        <Image
          src="/Images/linkedin.svg"
          alt="linkedin"
          width="30px"
          height="30px"
        />
      </a>
      <a
        href="https://www.instagram.com/koushil_mankali/"
        target="_blank"
        rel="noreferrer"
        className={icons.logos}
      >
        <Image
          src="/Images/instagram.svg"
          alt="instagram"
          width="30px"
          height="30px"
        />
      </a>
      <a
        href="https://www.facebook.com/koushilmankali"
        target="_blank"
        rel="noreferrer"
        className={icons.logos}
      >
        <Image
          src="/Images/facebook.svg"
          alt="facebook"
          width="30px"
          height="30px"
        />
      </a>
    </div>
  );
};

export default Icons;
