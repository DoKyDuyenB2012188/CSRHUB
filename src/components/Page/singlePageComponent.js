import projects from "../../shared/projects";
function SinglePage({project}) {

  return (
    <div id="wrapper" className="container">
      <div id="header">
        <div id="logo">
          <p>
            Design by{" "}
            <a href="http://templated.co" rel="nofollow">
              {project.author}
            </a>
          </p>
        </div>
      </div>
      <div id="page" className="container-fluid">
        <div id="cbox1">
          <p>
            <img
              style={{marginLeft:"20%"}}
              src={project.picture}
              width="60%"
              height="5%"
              alt=""
            />
          </p>
          <h2>{project.name}</h2>
          <p>
            {project.title}
          </p>
          <p>
            {project.content}
          </p>
          <p>
            <button className="button-60">Contact us</button>
          </p>
        </div>

        <div id="box2">
          <h2>Relate projects</h2>
         
          <p>
          <button className="button-60">Read more</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
