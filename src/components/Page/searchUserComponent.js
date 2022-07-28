import profiles from "../../shared/profile";
import CardU from "./CardComponentU";
function SearchUser() {
  const Profiles = profiles.map((profile) => {
    return <CardU profile={profile} />;
  });
  return (
    <div className="container">
        <h3>All profile</h3>
      <div id="wrapper" className="d-flex justify-content-center">
        {Profiles}
      </div>
    </div>
  );
}
export default SearchUser;
