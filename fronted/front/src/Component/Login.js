import React, { Fragment, useState, useEffect } from "react";
import { login, clearErrors } from "../actions/userAction";
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import LoadingSpinner from "./Loader";
import { useAlert } from 'react-alert'
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';

import "./Login.css"


const SignUp = () => {


    const alert = useAlert()

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {error,  loading, isAuthenticated } = useSelector(state => state.user);
    
    //const [isLoading, setIsLoading] = useState(true);

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const loginSubmit = (e) => {
        

        e.preventDefault();
        dispatch(login(loginEmail, loginPassword))





    }


    useEffect(() => {
        //setTimeout(() => setIsLoading(false), 1000)



        if (error) {

            if(error.length>=200){
                ///alert.error("failure")
            }
            else{

                alert.error(error)
            }


           dispatch(clearErrors())
        }

      else if (isAuthenticated) {
           
            alert.success('You are logged in successfully! ')
            navigate('/account')
        }

    }, [dispatch, error, isAuthenticated, navigate,alert])






    return (
        <Fragment> {loading ? <LoadingSpinner /> : (
            <Fragment>


                <div className="register-block">
                    
                    <form className="loginform" onSubmit={loginSubmit}>

                        <div className="user-email">
                            <EmailIcon/>
                            <input 
                                type="email"
                                placeholder="Enter email"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                            />
                        </div>

                        <div className="user-Password">
                            <LockIcon/>
                            <input 
                                type="password"
                                placeholder="Enter password"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                            />
                        </div>

                        <Button className="btn-input" type="submit"  endIcon={<SendIcon className="buton-icon"/>}   > Login</Button>
                        <p className="below-link">New to website ?<Link to="/register">Register</Link></p>
                    </form>
                </div>
                

            </Fragment>
        )}

        </Fragment>

    )
}

export default SignUp