
function SinglePage({ project }) {
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
        <div id="row">
          <div className="col-12 col-lg-6 offset-md-3">
            <img
              style={{ marginLeft: "20%" }}
              src={project.picture}
              width="60%"
              height="5%"
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-12">
            <h2>{project.name}</h2>
            <p>{project.title}</p>
            <p>{project.content}</p>
          </div>
        </div>
        <p>
          <button className="button-60">Contact us</button>
        </p>
        <div className="row">
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
