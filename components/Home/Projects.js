import Card from "./Card";

import projCss from "./Projects.module.scss";

let Projects = (props) => {
  let { data } = props;

  return (
    <div className={projCss.projects} id="projects">
      <h1 className={projCss.ht}>Projects</h1>
      <div className={projCss.projectsDiv}>
        {data.map((post) => {
          return <Card postData={post} key={post.slug} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
