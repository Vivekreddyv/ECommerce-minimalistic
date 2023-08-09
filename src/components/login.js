import { Link, useNavigate } from "react-router-dom"
import Footer from "./footer.js"
import Nav from "./nav.js"
import { useState } from "react"

const Login=()=>{
    const[credentials,setCredentials]=useState({email:"",password:""})
    const navigate=useNavigate()
    const handlevalue=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
    const handlesubmit=async()=>{
        const response=await fetch('http://localhost:5000/api/loginuser',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
        })
        const json=await response.json()
        if(!json.success){
            alert('enter valid credentials')
        }
        if(json.success){
            localStorage.setItem("authtoken",json.authtoken)
            navigate('/')
        }
    }
    return(
        <div>
            <Nav/>
            <div className="login">
            <div>
                <h1>Email</h1>
                <input type="email" name="email" value={credentials.email} onChange={handlevalue}></input>
                <h1>Password</h1>
                <input type="password" name="password" value={credentials.password} onChange={handlevalue}></input>
            </div>
            <div>
                <button onClick={handlesubmit}>Login</button>
                <Link to='/signup'><button>New User?</button></Link>
            </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Login