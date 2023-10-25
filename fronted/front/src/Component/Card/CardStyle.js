import React, { Fragment,useState } from "react";
import Button from '@mui/material/Button';
import "./CardStyle.css"
import Personal from "./Personal";
import Company from "./Company";
import { Slider } from "@material-ui/core";

const CardStyle=()=>{ 
 
  const [personal,setPersonal]=useState(true);
  const [company,setCompany]=useState(false);
  const [both,setBoth]=useState(false);



  


    
  const compBtnAction=()=>{
       
        setCompany(true)
        setPersonal(false)
        setBoth(false)
    
}

const persBtnAction=()=>{
       
  setCompany(false)
  setPersonal(true)
  setBoth(false)

}

const bothBtnAction=()=>{
       
  setCompany(false)
  setPersonal(false)
  setBoth(true)

}
     
   
    

return (
<>
  <Slider
  aria-label="Temprature"
  defaultValue={30}
  valueLableDisplay="auto"
  step={10}
  marks
  min={10}
  max={110}
  />
  <Slider defaultValue ={30} step={10} marks min ={10} max={110} disabled />
    <Fragment >
      <div className="card-block">

        <p className="select-card">1. Please choose card Style</p>

        <div>

        <Button onClick={persBtnAction}  className="pers-btn" >Personal</Button>
        <Button onClick={compBtnAction} className="comp-btn">Company  </Button>
        <Button onClick={bothBtnAction}  className="both-btn">Both</Button>
        </div>
       
</div>
</Fragment>

     <Fragment>
       {personal && !company &&!both &&<Personal/>

       }
       

       {!personal && company &&!both &&<Company/>

      }
       
        
    </Fragment>


    </>

)
}

export default CardStyle