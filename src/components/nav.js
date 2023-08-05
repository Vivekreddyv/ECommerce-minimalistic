import { Link } from 'react-router-dom'
import logo from '../utils/logo.png'
import Cart from './cart'
const Nav =()=>{
    return(
        <div className='nav'>
            <Link to='/'>
            <div>
                <img className='logo' src={logo} alt=""></img>
            </div>
            </Link>
            <div>
                <ul className='navlist'>
                    <Link to='/categories/all'><li className='navli'>CATEGORIES</li></Link>
                    <Link to='/offers'><li className='navli'>OFFERS</li></Link>
                    <li style={{listStyle:'none'}}><Cart/></li>
                </ul>
            </div>
            
        </div>
    )
}
export default Nav