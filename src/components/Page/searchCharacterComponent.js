import profiles from "../../shared/profile";
import projects from "../../shared/projects";
import CardU from "./CardComponentU";
function SearchChar({char}) {
    const chars = char.split(' ');
    const Profiles = profiles.map((profile)=>{
        const pro = profile.name.split(' ')
        if(pro.same((r)=> chars.includes(r))){
            return <CardU topic={profile}/>
        }
    })
  return (
    <div className="container">
      <h3>All profile</h3>
      <div id="wrapper" className="addi row">
        {Profiles}
      </div>
    </div>
  );
}
export default SearchChar;
