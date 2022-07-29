import profiles from "../../shared/profile";
import CardU from "./CardComponentU";
function SearchChar({char}) {
    const Profiles = profiles.map((profile)=>{
        const pro = profile.name.split(' ')[0];
        pro.toString()
        console.log(pro===char)
        if(pro === char){
            console.log(profile)
            return <CardU profile={profile}/>
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
