
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import React, { Fragment, useState, useEffect } from "react";
import qr from "../../Component/pictures/qr.png"
import "./DoubleSidedCard.css"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const DoubleSidedCard = ({ data }) => {

    let x = data.option;

    const [currentState, setCurrentState] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {

            if (currentState === false) {
                setCurrentState(true)
            }
            else {
                setCurrentState(false)

            }

        }, 5000)
        return () => clearTimeout(timer)
    }, [currentState])

    const mystyle = {

        backgroundImage: `url(${data.back_image})`,

        width: '67%',
        height: '400px',
        backgroundSize: 'cover'
    };

    //month names
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let monthName = monthNames[data.thisMonth];

    return (
        <>
            <Fragment >

                <div className="double-design-page">

                    <div className="double-design-card">
                        <h1>Your Desinged Card is below</h1>
                    </div>

                    <div className="double-card-part1">

                        <Flippy isFlipped={currentState} flipDirection="horizontal" className='card' >

                            {/* Using if else conditions ..... */}



                            <FrontSide animationDuration="5000" >
                                <div className="double-complete-card">

                                    <div className="double-card-back-image" style={mystyle}>
                                        <img className="double-thumb-print-pic" src={data.thumb_image} alt=""></img>
                                        <img className="double-profile-image" src={data.avatar} alt=""></img>

                                    </div>
                                    <div className="double-card-plate-front" style={{ backgroundColor: x }}>
                                        <Box className="box-grid" sx={{ flexGrow: 1 }}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={10}>

                                                    <div className="plate-inside">
                                                        <p>Name: {data.firstName} {data.lastName}<br></br>Founding Member <br></br>THE KINDNESS NETWORK
                                                            <br></br> Joined {monthName}  2023
                                                            <br></br> Member Id:{data.memberId}
                                                        </p>

                                                    </div>



                                                </Grid>

                                                <Grid item xs={2}>
                                                    <img className="qr" src={qr} alt=""></img>
                                                </Grid>


                                            </Grid>
                                        </Box>
                                    </div>

                                </div>
                            </FrontSide>
                            <BackSide animationDuration="5000" >

                                <div className="double-complete-card">

                                    <div className="double-card-back-image" style={mystyle}>
                                        <img className="double-thumb-print-pic" src={data.thumb_image} alt=""></img>
                                        <img className="double-profile-image" src={data.companyAvatar} alt=""></img>

                                    </div>

                                    <div className="double-card-plate" style={{ backgroundColor: x }}>
                                        <p>Name: {data.companyName} {data.companyLocation}<br></br>Founding Member <br></br>THE KINDNESS NETWORK
                                            <br></br> Product: {data.companyProduct}  </p>

                                    </div>



                                </div>

                            </BackSide>
                        </Flippy>


                    </div>
                </div>
            </Fragment>

        </>

    )
}

export default DoubleSidedCard