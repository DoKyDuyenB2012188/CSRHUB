import { useState } from "react";
import Card from "./CardComponent";
import projects from "../../shared/projects";
function HomeProfile({ profile }) {
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
  const Projects = projects.map((project)=>{
    if(profile.projects.includes(project.id)){
      return <Card topic={project} />
    }
  })
  return (
    <div className="container-fluid p-0">
      <div className="cover-layer">
        <div className="container web-portion">
          <div className="row top-det">
            <div className="col-md-4">
              <div className="profil-det-img d-flex">
                <div className="dp">
                  <img src={profile.avatar} alt="" />
                </div>
                <div className="pd">
                  <h2>{profile.name}</h2>
                  <p>{profile.type}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 eml-mob">
              <ul>
                <li>
                  <i className="fa fa-envelope"></i>
                  {profile.email}
                </li>
                <li>
                <img width='7%' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACRElEQVRoge3ZO2sUURiH8d8aYwTRRjFeMCBWGksRSxHtlDSioCBC1I8g+AnETq3Ub2ARjNcQSaGBIMRCI3hDQRGsjAlKBFFhLY5b5DI7cybunC32gbdYmFn+D+dwLu/QoUNSBjCJ73iKfWnjxNONa6gvqFlsTZgrirV4YLFEo+6ni1acLXgpW6JRp1IFLEIv3sqXqGMGm9PEbM4qTCgm0ajbSZLmcEGcRKNOpgjbjI/KiUxjU4K8mcwpJ1LHUIK8mbxTXqSO49VHXpohyxN5U33kwIoFv0eX+X99y3z/v7ERf5QfkSfVR85mTHmRttrpB5STeG7xVE1KDVPiRQ6lCJvHMXESd9LEzKeGccVFBtPELEY/fikmMoMdaWIW45Lio/IMa9LEzKdHCFhUZuzfO23JLvxQXOYWViZJWoCz4laxG8KC0ZYs1U1pVpfTxMynG4/EyVzRpiPTi/fip1lXirB59OGTOJlhrE4RNo/d+CpOZtTS+0wXTgut2N94LRyRKmOv0AuOkZky/wRwQPY+dVdoFFbCQfxsEjzrODOIewWencaJqmQGSsjE1rCKOpr7xU+z2JrFuSpk9uBLi2XqGMG2Vsv043MFMrPCYtNStovfNMvUZKtFCG2lmBtmmfpWhQjhE8X1FopMVCXS4Iy4+0zROlylRIOd4m6aeXW12vjz6cFFxRsaWTWiTW6g/XisnMQLrKs+cjY1HBU33V4J96G2pIYjeCgc4bMkxrEhUcZo1gun4pvCB6M5fMB54ZrdoUMK/gIkOoi24oe75gAAAABJRU5ErkJggg=="/> {profile.nunber}
                </li>
              </ul>
            </div>
            <div className="col-md-4 d-flex map-mark">
            <img height='35%' className="mt-4 mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADYUlEQVR4nO2bMWgUQRSGPyNGo+RiTiGoIaIWCnbGRhDT2AgqwWBKESNiJ1iJIthpI0Ybe0uJIcTSXsQohjSJioLRJnpijGJhEmIxe7g592b2zc7eZM388JrcvH/f/+fN7c7OHASsbqzxXUAGlIFe4CSwD+iM/v4JmARGgRHgm5fqckQLcA34DiwZYha4GuX8F9gOPMcsvDZeAV15F9cF3AIq0UUrwD2g2xF/J6q9peKr8RHY4aiWZegBhoAFzcUngMtAh+U1WoCXGv60MQZssKxhGdYDZ4BxYQELwJMoVzIvrwuvo4srVooj1LZ5lqhOkQOGa5ZJ94WXNmaBdqnwapvPG8jHgfMWRemmyDlD7jTQB7RG0QtMGXLOphHdAgxgbvOFyJyeWK7tf2cedf8+BayLuEYM4ssJtbdHn9XLGzaJv4m5zSuo6ZB0e3HRqrsjrteaMX0aDac1eVMmA0xtPoD+S8yFAZsirjnNmFZNDSVN3pzUgHn+bXNJvk1U8VMzRmdAmybvh1SA9CnKpQHvNGN6NTX0a/LeSgVI4dKAYc2YKZJvaVtQT3718oakAqRwacAFw7hp1BdeKYp+g/gl1K26MAaUUEtaF5xLqAehzVXyJgtxjcYccMch322UCVqspA4A9VD0zAHnC6DZRoAUrg0A2AXMZOCbiTisBEiRhwEAB9E/F9SLX8ChLAKkyMsAgOPo3z3UxiJqbZFJQNZ8lwYAXBTwXLKof8UbADCYgmMwNj5p1ZhagBSNMKAJeKTJfwysjY1/kEWAFI0wANSK9GlC7hh/V5MAx6Q6imIAwFbgTSzvPcvfLJWAD1IdRTIAYA/wGfgK7K357L4NZ9EMADgcRRxHULfBVWFAEuJTI5Gz3uZo7WDpJqoLAS42bo06irAazBXBAN8F+EYwwHcBvhEM8F2AbwQDfBfgG8EA3wX4RjDAdwG+4dKAbcAN4ItDTm+QrM27US8cTQeofLwPsOY0JdqeEyy8AfE2z0v4ijRAek6wDbUdNZoipxAG6CLpnGAcHahDkBNC3lTb2EId1olJMQvcBXYKePejzhZm2eZuyLTSkUyiNhw3Sghr0AycAB4Cvx2Jy9WARdRe21Hc/8ymjDoI5eI4vHMDbNo8C/KeIqmR5jhsQEBAQEBAQECh8Qeh1on4iPd1ngAAAABJRU5ErkJggg=="/>
              <p>{profile.address}</p>
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
                      src={profile.background}
                      alt="" 
                    />
                  </div>
                  <div className="col-md-8 home-dat">
                    <div className="detal-jumbo">
                      <h3>{profile.title}</h3>
                      <p>{profile.intro}</p>
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
                                <td>{profile.position}</td>
                              </tr>
                              <tr>
                                <th>Nationality</th>
                                <td>{profile.country}</td>
                              </tr>
                              <tr>
                                <th>Year of birth</th>
                                <td>{profile.birth}</td>
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
                                <td>{profile.age}</td>
                              </tr>
                              <tr>
                                <th>Website</th>
                                <td>{profile.connect.website}</td>
                              </tr>
                              <tr>
                                <th>Languages</th>
                                <td>{profile.language}</td>
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
                  <p>{profile.intro}</p>
                </div>
                <div className="sec-title">
                  <h2>{profile.title}</h2>
                </div>
                <div className="row service-ro no-margin">
                  {profile.profile.works.map((work) => {
                    return (
                      <div
                        key={work.id}
                        className="col-lg-4 col-md-6
                                    singe-servic"
                      >
                        <i className="fab fa-delicious"></i>
                        <h4>{work.name}</h4>
                        <p>{work.content}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className=" tab-pane education-detail fade"
                id="acheive"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div className="sec-title">
                  <h2>{profile.achievement.title}</h2>
                </div>
                {profile.achievement.events.map((event) => {
                  return (
                    <div className="service no-margin row">
                      <div
                        className="col-sm-3 resume-dat
                                    serv-logo"
                      >
                        <h6>{event.year}</h6>
                        <p>{'From '+ event.fromprofile}</p>
                      </div>
                      <div className="col-sm-9 rgbf">
                        <h5>{event.name}</h5>
                        <p>
                          {event.content}
                        </p>
                      </div>
                    </div>
                  );
                })}
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
