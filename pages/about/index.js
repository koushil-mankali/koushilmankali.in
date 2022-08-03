import Head from "next/head";
import Image from "next/image";

import aboutCss from "./about.module.scss";

let Post = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" type="image/ico" href="/Images/favicon.ico" />
        <link
          rel="apple-touch-icon-precomposed"
          type="image/png"
          sizes="512x512"
          href="/Images/andriod-chrome-512x512.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          type="image/png"
          sizes="192x192"
          href="/Images/andriod-chrome-192x192.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          type="image/png"
          sizes="72x72"
          href="/Images/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          type="image/png"
          sizes="32x32"
          href="/Images/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          type="image/png"
          sizes="16x16"
          href="/Images/favicon-16x16.png"
        />

        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
        <meta
          name="description"
          content="About us page of Koushil Mankali a MERN Stack Web Developer and PHP Developer. Interested in working on MERN Stack Technology in building good looking and well performing websites. This is a portfolio of my projects."
        />
        <meta
          name="keywords"
          content="koushil mankali, koushil, HTML, CSS, JavaScript, Node JS, React JS, Next JS, PHP, MySQL, Mongo DB, Web Developer, Hyderabad, Full Stack Developer, JavaScript Developer"
        />
      </Head>
      <div className={aboutCss.post}>
        <div className={aboutCss.btnLinks}>
          <a
            href="https://www.linkedin.com/in/koushil-mankali/"
            rel="noreferrer"
            className={aboutCss.btnLink}
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/koushil_mankali/"
            rel="noreferrer"
            className={aboutCss.btnLink}
          >
            Instagram
          </a>

          <a
            href="https://github.com/koushil-mankali"
            rel="noreferrer"
            className={aboutCss.btnLink}
          >
            GitHub
          </a>
        </div>
        <article className={aboutCss.postBdy}>
          <p className={aboutCss.introPara}>
            MERN STACK DEVELOPER, PHP DEVELOPER & JAVASCRIPT DEVELOPER
          </p>
          <div className={aboutCss.imgTag}>
            <Image
              className={aboutCss.imageTag}
              src="/Images/koushil.jpg"
              alt="profile photo"
              width="200px;"
              height="200px;"
            />
          </div>

          <p className={aboutCss.para1}>
            Hi Iam <span>koushil Mankali</span>
          </p>
          <p className={aboutCss.para2}>
            I am a Full Stack Web Developer(MERN) and PHP Developer. Interested
            in working on MERN Stack Technology in building good looking and
            well performing websites.
          </p>
        </article>
      </div>
    </>
  );
};

export default Post;
