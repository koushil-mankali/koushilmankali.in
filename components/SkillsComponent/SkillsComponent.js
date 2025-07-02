import { useState } from "react";

import css from "./SkillsComponent.module.css";

import geminiImg from "../../public/Images/Skills/gemini.png";
import openaiImg from "../../public/Images/Skills/openai.png";
import aiImg from "../../public/Images/Skills/ai.svg";

import javascriptImg from "../../public/Images/Skills/javascript.svg";
import typescriptImg from "../../public/Images/Skills/typescript.png";
import reactjsImg from "../../public/Images/Skills/reactjs.svg";
import nextjsImg from "../../public/Images/Skills/nextjs.png";
import reduxImg from "../../public/Images/Skills/redux.svg";
import html5Img from "../../public/Images/Skills/html5.svg";
import css3Img from "../../public/Images/Skills/css3.svg";
import sassImg from "../../public/Images/Skills/sass.png";
import bootstrapImg from "../../public/Images/Skills/bootstrap.svg";
import materialuiImg from "../../public/Images/Skills/materialui.svg";
import reactrouterImg from "../../public/Images/Skills/reactrouter.png";

import nodejsImg from "../../public/Images/Skills/nodejs.svg";
import expressjsImg from "../../public/Images/Skills/expressjs.svg";
import mongodbImg from "../../public/Images/Skills/mongodb.svg";
import nestjsImg from "../../public/Images/Skills/nestjs.png";
import mongooseImg from "../../public/Images/Skills/mongoose.png";
import astroJSImg from "../../public/Images/Skills/astrojs.png";

import jwtImg from "../../public/Images/Skills/jwt.png";
import githubImg from "../../public/Images/Skills/github.png";
import gitImg from "../../public/Images/Skills/git.svg";
import vitejsImg from "../../public/Images/Skills/vitejs.svg";
import npmImg from "../../public/Images/Skills/npm.svg";
import yarnImg from "../../public/Images/Skills/yarn.png";
import pnpmImg from "../../public/Images/Skills/pnpm.svg";
import vscodeImg from "../../public/Images/Skills/vscode.png";
import postmanImg from "../../public/Images/Skills/postman.png";

import jestImg from "../../public/Images/Skills/jest.png";
import chaiImg from "../../public/Images/Skills/chai.png";
import mochaImg from "../../public/Images/Skills/mocha.svg";
import sinonImg from "../../public/Images/Skills/sinon.png";
import shadcnImg from "../../public/Images/Skills/shadcn.png";

import graphQLImg from "../../public/Images/Skills/graphql.png";
import apolloGraphQLImg from "../../public/Images/Skills/apollographql.png";

import d365 from "../../public/Images/Skills/d365.png";
import powerapps from "../../public/Images/Skills/powerapps.jpeg";
import powerautomate from "../../public/Images/Skills/powerautomate.png";
import powerpages from "../../public/Images/Skills/powerpages.png";
import xrmtoolbox from "../../public/Images/Skills/xrmtoolbox.jpg";

import azureImg from "../../public/Images/Skills/azure.png";

import SkillCard from "../Cards/SkillCard/SkillCard";
import GreyBtn from "../Button/GreyBtn/Button";

const SkillsComponent = () => {
  const [active, setActive] = useState({
    all: true,
    ai: false,
    frontend: false,
    backend: false,
    tools: false,
    testing: false,
    service: false,
    lowcode: false,
    cloud: false,
  });

  const data = [
    {
      imgSrc: geminiImg,
      name: "Gemini AI",
      type: ["ai"],
    },
    {
      imgSrc: openaiImg,
      name: "OpenAI GPT",
      type: ["ai"],
    },
    {
      imgSrc: aiImg,
      name: "AI Agents",
      type: ["ai"],
    },
    {
      imgSrc: aiImg,
      name: "Agentic AI",
      type: ["ai"],
    },
    {
      imgSrc: aiImg,
      name: "AI Workflows",
      type: ["ai"],
    },
    {
      imgSrc: javascriptImg,
      name: "Javascript",
      type: ["frontend", "backend"],
    },
    {
      imgSrc: typescriptImg,
      name: "Typescript",
      type: ["frontend", "backend"],
    },
    {
      imgSrc: reactjsImg,
      name: "React Js",
      type: ["frontend"],
    },
    {
      imgSrc: nextjsImg,
      name: "Next Js",
      type: ["frontend", "backend"],
    },
    {
      imgSrc: reduxImg,
      name: "Redux",
      type: ["frontend"],
    },
    {
      imgSrc: nodejsImg,
      name: "Node Js",
      type: ["backend"],
    },
    {
      imgSrc: expressjsImg,
      name: "Express Js",
      type: ["backend"],
    },
    {
      imgSrc: nestjsImg,
      name: "Nest Js",
      type: ["backend"],
    },
    {
      imgSrc: mongodbImg,
      name: "MongoDB",
      type: ["backend"],
    },
    {
      imgSrc: mongooseImg,
      name: "Mongoose",
      type: ["backend"],
    },
    {
      imgSrc: astroJSImg,
      name: "Astro",
      type: ["frontend", "backend"],
    },
    {
      imgSrc: apolloGraphQLImg,
      name: "Apollo GraphQL Client",
      type: ["frontend"],
    },
    {
      imgSrc: apolloGraphQLImg,
      name: "Apollo GraphQL Server",
      type: ["backend"],
    },
    {
      imgSrc: "restapi",
      name: "REST Api",
      type: ["service"],
    },
    {
      imgSrc: graphQLImg,
      name: "GraphQL",
      type: ["service"],
    },
    {
      imgSrc: reactrouterImg,
      name: "React Router",
      type: ["frontend"],
    },
    {
      imgSrc: html5Img,
      name: "HTML",
      type: ["frontend"],
    },
    {
      imgSrc: css3Img,
      name: "CSS",
      type: ["frontend"],
    },
    {
      imgSrc: sassImg,
      name: "SASS",
      type: ["frontend"],
    },
    {
      imgSrc: bootstrapImg,
      name: "Bootstrap",
      type: ["frontend"],
    },
    {
      imgSrc: materialuiImg,
      name: "Material UI",
      type: ["frontend"],
    },
    {
      imgSrc: shadcnImg,
      name: "Shadcn",
      type: ["frontend"],
    },
    {
      imgSrc: jwtImg,
      name: "JWT",
      type: ["tools"],
    },
    {
      imgSrc: gitImg,
      name: "GIT",
      type: ["tools"],
    },
    {
      imgSrc: githubImg,
      name: "Gighub",
      type: ["tools"],
    },
    {
      imgSrc: vitejsImg,
      name: "Vite Js",
      type: ["tools"],
    },
    {
      imgSrc: npmImg,
      name: "NPM",
      type: ["tools"],
    },
    {
      imgSrc: yarnImg,
      name: "Yarn",
      type: ["tools"],
    },
    {
      imgSrc: pnpmImg,
      name: "Pnpm",
      type: ["tools"],
    },
    {
      imgSrc: vscodeImg,
      name: "VSCode",
      type: ["tools"],
    },
    {
      imgSrc: postmanImg,
      name: "Postman",
      type: ["tools"],
    },
    {
      imgSrc: jestImg,
      name: "Jest",
      type: ["testing"],
    },
    {
      imgSrc: chaiImg,
      name: "Chai",
      type: ["testing"],
    },
    {
      imgSrc: mochaImg,
      name: "Mocha",
      type: ["testing"],
    },
    {
      imgSrc: sinonImg,
      name: "Sinon",
      type: ["testing"],
    },
    {
      imgSrc: d365,
      name: "D365",
      type: ["lowcode"],
    },
    {
      imgSrc: powerapps,
      name: "Power Apps",
      type: ["lowcode"],
    },
    {
      imgSrc: powerpages,
      name: "Power Pages",
      type: ["lowcode"],
    },
    {
      imgSrc: powerautomate,
      name: "Power Automate",
      type: ["lowcode"],
    },
    {
      imgSrc: xrmtoolbox,
      name: "Xrm Tool Box",
      type: ["lowcode"],
    },
    {
      imgSrc: azureImg,
      name: "Azure",
      type: ["cloud"],
    },
  ];

  const handleBtn = (key) => {
    setActive((val) => {
      return { [val]: false, [key]: true };
    });
  };

  let cardData = "";

  if (active.all) {
    cardData = data?.filter((item) => {
      return item;
    });
  } else if (active.ai) {
    cardData = data?.filter((item) => {
      if (item.type.includes("ai")) {
        return item;
      }
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
  } else if (active.testing) {
    cardData = data?.filter((item) => {
      if (item.type.includes("testing")) {
        return item;
      }
    });
  } else if (active.tools) {
    cardData = data?.filter((item) => {
      if (item.type.includes("tools")) {
        return item;
      }
    });
  } else if (active.service) {
    cardData = data?.filter((item) => {
      if (item.type.includes("service")) {
        return item;
      }
    });
  } else if (active.cloud) {
    cardData = data?.filter((item) => {
      if (item.type.includes("cloud")) {
        return item;
      }
    });
  } else if (active.lowcode) {
    cardData = data?.filter((item) => {
      if (item.type.includes("lowcode")) {
        return item;
      }
    });
  }

  return (
    <div className={css.outerDiv} id="skills">
      <div className={css.innerDiv}>
        <div className={css.ttl}>
          My <span className={css.ttlS}>Skills</span>
        </div>
        <div className={css.btns}>
          <GreyBtn
            txt="All"
            onClick={() => handleBtn("all")}
            isActive={active?.all}
          />
          <GreyBtn
            txt="AI"
            onClick={() => handleBtn("ai")}
            isActive={active?.ai}
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
            txt="Tools"
            onClick={() => handleBtn("tools")}
            isActive={active?.tools}
          />
          <GreyBtn
            txt="Testing"
            onClick={() => handleBtn("testing")}
            isActive={active?.testing}
          />
          <GreyBtn
            txt="Services"
            onClick={() => handleBtn("service")}
            isActive={active?.service}
          />
          <GreyBtn
            txt="Cloud"
            onClick={() => handleBtn("cloud")}
            isActive={active?.cloud}
          />
          <GreyBtn
            txt="Low Code"
            onClick={() => handleBtn("lowcode")}
            isActive={active?.lowcode}
          />
        </div>
        <div className={css.bdy}>
          {cardData?.map((item, id) => {
            return <SkillCard key={id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
