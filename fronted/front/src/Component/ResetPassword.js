import React, { Fragment, useState, useEffect } from "react";
import { updatePassword, clearErrors } from "../actions/userAction";
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import LoadingSpinner from "./Loader";
import { useAlert } from 'react-alert'
import LockIcon from '@mui/icons-material/Lock';
import LockResetIcon from '@mui/icons-material/LockReset';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./ResetPassword.css"


const ResetPassword = () => {


    const alert = useAlert()

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {error,  loading,updated } = useSelector(state => state.updatePassword);
    
    //const [isLoading, setIsLoading] = useState(true);

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");

    const loginSubmit = (e) => {
        //setIsLoading(true)

        e.preventDefault();
        dispatch(updatePassword(oldPassword,newPassword,confirmPassword))





    }


    useEffect(() => {
        //setTimeout(() => setIsLoading(false), 1000)



        if (error) {

           

                alert.error(error)
           


           dispatch(clearErrors())
        }

      else if(updated )  {
           
            alert.success('Password updated successfully ')
            
        }

    }, [dispatch, error, navigate,alert,updated])






    return (
        <Fragment> {loading ? <LoadingSpinner /> : (
            <Fragment>


                <div className="register-block" >
                
                    <form className="resetPassword" onSubmit={loginSubmit}>

                    <div className="oldPassword">
                  
                   
                    <LockIcon className="box-lock" />
                      
                            <input 

                           
                               className="password"
                                type="password"
                                placeholder="Old Password"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                            />
                         
                        </div>

                        <div className="newPassword">
                        <LockResetIcon/>
                            <input 
                                type="password"
                                placeholder="New password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>

                        <div className="confirmPassword">
                        <LockIcon/>
                            <input  
                                
                                type="password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>

                        <Button className="btn-input-pass"   endIcon={<SendIcon className="buton-icon"/>}  type="submit"  >Update Password</Button>
                    </form>
                </div>
                <div>



                </div>

            </Fragment>
        )}

        </Fragment>

    )
}

export default ResetPassword