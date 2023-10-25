import React, { Fragment } from "react";
import { useSelector } from "react-redux"

import LoadingSpinner from "./Loader";
import "../Component/Profile.css"
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Profile = () => {

  


    const { loading, user } = useSelector(state => state.user);


    return (
        <Fragment> {loading ? <LoadingSpinner /> : (
            <Fragment >


                <div className="user-data" >
                    <h1 className="title-user">Welcome :    {user.name} </h1>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p> Role: {user.role}</p>
                   
                  <Link to="/update/password"> <Button   className="password-reset">Change Password</Button></Link>
                  {
                    user.role==="admin" && <Link to="/Dashboard"> <Button   className="dashboard-sty">Dashboard</Button></Link>
                  }
                  
                </div>


            </Fragment>
        )}

        </Fragment>

    )
}

export default Profile