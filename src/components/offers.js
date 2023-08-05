import { Link } from "react-router-dom"
const Offers=()=>{
    return(
        <div>
            <Link to='/'><h4 style={{margin:'20vh 5rem',fontSize:'2rem',textDecoration:'underline'}}><i class="fa-solid fa-angle-left"></i>Home</h4></Link>
            <h3 style={{margin:'1vh 5rem',fontSize:'2rem'}}>NO OFFERS AVAILABLE RIGHT NOW</h3>
        </div>
    )
}
export default Offers