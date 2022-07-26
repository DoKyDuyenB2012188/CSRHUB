import { useEffect, useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button} from 'reactstrap';
import { NavLink, useLocation,useNavigate  } from 'react-router-dom';
import { useSelector, useDispatch} from "react-redux";
import {SignUp} from '../../redux/userSlice'
function Header(){
    const [isNavOpen, setNavOpen] = useState(false);
    const [path, setPath] = useState("");
    const [isToolOpen, setToolOpen] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user);
    let history = useNavigate();
    window.addEventListener("click", (e) => {
        if(e.target.alt!='Avatar'){
            setToolOpen(false)
        }
    });
    const toggleNav = () => {
        setNavOpen(!isNavOpen);
     }
     const handleClickTool = () =>{
       setToolOpen(!isToolOpen);
     }
     const handleClickOut = () =>{
        dispatch(SignUp(false))
        console.log((user.signIn))
     }
     useEffect (() => {
        setPath(location.pathname)
        if(path == '/signIn' && user.signIn == true){
            history('/home');
        }
      },[location])
    return(
        <Navbar expand="md" className='navbar navbar-expand-lg navbar-light bg-white'>
            <div className="container-fluid header position-relative">
            <NavbarToggler className='' onClick={toggleNav} />
            <NavbarBrand className="" href="/">
                    <NavLink to="/home" style={{textDecoration:'none'}}><img className='logo' src="https://img.icons8.com/external-flat-geotatah/64/000000/external-community-corporate-social-responsibility-flat-flat-geotatah.png" height="70" width="70" />
                        <span className="h3 fw-bold mb-0" style={{color: '#3f75cf'}}>CSR HUB</span>
                    </NavLink>
            </NavbarBrand>
                <div  className='setpot'>
                    <Collapse isOpen={isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className=""></span> Exolore
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className=""></span> Contact
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className=""></span> About
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink className="nav-link" to="">
                                    <span className=""></span> Help
                                </NavLink>
                                </NavItem>
                                <div className={((path == '/signIn')||(user.signIn == true) ? 'd-none' : "")}>
                                    <NavItem>
                                    <NavLink className="nav-link" to="/signIn">
                                        <span className=""></span> Sign in
                                    </NavLink>
                                    </NavItem>
                                </div>
                                <div className={user.signIn == true ? 'd-inline-block' : 'd-none'}>
                                    <NavItem>
                                        <NavLink className="nav-link" to="" onClick={handleClickTool}>
                                            <img className='avatar mr-50' src={user.img} alt="Avatar" width="30" height="30"/>
                                        </NavLink>
                                        <div className={'tool_bar ' + (isToolOpen==true ? 'open':'')}>
                                            <NavLink className="nav-link tool_item" to="/profile">Profile</NavLink>
                                            <NavLink className="nav-link tool_item" to="/post">Post a project</NavLink>
                                            <NavLink onClick={handleClickOut} className="nav-link tool_item" to="/home">Sign up</NavLink>
                                        </div>
                                    </NavItem>
                                </div> 
                        </Nav>
                    </Collapse>
                </div>
            </div> 
        </Navbar>
    )
}

export default Header