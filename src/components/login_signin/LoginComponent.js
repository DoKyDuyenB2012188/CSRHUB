import LoginGoogle from "./ButtonGoogleComponent"
function Login(){
    return(
        <section className="vh-100">
            <div className="container-fluid h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="box-1 d-none d-md-block col-md-9 col-lg-6 col-xl-5">
                        <img src="./asset/img/background.jpg" style={{width:"100%",height:"100%"}} className="" alt=""/>
                    </div>
                    <div className=" box-2 d-flex flex-column h-100 col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <div className="card">

                            <form className="m-4">
                                    <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
                                <div className="form-outline mb-3">
                                    <label className="form-label" htmlFor="form2Example17">Email address</label>
                                    <input type="email" id="form2Example17" className="form-control form-control-sm" />
                                </div>

                                <div className="form-outline mb-3">
                                    <label className="form-label" htmlFor="form2Example27">Password</label>
                                        <input type="password" id="form2Example27" className="form-control form-control-sm" />
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6 d-flex justify-content-center">
                                    
                                        <div className="form-check mb-3 mb-md-0">
                                            <input className="form-check-input" type="checkbox" value="" id="loginCheck"/>
                                            <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                        </div>
                                    </div>

                                    <div class="col-md-6 d-flex justify-content-center">
                                        
                                        <a href="#!">Forgot password?</a>
                                    </div>
                                </div>
                                <div className="pt-1 mb-3 d-flex justify-content-center">
                                    <button className="button-bg btn-sm btn-block" type="button">Login</button>
                                </div>
                                <div className="divider d-flex justify-content-center align-items-center">
                                    <p className="small text-muted">Or continue with</p>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <LoginGoogle/>
                                </div>
                                <p className="m-3" style={{color: '#393f81'}}>Don't have an account? <a href="#!"
                                                style={{color: '#f48225'}}>Register here</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </section>
)}

export default Login