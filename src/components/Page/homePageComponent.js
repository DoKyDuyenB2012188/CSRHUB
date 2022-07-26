import projects from "../../shared/projects";
import { NavLink, useLocation,useNavigate  } from 'react-router-dom';
function HomePage(){
    const hostTopic = projects.filter((project)=>{
        return project.type == 'hot';
    })
    const topics = projects.filter((project)=>{
        return project.type != 'hot';
    })
    const normalTopic = topics.map((topic) => {
        if(topic.type != 'popular'){
            return(
               <div key={topic.id} className="normal_body">
                    <div class="blog-card">
                        <div class="meta">
                            <div class="photo" style={{backgroundImage: `url(${topic.picture})`}}></div>
                        </div>
                        <div class="description">
                            <h1>{topic.name}</h1>
                            <p>{topic.title}</p>
                            <p class="read-more">
                                <a href="#">Read More</a>
                            </p>
                        </div>
                    </div>
               </div>
            )
        }
        else{
            return <div></div>
        }
    });
    console.log(normalTopic)
    return(
        <div className="container-fluid p-0">
            <div className="row bg">
                <div className="col-5 col-sm-5 hero h-100">
                    <div className="hero_title">
                        <h2>Make a Difference</h2>
                        <p>Use our ratings to find and support nonprofits that align with your passions and values</p>
                    </div>
                    <div className="hero_search" id="cover">
                        <form method="get" action="">
                            <div class="tb">
                            <div class="td"><input className="input_search" type="text" placeholder="Search" required/></div>
                            <div class="td" id="s-cover">
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
                    <h3><strong>HOT TOPIC</strong></h3>
                    <div className="line_body"></div>
                </div>
                <div className="row w-100 p-0">
                    <div className="col-6 col-lg-6">
                        <NavLink className="item_body nav-link p-0" to="">
                            <img className="brightness" src={hostTopic[0].picture}></img>
                            <div class="overlay">{hostTopic[0].name}</div>
                        </NavLink>
                    </div>
                    <div className="col-6 col-lg-6 p-0">
                        <div className="row">
                            <div className="col-6 col-lg-6 dele-pa">
                                <NavLink className="item_body nav-link p-0" to="">
                                    <img className="brightness" src={hostTopic[1].picture}></img>
                                    <div class="overlay">{hostTopic[1].name}</div>
                                </NavLink>
                            </div>
                            <div className="col-6 col-lg-6">
                                <NavLink className="item_body nav-link p-0" to="">
                                    <img className="brightness" src={hostTopic[2].picture}></img>
                                    <div class="overlay">{hostTopic[2].name}</div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="add-pa">
                            <NavLink className="item_body nav-link p-0" to="">
                                <img className="brightness" src={hostTopic[3].picture}></img>
                                <div class="overlay">{hostTopic[3].name}</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row padi">
               <div className="col">
                    <div className="row title_body">
                        <h3><strong>ACTIVITIES</strong></h3>
                        <div className="sort_body">

                        </div>
                        <div className="line_body"></div>
                    </div>
                    <div className="row">
                        {/* <div className="col-6 col-lg-6 p-0">
                            <img className="img_item" src={topics[0].picture}></img>
                            <h3>Immigration and Refugees</h3>
                            <p>
                            Built and shaped by immigrants and refugees alike, the United States is a nation to admire. Experiences and cultures, 
                            memories passed down by our ancestors meld to become our collective consciousness...
                            </p>
                        </div> */}
                        <div className="col-12 col-lg-12 p-0">
                            {normalTopic}
                        </div>
                    </div>
                </div>
               <div className="col">
                    <div className="row title_body">
                        <h3><strong>Stay Connect</strong></h3>
                        <div className="line_body"></div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 offset-md-3 contact">
                            <div class="login-block">
                                <h1>Get Latest Updates</h1>
                                <input type="text" placeholder="Send youre mail" id="username" />
                                <button>Submit</button>
                            </div>
                        </div>
                        <div>
                            <img src="./asset/img/learn.jpg" width='90%' className="learn"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage