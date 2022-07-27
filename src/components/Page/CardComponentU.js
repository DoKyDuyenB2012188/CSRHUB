import { NavLink } from "react-router-dom";

function CardU() {
  return (
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <NavLink className="untext" to="/show_profile">
        <div class="our-team">
          <div class="picture">
            <img
              class="img-fluid"
              src="https://www.passerellesnumeriques.org/wp-content/uploads/2018/10/KMS-Technology.png"
            />
          </div>
          <div class="team-content">
            <h3 class="name">KMS teach</h3>
            <h4 class="title">Company</h4>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
export default CardU;
