import { useState } from "react";

import css from "./ProjectsComponent.module.css";

import BlogCMSImg from "../../public/Images/projects/BlogCMS.png";
import covidHDImg from "../../public/Images/projects/Covid-Help-Disk.png";
import EshopImg from "../../public/Images/projects/Eshop.png";
import instaCloneImg from "../../public/Images/projects/instagram-clone.png";
import mkHTLImg from "../../public/Images/projects/MK-Hotels.png";
import netflixImg from "../../public/Images/projects/Netflix-Clone.png";
import ucloneImg from "../../public/Images/projects/udemy-clone.png";
import zomatoCImg from "../../public/Images/projects/zomato-clone.png";
import portfolioImg from "../../public/Images/projects/portfolio.png";
import texttospeechappImg from "../../public/Images/projects/texttospeechapp.png";
import udemyhomepageImg from "../../public/Images/postImages/udemyclone/udemyhomepage.png";
import browserMindAIImg from "../../public/Images/projects/broswermindai.png";

import GreyBtn from "../Button/GreyBtn/Button";
import ProjectCard from "../Cards/ProjectCard/ProjectCard";

const ProjectsComponent = () => {
  const [active, setActive] = useState({
    all: true,
    frontend: false,
    backend: false,
    mern: false,
    hcj: false,
    ai: false,
  });

  const data = [
    {
      img: browserMindAIImg,
      link: "/posts/browser-mind-ai",
      ttl: "BrowserMind AI",
      desc: "BrowserMind AI is developed using Broswer provided AI tools without making call to external AI Tools.",
      stack: "React Js, Next Js, HTML, CSS, JavaScript",
      video: "/",
      live: "https://browsermindai.koushilmankali.in/",
      git: "https://github.com/koushil-mankali/BrowserMindAI",
      type: ["frontend", "backend", "mern", "ai"],
    },
    {
      img: portfolioImg,
      link: "/posts/koushil-mankali-portfolio",
      ttl: "My Portfolio",
      desc: "My Portfolio.",
      stack: "React Js, Next Js, HTML, CSS, JavaScript",
      video: "/",
      live: "https://koushilmankali.in/",
      git: "https://github.com/koushil-mankali/koushilmankali.in",
      type: ["frontend", "backend", "mern"],
    },
    {
      img: zomatoCImg,
      link: "/posts/zomato-clone",
      ttl: "Zomato Clone",
      desc: "Zomato Clone - Food Delivery Application Clone using React JS. In this Zomato App clone I have cloned maximum pages Home page, User Profile page, Food Selection page, Settings page etc... As it is only frontend clone I have added static data but in a dynamic way so data can be changed easily or added easily.",
      stack: "React Js, HTML, CSS, JavaScript",
      video:
        "https://www.youtube.com/watch?v=lNfS_8bJA5c&ab_channel=KoushilMankali",
      live: "https://zomatoclone.koushilmankali.in/",
      git: "https://github.com/koushil-mankali/zomato_clone",
      type: ["frontend"],
    },
    {
      img: covidHDImg,
      link: "/posts/covid-help-disk",
      ttl: "Covid Help Disk",
      desc: "In this covid situation people are facing a lots of problems because of unavailability of beds, oxygen and medicines but actually we have enough stock of them just we need to use them effeciently so I have made a project which will help public (users) to know in which hospital beds, oxygen , medicine is available so that they can directly visit.",
      stack: "React Js, NodeJS, Express, MongoDB, HTML, CSS, JavaScript",
      video: "",
      live: "https://covidhd.koushilmankali.in/",
      git: "https://github.com/koushil-mankali/covid-help-disk-frontend",
      type: ["frontend", "backend", "mern"],
    },
    {
      img: udemyhomepageImg,
      link: "/posts/udemy-clone-project",
      ttl: "Uclone(Udemy Clone)",
      desc: "Uclone its a Udemy replica which have almost all features like udemy.",
      stack: "React, MERN, Node, Express, MongoDB, Mongoose, JavaScript",
      video: "https://youtu.be/fE0tml6ryrI",
      live: "https://uclone.koushilmankali.in/",
      git: "https://github.com/koushil-mankali/udemy-clone-frontend",
      type: ["frontend", "backend"],
    },
    {
      img: netflixImg,
      link: "/posts/netflix-clone",
      ttl: "Netflix Clone",
      desc: "It is a clone of netflix frontend using reactjs.",
      stack: "React JS, HTML, CSS, JavaScript",
      video: "",
      live: "https://netflix-clone.koushilmankali.in/",
      git: "https://github.com/koushil-mankali/netflix-clone",
      type: ["frontend"],
    },
    {
      img: instaCloneImg,
      link: "/posts/instagram-clone",
      ttl: "Instagram Clone",
      desc: "Instagram Clone using React Js and Firebase",
      stack: "React JS, Firebase HTML, CSS, JavaScript",
      video: "",
      live: "https://instagram-clone.koushilmankali.in/",
      git: "https://github.com/koushil-mankali/instagram_clone",
      type: ["frontend"],
    },
    {
      img: texttospeechappImg,
      link: "/posts/text-to-speech-app",
      ttl: "Text To Speech App",
      desc: "text to speech app.",
      stack: "Vue Js",
      video: "/",
      live: "https://text-to-speech-app.koushilmankali.in/",
      git: "https://github.com/koushil-mankali/Text-to-speech-vuejs-app",
      type: ["frontend"],
    },
    {
      img: ucloneImg,
      link: "/posts/uclone-udemy-clone-project",
      ttl: "Uclone(Udemy Clone) [OLD]",
      desc: "Uclone its a Udemy replica which have almost all features like udemy.",
      stack: "PHP, MySQL, HTML, CSS, JavaScript",
      video: "https://youtu.be/fE0tml6ryrI",
      live: "",
      git: "https://github.com/koushil-mankali/uclone",
      type: ["frontend", "backend"],
    },
    {
      img: BlogCMSImg,
      link: "/posts/content-management-system",
      ttl: "Content Management System",
      desc: "It is a Content Management System here admin can manage blog content and perform operations such as publish or update or delete articles. Articles are divided based on categories and admin can create/delete categories. Category count will be updated automatically when user publish/update/delete articles. Admin can add more admins or moderators.",
      stack: "PHP, MySQL, HTML, CSS, JavaScript",
      video: "",
      live: "",
      git: "https://github.com/koushil-mankali/blog-content-management-system",
      type: ["frontend", "backend"],
    },
    {
      img: EshopImg,
      link: "/posts/shopping-site-frontend",
      ttl: "Shopping Site Frontend",
      desc: "It's and one page online shopping site only front end.",
      stack: "HTML, CSS, JavaScript",
      video: "",
      live: "https://koushil-mankali.github.io/single-page-hotel-site-front-end",
      git: "https://github.com/koushil-mankali/shopping-site-frontend",
      type: ["frontend", "hcj"],
    },
    {
      img: mkHTLImg,
      link: "/posts/hotel-site",
      ttl: "Hotel Site Forntend",
      desc: "Ecommerce shopping site frontend with html, css and javascript.",
      stack: "HTML, CSS, JavaScript",
      video: "",
      live: "https://koushil-mankali.github.io/eshop",
      git: "https://github.com/koushil-mankali/eshop",
      type: ["frontend", "hcj"],
    },
  ];

  let cardData = "";

  if (active.all) {
    cardData = data?.filter((item) => {
      return item;
    });
  } else if (active.frontend) {
    cardData = data?.filter((item) => {
      if (item.type.includes("frontend")) {
        return item;
      }
    });
  } else if (active.backend) {
    cardData = data?.filter((item) => {
      if (item.type.includes("backend")) {
        return item;
      }
    });
  } else if (active.mern) {
    cardData = data?.filter((item) => {
      if (item.type.includes("mern")) {
        return item;
      }
    });
  } else if (active.hcj) {
    cardData = data?.filter((item) => {
      if (item.type.includes("hcj")) {
        return item;
      }
    });
  }

  const handleBtn = (key) => {
    setActive((val) => {
      return { [val]: false, [key]: true };
    });
  };

  return (
    <div className={css.outerDiv} id="work">
      <div className={css.innerDiv}>
        <div className={css.ttl}>
          All The <span className={css.ttlS}>Projects</span> I Have Done
        </div>
        <div className={css.btns}>
          <GreyBtn
            txt="All"
            onClick={() => handleBtn("all")}
            isActive={active?.all}
          />
          <GreyBtn
            txt="Frontend"
            onClick={() => handleBtn("frontend")}
            isActive={active?.frontend}
          />
          <GreyBtn
            txt="Backend"
            onClick={() => handleBtn("backend")}
            isActive={active?.backend}
          />
          <GreyBtn
            txt="MERN Stack"
            onClick={() => handleBtn("mern")}
            isActive={active?.mern}
          />
          <GreyBtn
            txt="HTML, CSS, JS"
            onClick={() => handleBtn("hcj")}
            isActive={active?.hcj}
          />
        </div>
        <div className={css.bdy}>
          {cardData?.map((item, id) => {
            return <ProjectCard key={id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
