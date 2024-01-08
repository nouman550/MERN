import React, { Fragment,useState,useEffect } from "react";
import {useSelector,useDispatch} from "react-redux"
import {   useNavigate } from "react-router-dom"
import LoadingSpinner from "./Loader";
import "./Signup.css"
import { useAlert } from 'react-alert'
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getSingleUser } from "../actions/userAction";
import "./UpdateUser.css"

const UpdateUserByAdmin=()=>{
    //getting the id of user
    const {id}  = useParams(); 
 
    const alert = useAlert()
    const navigate =  useNavigate();
    const dispatch=useDispatch();

    const {error,loading,user}=useSelector(state=>state.userDetails);
    //const [ isLoading,setIsLoading] = useState(true);
    const[registerName,setRegisterName]=useState("");
    const[registerEmail,setRegisterEmail]=useState("");
    const[userRole,setUserRole]=useState("");
    


    const updateUserRole= async (e)=>{
        //setIsLoading(true)
        
        e.preventDefault();
        const config = { headers: { "Content-Type": "application/json" } };
        try {
            await axios.put(`/api/v1/admin/user/${id}`, {
                name: registerName,
                email: registerEmail,
                role: userRole
            }, config);
            alert.success("User updated successfully");
            // Optionally, after successful update, you might want to re-fetch the user details
            dispatch(getSingleUser(id));
        } catch (error) {
            alert.error(`Failed to update user: ${error}`);
        }
  
      
          
            
        
    }

  

    
    useEffect(()=>{
      //  setTimeout(() => setIsLoading(false), 1000)
  

      dispatch(getSingleUser(id));
  
      
       
     
       },[dispatch,error,navigate,alert,id,loading])

       useEffect(() => {
        // After fetching the user details, update the state with user values
        if (user) {
            setRegisterName(user.name || '');
            setRegisterEmail(user.email || '');
            setUserRole(user.role || '');
        }
    }, [user]);


     
   
    

return (
    <Fragment> {loading?<LoadingSpinner/>:(
        <Fragment  >
      

      <div className="user-block" >
    
           
            <form className="updateUserform"  onSubmit={updateUserRole} encType="multipart/form-data">
          
            <div className="username">
                <PersonIcon/>
              <input 
               type="text"
               placeholder="Enter name"
               value={registerName}
               onChange={(e)=>setRegisterName(e.target.value)}  
              />
             </div>
             
             <div className="loginEmail">
                <EmailIcon/>
              <input 
               type="email"
               placeholder="Enter email"
               value={registerEmail}
               onChange={(e)=>setRegisterEmail(e.target.value)}
              />
             </div>

             <div className="loginPassword">
             
             <LockIcon/>
              <select 
               type="password"
               placeholder="Enter password"
              value={userRole}
               onChange={(e)=>setUserRole(e.target.value)}
               >
                    <option value="user">User</option>
                   <option value="admin">Admin</option>
               </select>
              
             </div>
            
            {
                /*
                 <div id="reregisterImage">
                <img src={avatarPreview} alt="avatar preiew" ></img>
                <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={registerDataChange}
                >
                </input>

             </div>
                */
            }
             
             <Button className="btn-input" type="submit"  disabled={loading?true:false} endIcon={<SendIcon className="buton-icon"/>} >Update User</Button>
             <p className="below-link-register"> Go back to User page ?<Link to="/admin/users">Users</Link></p>
            </form>
        </div>
        <div>
          
      

        </div>

        </Fragment>
    )}
        
    </Fragment>

)


}

export default UpdateUserByAdmin