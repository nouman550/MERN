import React, { Fragment } from "react";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ShareIcon from '@mui/icons-material/Share';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { logoutUser } from "../actions/userAction";
import { useAlert } from 'react-alert'
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

const UserOptions=({user})=>{

    const alert=useAlert();
    const dispatch=useDispatch();
     const navigate=useNavigate()

   function removeUser(){
   
      dispatch(logoutUser()).then(() => {
       window.location.href="/login"
      });
    
      alert.success("logout Successfully")
     
   }

    function profileLink(){
     navigate("/account")
    }


  const actions = [
  
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <ExitToAppIcon />, name: 'LogOut' ,fun:removeUser},
    { icon: <ShareIcon />, name: 'Share' },
  ];
  

   return(
   <Fragment>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', top: 7, right: 20 }}
        icon={<AccountCircleIcon />}
        direction="down"
         onClick={profileLink}   >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.fun}
          />
        ))}
      </SpeedDial>
     
   </Fragment>
   )
}

export default UserOptions