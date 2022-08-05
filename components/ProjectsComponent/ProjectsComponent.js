import { useState } from "react";

import css from "./ProjectsComponent.module.css";

import GetTheAppImg from '../../public/Images/GetTheApp.png'

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
      img: GetTheAppImg,
      ttl: "Zomato Clone",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, Bootstrap, JavaScript, NodeJS, Express, MongoDB",
      video: "",
      live: "",
      git: "",
      type: "frontend"
    },
    {
      img: GetTheAppImg,
      ttl: "Uclone(Udemy Clone)",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, Bootstrap, JavaScript, NodeJS, Express, MongoDB",
      video: "",
      live: "",
      git: "",
      type: "backend"
    },
    {
      img: GetTheAppImg,
      ttl: "Covid Help Disk",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, Bootstrap, JavaScript, NodeJS, Express, MongoDB",
      video: "",
      live: "",
      git: "",
      type: "mern"
    },
     {
      img: GetTheAppImg,
      ttl: "Netflix Clone",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, Bootstrap, JavaScript, NodeJS, Express, MongoDB",
      video: "",
      live: "",
      git: "",
      type: "mern"
    },
     {
      img: GetTheAppImg,
      ttl: "Instagram Clone",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, Bootstrap, JavaScript, NodeJS, Express, MongoDB",
      video: "",
      live: "",
      git: "",
      type: "mern"
    },
     {
      img: GetTheAppImg,
      ttl: "Content Management System",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, Bootstrap, JavaScript, NodeJS, Express, MongoDB",
      video: "",
      live: "",
      git: "",
      type: "mern"
    },
     {
      img: GetTheAppImg,
      ttl: "Shopping Site Frontend",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, JavaScript",
      video: "",
      live: "",
      git: "",
      type: "hcj"
    },
     {
      img: GetTheAppImg,
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
