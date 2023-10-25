import React from "react";
import { Link} from 'react-router-dom';
import "./Footer.css";
import pic from "../../Component/pictures/figma-logo.png"
import 'react-dropdown/style.css';
import { useSelector } from "react-redux";



function Footer(){

  const {isAuthenticated}=useSelector(state=>state.user)

  return(
    <>
    <div className="footer-block">
    <nav>
        <ul className="menu-figma-footer">
             
             <li>
             <Link to="/"><img className="pic-footer-figma" src={pic} alt="pic"></img></Link> 
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
            <li><Link to="/figma">Terms and Conditions</Link></li>
            <li><Link to="/figma">Privacy Policy</Link></li>

        </ul>
    </nav>
    <p className="below-footer-page" >Silk Route. All rights reserved © 2023</p>
    </div>
    </>
  )
}

export default Footer;