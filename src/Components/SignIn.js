import { useEffect, useState, useRef } from "react"
import Home from './Home'

const SignIn = () => {
    const name=useRef()
    const email=useRef()
    const password=useRef()
    const [showHome,setShowHome]=useState(false)
    const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        if(localSignUp){
            setShowHome(true)
        }
        if(localEmail){
            setShow(true)
        }
    })

    //creation de compte
        const handleClick=()=>{
            if(name.current.value&&email.current.value&&password.current.value)
            {
                localStorage.setItem("name",name.current.value)
                localStorage.setItem("email",email.current.value)
                localStorage.setItem("password",password.current.value)
                localStorage.setItem("signUp",email.current.value)
                alert("Account created successfully!!")
                window.location.reload()
            }
        }

        //connection sur le compte
        const handleSignIn=()=>{
            if(email.current.value===localEmail&&password.current.value===localPassword){
                localStorage.setItem("signUp",email.current.value)
                window.location.reload()
            }else{
                alert("Please Enter valid Credential")
            }
        }

        // supprimer le compte dans le localstorage
        const deleteAccount=()=>{ 
            localStorage.clear()
            window.location.reload()
        }
    return (
        <section id="signIn">
            <div>
            {showHome?<Home />:
            (show?
                <div className="container">
                    <div className="row">
                        <div className="card col-md-5 mx-auto my-5">
                            <div className="head-sign">
                                <div className="ligne d-flex text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="39" viewBox="0 0 6 39" fill="none">
                                    <path d="M3 0L3 39" stroke="#F8D442" strokeWidth="6"/>
                                </svg>
                                    <h1 className="text-center ms-3">CRUD OPERATIONS</h1>
                                </div>
                            </div>
                            <div className="body-sign">
                                <h3 className="text-center mt-5">SIGN IN</h3>
                                <p className="text-center mb-3">Enter your credentials to access your account</p>
                                <form>
                                <h1>Hello {localName}</h1>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" ref={email} id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" ref={password} id="password" placeholder="Enter your password" />
                                    </div>
                                    <button type="submit" className="btn w-100" onClick={handleSignIn}>SIGN IN</button>
                                </form>
                                <h6 className="my-3 text-center">Forgot your password? <a href="/" onClick={deleteAccount} className="delete"><span>Reset Password</span></a></h6>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="container">
                    <div className="row">
                    <div className="card col-md-5 mx-auto my-5">
                        <div className="head-sign">
                            <div className="ligne d-flex text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="39" viewBox="0 0 6 39" fill="none">
                                <path d="M3 0L3 39" stroke="#F8D442" strokeWidth="6"/>
                            </svg>
                                <h1 className="text-center ms-3">CRUD OPERATIONS</h1>
                            </div>
                        </div>
                        <div className="body-sign">
                            <h3 className="text-center mt-5">SIGN UP</h3>
                            <p className="text-center mb-3">Enter your credentials to access your account</p>
                            <form>
                            <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" ref={name} id="name" placeholder="Enter your Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" ref={email} id="email" placeholder="Enter your email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" ref={password} id="password" placeholder="Enter your password" />
                                </div>
                                <button type="submit" className="btn w-100" onClick={handleClick}>SIGN UP</button>
                            </form>
                            <h6 className="my-3 text-center">Already have an account? <a href="/"><span>Sign in</span></a></h6>
                        </div>
                    </div>
                    </div>
                </div>
            )}
            </div>
        </section>
    );
}
 
export default SignIn;