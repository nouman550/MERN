import React from "react";
import BackgroundSlider from "./BackgroundSlider";
import Footer from "./Footer";
import "./FirstPage.css"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import downArrow from "../../Component/pictures/down-arrow.png"
import upArrow from "../../Component/pictures/arrow-up.png"
const FirstPage = () => {


    return (
        <div>
            <BackgroundSlider />
               
               <div className="unlock-block">
                 <h1>Thinking of starting anew in the EU?</h1>
                 <Box className="box-grid" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <p className="silk-route">
       <span>  Silk Route is here to help. We’re</span>  confident in saying we’re one of the<br></br>
           best residency programs in Europe, and here’s why. We create<br></br>
            companies tailored to each individual in our care–businesses that<br></br> 
            establish residency in the European Union and ensure long term <br></br>
            success. But the genius of our business model is that we make this<br></br>
             process a luxury experience for you<span> (full details available on our<br></br> services page).</span>


          </p>
        </Grid>
        <Grid item xs={6}>
         <img className="down-arrow" src={downArrow} alt=""></img>
        </Grid>
        <Grid item xs={6}>
        <img className="up-arrow" src={upArrow} alt=""></img>
        </Grid>
        <Grid item xs={6}>
          
          <p className="experts">
          Our team of experts know the immigration process inside and out.<br></br> 
          Their objective is to take the fear out of the unknown because let’s <br></br>
           be honest; uprooting your life to start over in a new country is<br></br> 
           daunting to say the least. Trusting Silk Route eliminates the anxiety,<br></br>
            confusion, and uncertainty of immigration so all that’s left for you to<br></br>
             think about is the excitement of new beginnings.
          </p>
        </Grid>
      </Grid>
    </Box>

    <h2>Are you ready to unlock the possibilities of a new life in the EU? 
</h2>
<h3>Click here to begin your journey</h3>
               </div>

            <div className="company-bio">
                <h1>
                    Company Bio
                </h1>
                <p>
                    Silk Route is an immigration consultancy firm that specializes in helping individuals gain permanent residency in the European Union via<br></br>
                    business development. We pride ourselves on being one of the best residency programs in Europe, and that begins with knowing our clients<br></br>
                    through and through. Taking into account their educational background, work experience, and areas of expertise, we design and plant companies<br></br>
                    in Latvia that establish EU residency, all while ensuring control of the company stays in the client’s hands. We find great satisfaction in providing<br></br>
                    our customers with the highest quality of support and care from the earliest stages of the process to when they finally settle into their new<br></br>
                    homes. Our team of experienced immigration lawyers and board of advisors are experts in their respective fields, and because they understand<br></br>
                    the migration process inside and out, they know how to take the fear out of the unknown. With headquarters located in the Netherlands, and<br></br>
                    branch offices in Riga and Delhi, Silk Route aims to advise, assist, and accompany our clients throughout the entire migration process.
                </p>
            </div>
            <Footer />
        </div>
    )


}

export default FirstPage