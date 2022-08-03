import { useEffect } from "react";
import Head from "next/head";

import getAllPosts from "../lib/post-util";

import Icons from "../components/SocialMediaIcons/socialMediaIcons";

import Intro from "../components/Home/Intro";
import Projects from "../components/Home/Projects";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";

let IndexPage = (props) => {
  let { postData } = props;

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Koushil Mankali</title>
        <link rel="icon" type="image/ico" href="/Images/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon-precomposed"
          type="image/png"
          sizes="512x512"
          href="/Images/favicons/andriod-chrome-512x512.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          type="image/png"
          sizes="192x192"
          href="/Images/favicons/andriod-chrome-192x192.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          type="image/png"
          sizes="72x72"
          href="/Images/favicons/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          type="image/png"
          sizes="32x32"
          href="/Images/favicons/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          type="image/png"
          sizes="16x16"
          href="/Images/favicons/favicon-16x16.png"
        />

        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
        <meta
          name="description"
          content="Koushil Mankali a MERN Stack Web Developer and PHP Developer. Interested in working on MERN Stack Technology in building good looking and well performing websites. This is a portfolio of my projects."
        />
        <meta
          name="keywords"
          content="koushil mankali, koushil, HTML, CSS, JavaScript, Node JS, React JS, Next JS, PHP, MySQL, Mongo DB, Web Developer, Hyderabad, Full Stack Developer, JavaScript Developer"
        />
        <meta property="og:type" content="portfolio" />

        <meta property="og:title" content="Koushil Mankali Portfolio" />

        <meta
          property="og:description"
          content="Koushil Mankali a MERN Stack Web Developer and PHP Developer. Interested in working on MERN Stack Technology in building good looking and well performing websites. This is a portfolio of my projects. "
        />

        <meta property="og:image" content="/Images/koushil.jpg" />

        <meta property="og:site_name" content="Koushil Mankali" />

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="eng" />
      </Head>
      <main>
        <Icons />
        <Intro />
        <About />
        <Projects data={postData} />
        <Contact />
      </main>
    </>
  );
};

export async function getStaticProps() {
  let data = getAllPosts();

  return {
    props: { postData: data },
    revalidate: 3600,
  };
}

export default IndexPage;
