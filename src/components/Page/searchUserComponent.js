import profiles from "../../shared/profile";
import CardU from "./CardComponentU";
function SearchUser() {
  const Profiles = profiles.map((profile) => {
    return <CardU profile={profile} />;
  });
  return (
    <div className="container">
      <h3>All profile</h3>
      <div id="wrapper" className="addi row">
        {Profiles}
      </div>
    </div>
  );
}
export default SearchUser;
