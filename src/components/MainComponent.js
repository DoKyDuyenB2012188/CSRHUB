import HomePage from './Page/homePageComponent';
import Login from './login_signin/LoginComponent';
import Header from './header&footer/headerComponent';
import Footer from './header&footer/footerComponent';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
function Main(){
    return(
        <div className="App">
        <Header />
            <Routes>
                <Route path="/home" element={<HomePage/>} />
                {/* <Route exact path="/profile" component={() => <Profile />} /> */}
                <Route exact path="/signIn" element={<Login />}/>
                {/* <Route path="/menu/:dishId" component={} />
                <Route exact path="/contactus" component={} /> */}
            </Routes>
        <Footer />
      </div>
    )
}
export default Main