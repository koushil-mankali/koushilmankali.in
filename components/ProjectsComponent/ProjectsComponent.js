import { useState } from "react";

import css from "./ProjectsComponent.module.css";

import BlogCMSImg from '../../public/Images/projects/BlogCMS.png'
import covidHDImg from '../../public/Images/projects/Covid-Help-Disk.png'
import EshopImg from '../../public/Images/projects/Eshop.png'
import instaCloneImg from '../../public/Images/projects/instagram-clone.png'
import mkHTLImg from '../../public/Images/projects/MK-Hotels.png'
import netflixImg from '../../public/Images/projects/Netflix-Clone.png'
import ucloneImg from '../../public/Images/projects/udemy-clone.png'
import zomatoCImg from '../../public/Images/projects/zomato-clone.png'

import GreyBtn from "../Button/GreyBtn/Button";
import ProjectCard from "../Cards/ProjectCard/ProjectCard";

const ProjectsComponent = () => {
  const [active, setActive] = useState({
    all: true,
    frontend: false,
    backend: false,
    mern: false,
    hcj: false,
  });

  const data = [
    {
      img: zomatoCImg,
      link: "/project/zomato-clone",
      ttl: "Zomato Clone",
      desc: "Zomato Clone - Food Delivery Application Clone using React JS. In this Zomato App clone I have cloned maximum pages Home page, User Profile page, Food Selection page, Settings page etc... As it is only frontend clone I have added static data but in a dynamic way so data can be changed easily or added easily.",
      stack: "React Js, HTML, CSS, JavaScript",
      video: "https://www.youtube.com/watch?v=lNfS_8bJA5c&ab_channel=KoushilMankali",
      live: "https://zomatoclone.koushilmankali.com/",
      git: "https://github.com/koushil-mankali/zomato_clone",
      type: "frontend"
    },
    {
      img: ucloneImg,
      link: "/project/zomato-clone",
      ttl: "Uclone(Udemy Clone)",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, Bootstrap, JavaScript, NodeJS, Express, MongoDB",
      video: "",
      live: "",
      git: "",
      type: "backend"
    },
    {
      img: covidHDImg,
      link: "/project/zomato-clone",
      ttl: "Covid Help Disk",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, Bootstrap, JavaScript, NodeJS, Express, MongoDB",
      video: "",
      live: "",
      git: "",
      type: "mern"
    },
     {
      img: netflixImg,
      link: "/project/zomato-clone",
      ttl: "Netflix Clone",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, Bootstrap, JavaScript, NodeJS, Express, MongoDB",
      video: "",
      live: "",
      git: "",
      type: "mern"
    },
     {
      img: instaCloneImg,
      link: "/project/zomato-clone",
      ttl: "Instagram Clone",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, Bootstrap, JavaScript, NodeJS, Express, MongoDB",
      video: "",
      live: "",
      git: "",
      type: "mern"
    },
     {
      img: BlogCMSImg,
      link: "/project/zomato-clone",
      ttl: "Content Management System",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, Bootstrap, JavaScript, NodeJS, Express, MongoDB",
      video: "",
      live: "",
      git: "",
      type: "mern"
    },
     {
      img: EshopImg,
      link: "/project/zomato-clone",
      ttl: "Shopping Site Frontend",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, JavaScript",
      video: "",
      live: "",
      git: "",
      type: "hcj"
    },
     {
      img: mkHTLImg,
      link: "/project/zomato-clone",
      ttl: "Hotel Site Forntend",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, JavaScript",
      video: "",
      live: "",
      git: "",
      type: "hcj"
    },
  ];

  let cardData = "";
  
  if(active.all){
    cardData = data?.filter((item) => {
      return item;
    })
  } else if (active.frontend){
    cardData = data?.filter((item) => {
      if(item.type === "frontend"){
        return item;
      }
    })
  } else if (active.backend){
    cardData = data?.filter((item) => {
      if(item.type === "backend"){
        return item;
      }
    })
  } else if (active.mern){
    cardData = data?.filter((item) => {
      if(item.type === "mern"){
        return item;
      }
    })
  } else if (active.hcj){
    cardData = data?.filter((item) => {
      if(item.type === "hcj"){
        return item;
      }
    })
  } 

  const handleBtn = (key) => {
    setActive((val) => {
      return { [val]: false, [key]: true };
    });
  };

  return (
    <div className={css.outerDiv} id='work'>
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
