import projects from "../../shared/projects";
import Card from "./CardComponent";
function SearchTopicPro({topic}) {
    const topics = topic.split(' ');
    const Projects = projects.map((project)=>{
        if(project.topic.some(r=> topics.includes(r))){
            return <Card topic={project}/>
        }
    })
  return (
    <div className="container">
      <div className="row">
        <div className="col-3 col-lg-3">
          <h3>{'Search for '+topic}</h3>
        </div>
        <div className="col-6 col-lg-6">
         
        </div>
      </div>
      <div id="wrapper" className="container">
        <div className="row">{Projects}</div>
      </div>
    </div>
  );
}
export default SearchTopicPro;
