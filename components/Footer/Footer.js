import fooCss from "./Footer.module.scss";

let Footer = () => {
  return (
    <div className={fooCss.container}>
      <div className={fooCss.creds}>
        <span className={fooCss.credsInner}>Made in ❤️ with India by</span>
        &nbsp;
        <a
          href="https://www.linkedin.com/in/koushil-mankali/"
          target="_blank"
          rel="noreferrer"
          className={fooCss.name}
        >
          Koushil Mankali
        </a>
      </div>
    </div>
  );
};

export default Footer;
