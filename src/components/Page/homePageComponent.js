import projects from "../../shared/projects";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Card from "./CardComponent";
import CardU from "./CardComponentU";
import profiles from "../../shared/profile";
function HomePage() {
  const hostTopic = projects.filter((project) => {
    return project.type == "hot";
  });
  const topics = projects.filter((project) => {
    return project.type != "hot";
  });
  const normalTopic = topics.map((topic) => {
    if (topic.type != "popular") {
      return <Card key={topic.id} topic={topic}></Card>;
    } else {
      return <div></div>;
    }
  });
  const Profiles = profiles.map((profile) => {
    return(
      <CardU key={profile.id} profile={profile}/>
    )
  });
  return (
    <div className="container-fluid p-0">
      <div className="row bg">
        <div className="col-5 col-sm-5 hero h-100">
          <div className="hero_title">
            <h2>Make a Difference</h2>
            <p>
              Use our ratings to find and support nonprofits that align with
              your passions and values
            </p>
          </div>
          <div className="hero_search" id="cover">
            <form method="get" action="">
              <div className="tb">
                <div className="td">
                  <input
                    className="input_search"
                    placeholder="search"
                    type="text"
                    required
                  />
                </div>
                <div className="td" id="s-cover">
                  <button type="submit" className="button_search">
                    <div id="s-circle"></div>
                    <span></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row padi">
        <div className="row title_body">
          <h3>
            <strong>HOT TOPIC</strong>
          </h3>
          <div className="line_body"></div>
        </div>
        <div className="row w-100 p-0">
          <div className="col-6 col-lg-6">
            <NavLink className="item_body nav-link p-0" to="">
              <img className="brightness" src={hostTopic[0].picture}></img>
              <div className="overlay">{hostTopic[0].name}</div>
            </NavLink>
          </div>
          <div className="col-6 col-lg-6 p-0">
            <div className="row">
              <div className="col-6 col-lg-6 dele-pa">
                <NavLink className="item_body nav-link p-0" to="">
                  <img className="brightness" src={hostTopic[1].picture}></img>
                  <div className="overlay">{hostTopic[1].name}</div>
                </NavLink>
              </div>
              <div className="col-6 col-lg-6">
                <NavLink className="item_body nav-link p-0" to="">
                  <img className="brightness" src={hostTopic[2].picture}></img>
                  <div className="overlay">{hostTopic[2].name}</div>
                </NavLink>
              </div>
            </div>
            <div className="add-pa">
              <NavLink className="item_body nav-link p-0" to="">
                <img className="brightness" src={hostTopic[3].picture}></img>
                <div className="overlay">{hostTopic[3].name}</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="row padi">
        <div className="col">
          <div className="row title_body">
            <div className="col-7 col-lg-10">
            <h3>
              <strong>ACTIVITIES</strong>
            </h3>
            </div>
            <div className="col-5 col-lg-2">
            <button className="button-60">More</button>
            </div>
            <div className="sort_body"></div>
            <div className="line_body"></div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-12 p-0">{normalTopic}</div>
          </div>
        </div>
        <div className="col">
          <div className="row title_body">
            <h3>
              <strong>Stay Connect</strong>
            </h3>
            <div className="line_body"></div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3 contact">
              <div className="login-block">
                <h1>Get Latest Updates</h1>
                <input
                  type="text"
                  placeholder="Send youre mail"
                  id="username"
                />
                <button>Submit</button>
              </div>
              <div>
                <img
                  src="./asset/img/learn.jpg"
                  width="90%"
                  className="learn"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row padi">
        <div className="row title_body">
          <div className="col-3 col-sm-3">
            <h3>
              <strong>Charity Houese</strong>
            </h3>
          </div>
          <div className="col-7 col-sm-7 box_search">
            <form
              className="search-container"
              action="//llamaswill.tumblr.com/search"
            >
              <input id="search-box" type="text" className="search-box" name="q" placeholder="search charity house" />
              <label htmlFor="search-box">
                <img className="glyphicon glyphicon-search search-icon" src="./asset/img/icon_search.svg"/>
              </label>
              <input type="submit" id="search-submit" />
            </form>
          </div>
          <div className="col-2 col-sm-2">
          <button className="button-60">More</button>
          </div>
          <div className="line_body"></div>
        </div>
        {Profiles}
      </div>
    </div>
  );
}
export default HomePage;
