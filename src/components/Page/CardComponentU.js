import { NavLink } from "react-router-dom";

function CardU({profile}) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <NavLink key ={profile.connectuser} className="untext" to={'/show_profile/'+ profile.connectuser}>
        <div className="our-team">
          <div className="picture">
            <img
              className="img-fluid"
              src={profile.avatar}
            />
          </div>
          <div className="team-content">
            <h3 className="name">{profile.name}</h3>
            <h4 className="title">{profile.type}</h4>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
export default CardU;
