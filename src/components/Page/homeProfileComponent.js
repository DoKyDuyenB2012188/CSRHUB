import { useState } from "react";
import Card from "./CardComponent";
import projects from "../../shared/projects";
function HomeProfile() {
  const [current, setcurrent] = useState("home");
  const HandleClick = (e) => {
    /*remove curent page*/
    const id = e.target.id.split("-")[0];
    if (id != current) {
      const currentPage = document.getElementById(current);
      currentPage.classList.remove("active");
      currentPage.classList.remove("show");
      const linkPage = document.getElementById(`${current}-tab`);
      linkPage.classList.remove("active");
      setcurrent(id);
      const linkUpdate = document.getElementById(e.target.id);
      linkUpdate.classList.add("active");
      const update = document.getElementById(id);
      update.classList.add("active");
      update.classList.add("show");
    }
  };
  const Projects = projects.map((project) => {
    if (project.author == "kms") {
      return <Card topic={project} />;
    } else {
      return <div></div>;
    }
  });
  return (
    <div className="container-fluid p-0">
      <div className="cover-layer">
        <div className="container web-portion">
          <div className="row top-det">
            <div className="col-md-4">
              <div className="profil-det-img d-flex">
                <div className="dp">
                  <img
                    src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg"
                    alt=""
                  />
                </div>
                <div className="pd">
                  <h2>KMS technology</h2>
                  <p>Enterprise</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 eml-mob">
              <ul>
                <li>
                  <i className="fa fa-envelope"></i>
                  kms@gmail.com
                </li>
                <li>
                  <i className="ffa-solid fa-phone"></i> +123 234 234
                </li>
              </ul>
            </div>
            <div className="col-md-4 d-flex map-mark">
              <i className="fa-solid fa-location-dot"></i>
              <p>First Floor,Vincent Plaza, Kuzhithurai, Marthandam </p>
            </div>
          </div>
          <div className="nav-detail">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  onClick={HandleClick}
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={HandleClick}
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={HandleClick}
                  className="nav-link"
                  id="acheive-tab"
                  data-toggle="tab"
                  href="#acheive"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Achievement
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={HandleClick}
                  className="nav-link"
                  id="projects-tab"
                  data-toggle="tab"
                  href="#projects"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={HandleClick}
                  className="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className=" tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row no-margin home-det">
                  <div className="col-md-4 big-img">
                    <img
                      src="https://thanhlapcongtyonline.com/hoanghung/31/images/thanh-lap-cty1(3).jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-md-8 home-dat">
                    <div className="detal-jumbo">
                      <h3>Technology Product Companies</h3>
                      <p>
                        Each KMS company continuously builds and launches their
                        own software product companies. Building companies, not
                        just products, gives us a unique perspective and a
                        practical advantage when it comes to helping our
                        customers.
                      </p>
                    </div>
                    <div className="links">
                      <div className="row">
                        <div className="col-xl-6 col-md-12">
                          <ul className="btn-link">
                            <li>
                              <a href="">Know more</a>
                            </li>
                            <li>Follow us</li>
                          </ul>
                        </div>
                        <div className="col-xl-6 col-md-12">
                          <ul className="social-link">
                            <li>
                              <i className="fa fa-facebook"></i>
                            </li>
                            <li>
                              <i className="fa fa-linkedin-square"></i>
                            </li>
                            <li>
                              <i className="fa fa-twitter"></i>
                            </li>
                            <li>
                              <i className="fa fa-youtube-play"></i>
                            </li>
                            <li>
                              <i className="fa fa-envelope"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="jumbo-address">
                      <div className="row no-margin">
                        <div
                          className="col-lg-6
                                                no-padding"
                        >
                          <table className="addrss-list">
                            <tbody>
                              <tr>
                                <th>Position</th>
                                <td>Companies</td>
                              </tr>
                              <tr>
                                <th>Nationality</th>
                                <td>Vietnamese</td>
                              </tr>
                              <tr>
                                <th>Year of birth</th>
                                <td>2009</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div
                          className="col-lg-6
                                                no-padding"
                        >
                          <table className="addrss-list">
                            <tbody>
                              <tr>
                                <th>Age</th>
                                <td>10+ Years</td>
                              </tr>
                              <tr>
                                <th>Website</th>
                                <td>kms-technology.com</td>
                              </tr>
                              <tr>
                                <th>Languages</th>
                                <td>English,Vietnamese</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className=" tab-pane fade profile-tab"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="profile-desic">
                  <p>
                    Accelerate Your Software Development with Confidence We
                    don’t just build software, we build software companies.
                  </p>
                </div>
                <div className="sec-title">
                  <h2>Services</h2>
                </div>
                <div className="row service-ro no-margin">
                  <div
                    className="col-lg-4 col-md-6
                                    singe-servic"
                  >
                    <i className="fab fa-delicious"></i>
                    <h4>Graphic Design</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div
                    className="col-lg-4 col-md-6
                                    singe-servic"
                  >
                    <i className="fas fa-code"></i>
                    <h4>Website Design</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div
                    className="col-lg-4 col-md-6
                                    singe-servic"
                  >
                    <i className="fab fa-chrome"></i>
                    <h4>Web Development</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div
                    className="col-lg-4 col-md-6
                                    singe-servic"
                  >
                    <i className="fab fa-android"></i>
                    <h4>Android Development</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div
                    className="col-lg-4 col-md-6
                                    singe-servic"
                  >
                    <i className="fab fa-app-store-ios"></i>
                    <h4>IOS Design</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div
                    className="col-lg-4 col-md-6
                                    singe-servic"
                  >
                    <i className="fas fa-mobile-alt"></i>
                    <h4>Ionic Development</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className=" tab-pane education-detail fade"
                id="acheive"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div className="sec-title">
                  <h2>Achievement about charity</h2>
                </div>
                <div className="service no-margin row">
                  <div
                    className="col-sm-3 resume-dat
                                    serv-logo"
                  >
                    <h6>2013-2015</h6>
                    <p>Special</p>
                  </div>
                  <div className="col-sm-9 rgbf">
                    <h5>Support for education charity</h5>
                    <p>
                      We really appreciate your contributions to the community
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane portfolio-detail fade"
                id="projects"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                {Projects}
              </div>
              <div
                className="tab-pane portfolio-detail
                            contact-tab fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div className="row no-margin">
                  <div className="col-md-6 no-padding">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176144.0450019627!2d-107.79423426090409!3d38.97644533805396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874014749b1856b7%3A0xc75483314990a7ff!2sColorado%2C+USA!5e0!3m2!1sen!2sin!4v1547222354537"
                      frameBorder="0"
                      style={{ border: "0" }}
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="col-md-6">
                    <div className="row cont-row no-margin">
                      <div className="col-sm-6">
                        <input
                          placeholder="Enter
                                                Full Name"
                          type="text"
                          className="form-control
                                                form-control-sm"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          placeholder="Enter
                                                Email Address"
                          type="text"
                          className="form-control
                                                form-control-sm"
                        />
                      </div>
                    </div>
                    <div className="row cont-row no-margin">
                      <div className="col-sm-6">
                        <input
                          placeholder="Enter
                                                Mobile Number"
                          type="text"
                          className="form-control
                                                form-control-sm"
                        />
                      </div>
                    </div>
                    <div className="row cont-row no-margin">
                      <div className="col-sm-12">
                        <textarea
                          placeholder="Enter
                                                your Message"
                          className="form-control
                                                form-control-sm"
                          rows="10"
                        ></textarea>
                      </div>
                    </div>
                    <div className="row cont-row no-margin">
                      <div className="col-sm-6">
                        <button
                          className="btn btn-sm
                                                btn-success"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeProfile;
