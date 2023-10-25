import React,{ Fragment} from "react";
import { useSelector } from "react-redux";
import { Route,useNavigate,Routes } from "react-router-dom";


const ProtectedRoute=({isAdmin,component:Component,...rest})=>{
const {loading,isAuthenticated,user}=useSelector((state)=>state.user)

const navigate=useNavigate();
return(
    <Fragment>
     {!loading &&(
        <Routes> 
        <Route
        {...rest}
         render={(props)=>{
            if(isAuthenticated===false){
               navigate("/login")
            }

            if(isAdmin && user.role!=="admin"){
                navigate("/login")
            }
           
         }}
        />
        </Routes>

        
     )}
    </Fragment>
)

}

export default ProtectedRoute