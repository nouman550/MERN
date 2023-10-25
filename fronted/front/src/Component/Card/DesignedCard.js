
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

import React, { Fragment} from "react";
import "./DesignedCard.css"
const DesignedCard=({data})=>{ 

    let x= data.option;

   

    const mystyle = {
        
        backgroundImage: `url(${data.back_image})`,

        width: '67%',
        height: '400px',
        backgroundSize: 'cover' 
      };

      //month names
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
      let monthName = monthNames[data.thisMonth];


      const handleCaptureClick = async () => {
        const canvas = await html2canvas(document.body);
        const dataURL = canvas.toDataURL('image/gif');
        downloadjs(dataURL, 'download.gif', 'image/gif');


      };


return (
<>
    <Fragment >

        <div className="design-page">
           
           <div className="design-card">
            <h1>Your Desinged Card is below</h1>
           </div>
         
             <div className="card-part1"> 

            <div  className="complete-card">

                <div className="card-back-image" style={mystyle}>
                   <img className="thumb-print-pic" src={data.thumb_image} alt=""></img>
                   <img className="profile-image" src={data.avatar} alt=""></img>
               
                </div>

                <div className="card-plate" style={{backgroundColor:x}}>
                   <p>Name: {data.firstName} {data.lastName}<br></br>Founding Member <br></br>THE KINDNESS NETWORK
                   <br></br> Joined {monthName}  2023</p>
                  
                </div>

          
        
        </div>
        <li>
  <button onClick={handleCaptureClick}> Button</button>
   
  
</li>
        </div>

        
        </div>

        
    </Fragment>

    </>

)
}

export default DesignedCard