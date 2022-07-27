import HomePage from './Page/homePageComponent';
import Login from './login_signin/LoginComponent';
import Header from './header&footer/headerComponent';
import Footer from './header&footer/footerComponent';
import Profile from './Page/profileComponent';
import HomeProfile from './Page/homeProfileComponent';
import {BrowserRouter,Routes,Route,Redirect} from "react-router-dom";
function Main(){
    return(
        <div className="App">
        <Header />
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/home" element={<HomePage/>} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/signIn" element={<Login />}/>
                <Route exact path="/show_profile" element={<HomeProfile />}/>
                {/* <Route path="/menu/:dishId" component={} />
                <Route exact path="/contactus" component={} /> */}
            </Routes>
        <Footer />
      </div>
    )
}
export default Main