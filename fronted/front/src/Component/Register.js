import React, { Fragment,useState,useEffect } from "react";
import {register,clearErrors} from "../actions/userAction";
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

const Register=()=>{ 
   
      
    const alert = useAlert()
    const navigate =  useNavigate();
    const dispatch=useDispatch();

    const {error,loading,isAuthenticated}=useSelector(state=>state.newUser);
    //const [ isLoading,setIsLoading] = useState(true);
    const[registerName,setRegisterName]=useState("");
    const[registerEmail,setRegisterEmail]=useState("");
    const[registerPassword,setRegisterPassword]=useState("");
    
   /* const[user,setUser]=useState({
        name:"",
        email:"",
        password:""
    })

    const{name,email,password}=user

 const [avatar,setAvatar]=useState();
 const[avatarPreview,setAvatarPreview]=useState("/logo192.png");

*/

    const loginSubmit=(e)=>{
        //setIsLoading(true)
        
        e.preventDefault();

       /* const myForm=new FormData();
            myForm.set("name",name)
        myForm.set("email",email)
        myForm.set("password",password)
        //myForm.set("avatar",avatar)
*/

       dispatch(register(registerName,registerEmail,registerPassword))       
            
        
    }

   /* const registerDataChange=(e) =>{
       /* if(e.target.name==="avatar"){
           const reader=new FileReader();
           reader.onload=()=>{
            if(reader.readyState===2){
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
           }
           reader.readAsDataURL(e.target.files[0])
        }
       
       
            setUser({...user,[e.target.name]:e.target.value})
        
    }
    */

    
    useEffect(()=>{
      //  setTimeout(() => setIsLoading(false), 1000)
  


       if(error){
        alert.error(error)
      
        dispatch(clearErrors())
       }
      else if(isAuthenticated){
        alert.success('You Sign up successfully! ')
    
       }
       
     
       },[dispatch,error,navigate,isAuthenticated,alert])


     
   
    

return (
    <Fragment> {loading?<LoadingSpinner/>:(
        <Fragment  >
      

      <div className="register-block" >
           
            <form className="signUpform"  onSubmit={loginSubmit} encType="multipart/form-data">
             
              
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
              <input 
               type="password"
               placeholder="Enter password"
              value={registerPassword}
               onChange={(e)=>setRegisterPassword(e.target.value)}
              />
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
             
             <Button className="btn-input" type="submit"  disabled={loading?true:false} endIcon={<SendIcon className="buton-icon"/>} > Register</Button>
             <p className="below-link-register">Already Registered ?<Link to="/login">Login</Link></p>
            </form>
        </div>
        <div>
          
      

        </div>

        </Fragment>
    )}
        
    </Fragment>

)
}

export default Register