import projects from "../../shared/projects";
import Card from "./CardComponent";
function SearchProject() {
  const Project = projects.map((project) => {
    return <Card topic={project} />;
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-3 col-lg-3">
          <h3>All project</h3>
        </div>
        <div className="col-6 col-lg-6">
         
        </div>
      </div>
      <div id="wrapper" className="container">
        <div className="row">{Project}</div>
      </div>
    </div>
  );
}
export default SearchProject;
