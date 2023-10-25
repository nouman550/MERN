import React, { Fragment, useState } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
//importing background pictures
import pic1 from "../../Component/pictures/glitter-purple.gif";
import pic2 from "../../Component/pictures/glowing-sparkle.gif";
import pic3 from "../../Component/pictures/sparkle-rainbow.gif";
import pic4 from "../../Component/pictures/love-sparkle.gif";
import pic5 from "../../Component/pictures/sparkle-sparkles.gif";
import pic6 from "../../Component/pictures/sparkle-wallpaper.gif";
import pic7 from "../../Component/pictures/sparkling-heart.gif";

//importing thumprint images...
import thumb1 from "../../Component/pictures/saphire.jpg"
import thumb2 from "../../Component/pictures/crystal-thumb.png"
import thumb3 from "../../Component/pictures/silver.jpg"
import thumb4 from "../../Component/pictures/black-opal.jpg"
import thumb5 from "../../Component/pictures/fire-opal.jpg"
import thumb6 from "../../Component/pictures/white-opal.jpg"
import thumb7 from "../../Component/pictures/new-pic.png"

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import "./Personal.css"
import DesignedCard from "./DesignedCard";

const Personal = () => {


    const [visibleForm, setVisibleForm] = useState(true)
     

    var back_pic = "";

    var thumb_pic = "";



    //current month..
    var today = new Date(),
 
    curMonth = today.getMonth();
 



    //checkbox event handle  for background images..
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);
    const [isChecked5, setIsChecked5] = useState(false);
    const [isChecked6, setIsChecked6] = useState(false);
    const [isChecked7, setIsChecked7] = useState(false);


    //checkbox event handle  for  thumbprint images
    const [isChecked8, setIsChecked8] = useState(false);
    const [isChecked9, setIsChecked9] = useState(false);
    const [isChecked10, setIsChecked10] = useState(false);
    const [isChecked11, setIsChecked11] = useState(false);
    const [isChecked12, setIsChecked12] = useState(false);
    const [isChecked13, setIsChecked13] = useState(false);
    const [isChecked14, setIsChecked14] = useState(false);


    //handlechange for background images

    const handleOnChange1 = () => {
        setIsChecked1(!isChecked1);
        setIsChecked2(false);
        setIsChecked3(false);
        setIsChecked4(false);
        setIsChecked5(false);
        setIsChecked6(false);
        setIsChecked7(false);

        //setting this pic as background on selecting 
        back_pic = pic1;

        setFormValues({ ...formValues, back_image: back_pic });
    };

    const handleOnChange2 = () => {
        setIsChecked2(!isChecked2);
        setIsChecked1(false);
        setIsChecked3(false);
        setIsChecked4(false);
        setIsChecked5(false);
        setIsChecked6(false);
        setIsChecked7(false);

        back_pic = pic2;

        setFormValues({ ...formValues, back_image: back_pic });


    };

    const handleOnChange3 = () => {
        setIsChecked3(!isChecked3);
        setIsChecked1(false);
        setIsChecked2(false);
        setIsChecked4(false);
        setIsChecked5(false);
        setIsChecked6(false);
        setIsChecked7(false);

        //setting this pic as background on selecting 

        back_pic = pic3;
        setFormValues({ ...formValues, back_image: back_pic });

    };

    const handleOnChange4 = () => {
        setIsChecked4(!isChecked4);
        setIsChecked1(false);
        setIsChecked2(false);
        setIsChecked3(false);
        setIsChecked5(false);
        setIsChecked6(false);
        setIsChecked7(false);

        //setting this pic as background on selecting 

        back_pic = pic4
        setFormValues({ ...formValues, back_image: back_pic });

    };

    const handleOnChange5 = () => {
        setIsChecked5(!isChecked5);
        setIsChecked1(false);
        setIsChecked2(false);
        setIsChecked3(false);
        setIsChecked4(false);
        setIsChecked6(false);
        setIsChecked7(false);

        //setting this pic as background on selecting 
        back_pic = pic5;
        setFormValues({ ...formValues, back_image: back_pic });
    };

    const handleOnChange6 = () => {
        setIsChecked6(!isChecked6);
        setIsChecked1(false);
        setIsChecked2(false);
        setIsChecked3(false);
        setIsChecked4(false);
        setIsChecked5(false);
        setIsChecked7(false);

        //setting this pic as background on selecting 
        back_pic = pic6;
        setFormValues({ ...formValues, back_image: back_pic });
    };

    const handleOnChange7 = () => {
        setIsChecked7(!isChecked7);
        setIsChecked1(false);
        setIsChecked2(false);
        setIsChecked3(false);
        setIsChecked4(false);
        setIsChecked5(false);
        setIsChecked6(false);

        //setting this pic as background on selecting 
        back_pic = pic7;
        setFormValues({ ...formValues, back_image: back_pic });

    };

    //handlechange for thumbprint image

    const handleOnChange8 = () => {
        setIsChecked8(!isChecked8);
        setIsChecked9(false);
        setIsChecked10(false);
        setIsChecked11(false);
        setIsChecked12(false);
        setIsChecked13(false);
        setIsChecked14(false);

        thumb_pic = thumb1;
        setFormValues({ ...formValues, thumb_image: thumb_pic });
    };

    const handleOnChange9 = () => {
        setIsChecked9(!isChecked9);
        setIsChecked8(false);
        setIsChecked10(false);
        setIsChecked11(false);
        setIsChecked12(false);
        setIsChecked13(false);
        setIsChecked14(false);

        thumb_pic = thumb2;
        setFormValues({ ...formValues, thumb_image: thumb_pic });

    };

    const handleOnChange10 = () => {
        setIsChecked10(!isChecked10);
        setIsChecked8(false);
        setIsChecked9(false);
        setIsChecked11(false);
        setIsChecked12(false);
        setIsChecked13(false);
        setIsChecked14(false);

        thumb_pic = thumb3;
        setFormValues({ ...formValues, thumb_image: thumb_pic });
    };

    const handleOnChange11 = () => {
        setIsChecked11(!isChecked11);
        setIsChecked8(false);
        setIsChecked9(false);
        setIsChecked10(false);
        setIsChecked12(false);
        setIsChecked13(false);
        setIsChecked14(false);

        thumb_pic = thumb4;
        setFormValues({ ...formValues, thumb_image: thumb_pic });
    };

    const handleOnChange12 = () => {
        setIsChecked12(!isChecked12);
        setIsChecked8(false);
        setIsChecked9(false);
        setIsChecked10(false);
        setIsChecked11(false);
        setIsChecked13(false);
        setIsChecked14(false);

        thumb_pic = thumb5;
        setFormValues({ ...formValues, thumb_image: thumb_pic });
    };

    const handleOnChange13 = () => {
        setIsChecked13(!isChecked13);
        setIsChecked8(false);
        setIsChecked9(false);
        setIsChecked10(false);
        setIsChecked11(false);
        setIsChecked12(false);
        setIsChecked14(false);

        thumb_pic = thumb6;
        setFormValues({ ...formValues, thumb_image: thumb_pic });
    };

    const handleOnChange14 = () => {
        setIsChecked14(!isChecked14);
        setIsChecked8(false);
        setIsChecked9(false);
        setIsChecked10(false);
        setIsChecked11(false);
        setIsChecked12(false);
        setIsChecked13(false);

        thumb_pic = thumb7;
        setFormValues({ ...formValues, thumb_image: thumb_pic });

    };



    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        userProfile: "",
        option: "",
        back_image: back_pic,
        thumb_image: thumb_pic,
        avatar:"",
        thisMonth:curMonth



    });



    const handleChange = (event) => {
        if (event.target.name === "avatar") {
          const reader=new FileReader();
          reader.onload=()=>{
            if(reader.readyState===2){
                setFormValues({ ...formValues, avatar: reader.result });
            }
          }

          reader.readAsDataURL(event.target.files[0])
        }

    
        else {

            const { name, value } = event.target;
            console.log(name, value);

            setFormValues({ ...formValues, [name]: value });
        }

    };
    //using useEffect for test purpose

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        setVisibleForm(false)
    };





    return (

        <Fragment>

            {visibleForm ? (<div className="personal-div" >
            <p > Single Sided Card...... Personal Card</p>

                <p >2. Please select background image for the Card</p>

                <form encType="multipart/form-data" onSubmit={handleSubmit} >

                    <Box className="personal-background" sx={{ width: '100%' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={3}>
                                <div className="check-first">
                                    <input
                                        type="checkbox"
                                        id="topping"
                                        name="topping"
                                        value={pic1}
                                        checked={isChecked1}
                                        onChange={handleOnChange1}
                                    />
                                    <img src={pic1} alt=""></img>
                                </div>
                            </Grid>
                            <Grid xs={3}>
                                <div className="check-second">
                                    <input
                                        type="checkbox"
                                        id="topping"
                                        name="topping"
                                        value={pic2}
                                        checked={isChecked2}
                                        onChange={handleOnChange2}
                                    />
                                    <img src={pic2} alt=""></img>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div className="check-third">
                                    <input
                                        type="checkbox"
                                        id="topping"
                                        name="topping"
                                        value={pic3}
                                        checked={isChecked3}
                                        onChange={handleOnChange3}
                                    />
                                    <img src={pic3} alt=""></img>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div className="check-fourth">
                                    <input
                                        type="checkbox"
                                        id="topping"
                                        name="topping"
                                        value={pic4}
                                        checked={isChecked4}
                                        onChange={handleOnChange4}
                                    />
                                    <img src={pic4} alt=""></img>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>




                    <Box className="personal-background" sx={{ width: '100%' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={3}>
                                <div className="check-fifth">
                                    <input
                                        type="checkbox"
                                        id="topping"
                                        name="topping"
                                        value={pic5}
                                        checked={isChecked5}
                                        onChange={handleOnChange5}
                                    />
                                    <img src={pic5} alt=""></img>
                                </div>
                            </Grid>
                            <Grid xs={3}>
                                <div className="check-sixth">
                                    <input
                                        type="checkbox"
                                        id="topping"
                                        name="topping"
                                        value={pic6}
                                        checked={isChecked6}
                                        onChange={handleOnChange6}
                                    />
                                    <img src={pic6} alt=""></img>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div className="check-seventh">
                                    <input
                                        type="checkbox"
                                        id="topping"
                                        name="topping"
                                        value={pic7}
                                        checked={isChecked7}
                                        onChange={handleOnChange7}
                                    />
                                    <img src={pic7} alt=""></img>
                                </div>
                            </Grid>

                        </Grid>
                    </Box>


                    {/*  THumb print images from here on */}


                    <div className="thumbprint-div">
                        <p>3.  Please select Thumbprint from below images </p>
                    </div>

                    <Box className="thumb-background" sx={{ width: '100%' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={3}>
                                <div className="check-first">
                                    <input
                                        type="checkbox"
                                        id="topping"
                                        name="topping"
                                        value={thumb1}
                                        checked={isChecked8}
                                        onChange={handleOnChange8}
                                    />
                                    <img src={thumb1} alt=""></img>
                                </div>
                            </Grid>
                            <Grid xs={3}>
                                <div className="check-second">
                                    <input
                                        type="checkbox"
                                        id="topping"
                                        name="topping"
                                        value={thumb2}
                                        checked={isChecked9}
                                        onChange={handleOnChange9}
                                    />
                                    <img src={thumb2} alt=""></img>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div className="check-third">
                                    <input
                                        type="checkbox"
                                        id="topping"
                                        name="topping"
                                        value={thumb3}
                                        checked={isChecked10}
                                        onChange={handleOnChange10}
                                    />
                                    <img src={thumb3} alt=""></img>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div className="check-fourth">
                                    <input
                                        type="checkbox"
                                        id="topping"
                                        name="topping"
                                        value={thumb4}
                                        checked={isChecked11}
                                        onChange={handleOnChange11}
                                    />
                                    <img src={thumb4} alt=""></img>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>


                    <Box className="thumb-background" sx={{ width: '100%' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid xs={3}>
                                <div className="check-fifth">
                                    <input
                                        type="checkbox"
                                        id="topping"
                                        name="topping"
                                        value={thumb5}
                                        checked={isChecked12}
                                        onChange={handleOnChange12}
                                    />
                                    <img src={thumb5} alt=""></img>
                                </div>
                            </Grid>
                            <Grid xs={3}>
                                <div className="check-sixth">
                                    <input
                                        type="checkbox"
                                        id="topping"
                                        name="topping"
                                        value={thumb6}
                                        checked={isChecked13}
                                        onChange={handleOnChange13}
                                    />
                                    <img src={thumb6} alt=""></img>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div className="check-seventh">
                                    <input
                                        type="checkbox"
                                        id="topping"
                                        name="topping"
                                        value={thumb7}
                                        checked={isChecked14}
                                        onChange={handleOnChange14}
                                    />
                                    <img src={thumb7} alt=""></img>
                                </div>
                            </Grid>

                        </Grid>
                    </Box>


                    <div className="text-plate">
                        <p>4. Please choose background color of text plate</p>

                        <select name="option" onChange={handleChange}>
                            <option value="" >Select text plate color...</option>
                            <option value="#ffd700">Gold</option>
                            <option value="#C0C0C0">Silver</option>
                            <option value="black">Black</option>
                            <option value="white">White</option>
                        </select>
                    </div>


                    <div className="first-name">
                        <PersonIcon />
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            value={formValues.firstName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="last-name">
                        <PersonIcon />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            value={formValues.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <input
                        className="user-profile-div"
                        type="file"
                        name="avatar"
                        accept="image/*"
                        onChange={handleChange}
                    ></input>

                    <Button className="btn-input-card" type="submit" endIcon={<SendIcon className="buton-icon" />}   > Create Card</Button>
                </form>




            </div>
            ) : (
                <DesignedCard data={formValues} />
            )}


        </Fragment>


    )
}

export default Personal

