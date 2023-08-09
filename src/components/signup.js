import { useState } from "react"
import Footer from "./footer.js"
import Nav from "./nav.js"
import { Link, useNavigate } from "react-router-dom"


const Signup=()=>{
    const [credentials,setCredentials]= useState({name:"",email:"",password:""})
    const navigate=useNavigate()
    const handlevalue=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
    const handlesubmit=async(e)=>{
        e.preventDefault()
        const response=await fetch('http://localhost:5000/api/signup',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
        })
        const json=await response.json()
        if(!json.success){
            alert("enter valid credentials")
        }
        else{
            navigate('/')
        }
    }
    
    return(
        <div>
            <Nav/>
            <div className="signup">
            <div className="signup1">
                <div>
                <div>
                    <h1 className="heading">Name</h1>
                    <input className="input" type="text" name="name" value={credentials.name} onChange={handlevalue}></input>
                </div>
                <div>
                    <h1 className="heading">Email <address></address></h1>
                    <input className="input" type="email" name="email" value={credentials.email} onChange={handlevalue}></input>
                </div>
                <div>
                    <h1 className="heading">Password</h1>
                    <input className="input" type="password" name="password" value={credentials.password} onChange={handlevalue}></input>
                </div>
                <div>
                <button onClick={handlesubmit}>Register</button>
                <Link to='/login'><button>Already a user?</button></Link>
                </div>
                </div>
            </div> 
            </div>
            <Footer/>
        </div>
    )
}
export default Signup