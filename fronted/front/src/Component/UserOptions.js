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
import store from "../Store";
import { loadUser } from "../actions/userAction";

const UserOptions=({user})=>{

    const alert=useAlert();
    const dispatch=useDispatch();
     const navigate=useNavigate();

   function removeUser(){
   
    dispatch(logoutUser())
    .then(() => {
      alert.success("Logout Successful");
      store.dispatch(loadUser());
      navigate("/login");
    })
    .catch((error) => {
      console.error("Logout failed:", error);
      // Handle the error, e.g., show an error message to the user
    });
  
     
   }

    function profileLink(){
     navigate("/account")
    }

    const handleSave = () => {
      navigate("/save");
  };

  const handleShare = () => {
      navigate("/share");
  };


  const actions = [
  
    { icon: <SaveIcon />, name: 'Save',  fun:handleSave },
    { icon: <ExitToAppIcon />, name: 'LogOut' ,fun:removeUser},
    { icon: <ShareIcon />, name: 'Share', fun:handleShare  },
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