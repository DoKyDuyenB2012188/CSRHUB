import HomePage from './Page/homePageComponent';
import Login from './login_signin/LoginComponent';
import Header from './header&footer/headerComponent';
import Footer from './header&footer/footerComponent';
import Profile from './Page/profileComponent';
import HomeProfile from './Page/homeProfileComponent';
import profiles from '../shared/profile';
import {BrowserRouter,Routes,Route, useParams} from "react-router-dom";
function Main(){
    const ShowProfile = () =>{
        let params = useParams();
        return(
            <HomeProfile profile={profiles.filter((profile) => profile.connectuser === (params.profileId))[0]}/>
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
                <Route exact path=""/>
            </Routes>
        <Footer />
      </div>
    )
}
export default Main