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
    },
    {
      img: GetTheAppImg,
      ttl: "Zomato Clone",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, Bootstrap, JavaScript, NodeJS, Express, MongoDB",
      video: "",
      live: "",
      git: "",
    },
    {
      img: GetTheAppImg,
      ttl: "Zomato Clone",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, Bootstrap, JavaScript, NodeJS, Express, MongoDB",
      video: "",
      live: "",
      git: "",
    },
    {
      img: GetTheAppImg,
      ttl: "Zomato Clone",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, Bootstrap, JavaScript, NodeJS, Express, MongoDB",
      video: "",
      live: "",
      git: "",
    },
    {
      img: GetTheAppImg,
      ttl: "Zomato Clone",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, Bootstrap, JavaScript, NodeJS, Express, MongoDB",
      video: "",
      live: "",
      git: "",
    },
    {
      img: GetTheAppImg,
      ttl: "Zomato Clone",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, Bootstrap, JavaScript, NodeJS, Express, MongoDB",
      video: "",
      live: "",
      git: "",
    },
    {
      img: GetTheAppImg,
      ttl: "Zomato Clone",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, Bootstrap, JavaScript, NodeJS, Express, MongoDB",
      video: "",
      live: "",
      git: "",
    },
    {
      img: GetTheAppImg,
      ttl: "Zomato Clone",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, Bootstrap, JavaScript, NodeJS, Express, MongoDB",
      video: "",
      live: "",
      git: "",
    },
    {
      img: GetTheAppImg,
      ttl: "Zomato Clone",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, Bootstrap, JavaScript, NodeJS, Express, MongoDB",
      video: "",
      live: "",
      git: "",
    },
    {
      img: GetTheAppImg,
      ttl: "Zomato Clone",
      desc: "This website is a clone of “Lybrate.com” with backend integration, which is an e-commerce store & here I implemented some functionalities like real time search with debounce, product filters, add to cart etc.",
      stack: "HTML, CSS, Bootstrap, JavaScript, NodeJS, Express, MongoDB",
      video: "",
      live: "",
      git: "",
    },
  ];

  const handleBtn = (key) => {
    setActive((val) => {
      return { [val]: false, [key]: true };
    });
  };

  return (
    <div className={css.outerDiv}>
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
        </div>
        <div className={css.bdy}>
          {data?.map((item, id) => {
            return <ProjectCard key={id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
