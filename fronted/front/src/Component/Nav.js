import React from "react";
import { Link} from 'react-router-dom';
import "../Component/nav.css";
import * as Mui from '@material-ui/core';
import pic from "./pictures/logo.png"
import 'react-dropdown/style.css';
import { useSelector } from "react-redux";



function Nav(){

  const {isAuthenticated}=useSelector(state=>state.user)

  return(
    <>
    <nav>
        <ul className="menu">
             
             <li>
             <Link to="/"><img className="pic-top" src={pic} alt="pic"></img></Link> 
             </li>

            <li>
              <Link to="/" > Home </Link>
            </li>
            <li>
               < Link to="/about/contact">
                    About Us
                </Link>
            </li>
            <li><Link to="/printing">Printing </Link></li>
            <li><Link to="/card">Card</Link></li>
            {!isAuthenticated ?<li><Link to="/register">SignUp</Link></li>:
              <li><Link to="/account">SignUp</Link></li>}
            
            {!isAuthenticated ?  <li>< Link  to="/login">Login</Link></li>
            :  <li>< Link  to="/account">Login</Link></li> }
           
            <li><Link to="/figma">Contact Us</Link></li>
             <li><Mui.Button className="button-price">See Pricing</Mui.Button></li>
          

        </ul>
    </nav>
    </>
  )
}

export default Nav;