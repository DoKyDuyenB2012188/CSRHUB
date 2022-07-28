import projects from "../../shared/projects";
import Card from "./CardComponent";
function SearchProject() {
  const Project = projects.map((project) => {
    return <Card topic={project} />;
  });
  return (
    <div className="container">
      <h3>All project</h3>
      <div id="wrapper" className="container">
        {Project}
      </div>
    </div>
  );
}
export default SearchProject;
