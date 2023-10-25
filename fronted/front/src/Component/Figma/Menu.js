import React from "react";
import { Link} from 'react-router-dom';
import "./Menu.css";
import pic from "../../Component/pictures/figma-logo.png"
import 'react-dropdown/style.css';
import { useSelector } from "react-redux";



function Menu(){

  const {isAuthenticated}=useSelector(state=>state.user)

  return(
    <>
    <nav>
        <ul className="menu-figma">
             
             <li>
             <Link to="/"><img className="pic-top-figma" src={pic} alt="pic"></img></Link> 
             </li>

            <li>
              <Link to="/" > Home </Link>
            </li>
            <li>
               < Link to="/about/contact">
                    About Us
                </Link>
            </li>
            <li><Link to="/printing">Services </Link></li>
            {!isAuthenticated ?<li><Link to="/register">Blogs</Link></li>:
              <li><Link to="/account">Blogs</Link></li>}
            
            {!isAuthenticated ?  <li>< Link  to="/login">FAQ</Link></li>
            :  <li>< Link  to="/account">Login</Link></li> }
           
            <li><Link to="/figma">Contact</Link></li>
            
          

        </ul>
    </nav>
    </>
  )
}

export default Menu;