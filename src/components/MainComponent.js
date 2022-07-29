import HomePage from './Page/homePageComponent';
import Login from './login_signin/LoginComponent';
import Header from './header&footer/headerComponent';
import Footer from './header&footer/footerComponent';
import Profile from './Page/profileComponent';
import HomeProfile from './Page/homeProfileComponent';
import profiles from '../shared/profile';
import SinglePage from './Page/singlePageComponent';
import PostPage from './Page/postComponent';
import projects from '../shared/projects';
import SearchProject from './Page/searchProjectComponent';
import SearchUser from './Page/searchUserComponent';
import SearchTopicPro from './Page/searchTopicProComponent';
import {BrowserRouter,Routes,Route, useParams} from "react-router-dom";
import SearchChar from './Page/searchCharacterComponent';
function Main(){
    const ShowProfile = () =>{
        let params = useParams();
        return(
            <HomeProfile profile={profiles.filter((profile) => profile.connectuser === (params.profileId))[0]}/>
        )
    }
    const ShowProject = () =>{
        let params = useParams();
        return(
            <SinglePage project={projects.filter((project)=> project.id === params.projectId)[0]}/>
        )
    }
    const SeachTopic = () =>{
        let params = useParams();
        return(
            <SearchTopicPro topic={params.topic_search}/>
        )
    }
    const SeachProfile = () =>{
        let params = useParams();
        return(
            <SearchChar char={params.topic_profile}/>
        )
    }
    return(
        <div className="App">
        <Header />
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/home" element={<HomePage/>} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/signIn" element={<Login />}/>
                <Route exact path="/show_profile/:profileId" element={<ShowProfile/>}/>
                <Route exact path="/post" element={<PostPage/>}/>
                <Route exact path='/single_page/:projectId' element={<ShowProject/>}/>
                <Route exact path='/more_project' element={<SearchProject/>}/>
                <Route exact path='/more_user' element={<SearchUser/>}/>
                <Route exact path='/search_topic/:topic_search' element={<SeachTopic/>}/>
                <Route exact path='/search_profile/:topic_profile' element={<SeachProfile/>}/>
            </Routes>
        <Footer />
      </div>
    )
}
export default Main