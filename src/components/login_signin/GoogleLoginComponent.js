import {useEffect} from 'react'
function GoogleLogin(){
    function handleCallbackResponse(response){
        console.log("Encoded JWT ID token" + response.credential);
    }
    useEffect(()=>{
        /*global google */
        google.accounts.id.initialize({
            client_id: "474174310139-hf711l26r8i8rcsdrtjue4duohi57f03.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("signDiv"),
            {type:"icon"}
        );
       //google.accounts.id.prompt();
    },[])
    return(
        <div id="signDiv"></div>
    )
}

export default GoogleLogin