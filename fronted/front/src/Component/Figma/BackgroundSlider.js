import React, { useEffect } from "react";
import "./BackgroundSlider.css"
import imageSlide from "./data";
import { useState } from "react";
import Menu from "./Menu";
import arrowLeft from "../../Component/pictures/arrow-left.png";
import arrowRight from "../../Component/pictures/arrow-right.png";
import cross from "../../Component/pictures/cross.png";
import arrowLeftPink from "../../Component/pictures/arrow-left-pink.png";
import arrowRightPink from "../../Component/pictures/arrow-right-pink.png";
import arrowLeftBlue from "../../Component/pictures/arrow-left-blue.png";
import arrowRightBlue from "../../Component/pictures/arrow-right-blue.png";
import arrowLeftyellow from "../../Component/pictures/arrow-left-yellow.png";
import arrowRightYellow from "../../Component/pictures/arrow-right-yllow.png";
const BackgroundSlider = () => {


    const [currentState, setCurrentState] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {

            if (currentState === 3) {
                setCurrentState(0)
            }
            else {
                setCurrentState(currentState + 1)

            }

        }, 5000)
        return () => clearTimeout(timer)
    }, [currentState])

    const bgImageStyle = {
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        height: '100%',
    }


    const goToNext = (currentState) => {
        setCurrentState(currentState)
    }



    const goToPrevious = (currentState) => {
        if (currentState === 0) {
            setCurrentState(3)
        }
        else {
            setCurrentState(currentState - 1)
        }
    }

    const goToNextSlide=(currentState)=>{
        if (currentState === 3) {
            setCurrentState(0)
        }
        else {
            setCurrentState(currentState+1)
        }
    }


    return (
        <>
        <div className="countiner-style" style={bgImageStyle}>
            <Menu />

            <div className="description">
                <div>
                   
                {(() => {
        if (currentState===0) {
          return (
            <div>
              <h1 className="slide1-text">
              Immigration <br></br>
              Tailored <br></br>
                to You
                
            </h1>
            </div>
           
          )
        } else if (currentState===1) {
          return (
            <div>
                <h1 className="slide2-text">
                    Immigrating <br></br>
                    is a<br></br> 
                    scary<span><img src={cross} alt=""></img></span> <span>luxury</span> <br></br>
                    experience
                 </h1>
            </div>
          )
        } else if(currentState===2) {
          return (
            <div>
                <h1 className="slide3-text">We specialize in new beginnings</h1>
            </div>
          )
        }
        else if(currentState===3) {
            return(
            <div>
                <h1 className="slide4-text">A Red Carpet Experience for<br></br>
                 Anyone Seeking<br></br> 
                 Residence in Europe</h1>
            </div>
            )
        }
      })()}

                </div>

                <div className="caraousel-boult">
                          
                {(() => {
        if (currentState===0) {
          return (
            <div>
            <img className="arrow-left" src={arrowLeft} alt="" onClick={() => goToPrevious(currentState)}></img>
            </div>
           
          )
        } else if (currentState===1) {
          return (
            <div>
                <img className="arrow-left" src={arrowLeftPink} alt="" onClick={() => goToPrevious(currentState)}></img>
            </div>
          )
        } else if(currentState===2) {
          return (
            <div>
                 <img className="arrow-left" src={arrowLeftyellow} alt="" onClick={() => goToPrevious(currentState)}></img>
            </div>
          )
        }
        else if(currentState===3) {
            return(
            <div>
                 <img className="arrow-left" src={arrowLeftBlue} alt="" onClick={() => goToPrevious(currentState)}></img>
            </div>
            )
        }
      })()}

                   
                    {
                        imageSlide.map((imageSlide, currentState) => (
                            <span key={currentState} onClick={() => goToNext(currentState)}> </span>
                        ))
                    }

                    

                    {(() => {
        if (currentState===0) {
          return (
            <div>
            <img className="arrow-right" src={arrowRight} alt="" onClick={() => goToNextSlide(currentState)}></img>
            </div>
           
          )
        } else if (currentState===1) {
          return (
            <div>
               <img className="arrow-right" src={arrowRightPink} alt="" onClick={() => goToNextSlide(currentState)}></img>
            </div>
          )
        } else if(currentState===2) {
          return (
            <div>
               <img className="arrow-right" src={arrowRightYellow} alt="" onClick={() => goToNextSlide(currentState)}></img>
            </div>
          )
        }
        else if(currentState===3) {
            return(
            <div>
                 <img className="arrow-right" src={arrowRightBlue} alt="" onClick={() => goToNextSlide(currentState)}></img>
            </div>
            )
        }
      })()}


                </div>

            </div>




        </div>
       
        </>
    )
}

export default BackgroundSlider