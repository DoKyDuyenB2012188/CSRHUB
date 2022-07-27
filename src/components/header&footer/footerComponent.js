import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
function Footer(props) {
  return (
    <div className="footer p-5">
      <div className="container-fluid p-0">
        <div className="row row-content p-0">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Expore</Link>
              </li>
              <li>
                <Link to="./aboutus">Contact</Link>
              </li>
              <li>
                <Link to="/menu">About</Link>
              </li>
              <li>
                <Link to="/contactus">Home</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-8 align-self-center">
            <div className="text-center">
              <button
                className="size_btn  btn-primary"
                style={{ backgroundColor: "#dd4b39", border: "none" }}
                role="button"
                href="http://google.com/+"
              >
                <i className="fa fa-google"></i>
              </button>
              <button
                className="size_btn  btn-primary"
                style={{ backgroundColor: "#3b5998", border: "none" }}
                role="button"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </button>
              <button
                className="size_btn  btn-primary"
                style={{ backgroundColor: "#0082ca", border: "none" }}
                role="button"
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin-square"></i>
              </button>
              <button
                className="size_btn  btn-primary"
                style={{ backgroundColor: "#55acee", border: "none" }}
                role="button"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </button>
              <button
                className="size_btn  btn-primary"
                style={{ backgroundColor: "#ed302f", border: "none" }}
                role="button"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube-play"></i>
              </button>
              <button
                className="size_btn  btn-primary"
                style={{ backgroundColor: "#55acee", border: "none" }}
                role="button"
                href="mailto:"
              >
                <i className="fa fa-envelope"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
