import {useState, useRef } from 'react'
import { useScript } from './hooks/useSript';
import jwt_deocde from "jwt-decode";
import { initUser } from '../../redux/userSlice';
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom'
function LoginGoogle(){
  const dispatch = useDispatch();
  const googlebuttonref = useRef();
  let navigate  = useNavigate ();
  const onGoogleSignIn = (user) => {
    let userCred = user.credential;
    let payload = jwt_deocde(userCred);
    console.log(payload);
    dispatch(initUser(payload))
    navigate('/home');
  };
  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id: "474174310139-hf711l26r8i8rcsdrtjue4duohi57f03.apps.googleusercontent.com", // here's your Google ID
      callback: onGoogleSignIn,
      auto_select: false,
    });

    window.google.accounts.id.renderButton(googlebuttonref.current, {
      size: "large",type:"icon", shape: "pill"
    });
  });
  return (
    <div className='google-button' ref={googlebuttonref}>
      {/* {!user && <div ref={googlebuttonref}></div>}
      {user && (
        <div>
          <h1>{user.name}</h1>
          <img src={user.picture} alt="profile" />
          <p>{user.email}</p>

          <button
            onClick={() => {
              setuser(false);
            }}
          >
            Logout
          </button>
        </div>
      )} */}
    </div>
  );
}

export default LoginGoogle