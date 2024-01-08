import React, { Fragment } from "react";
import Sidebars from "./Sidebar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Dashboard=()=>{

const Sidestyle={
   
    margingTop: '20px',
    padding: '20px'
}
    return(
        <>
        <Fragment>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
       
        <Grid  xs={4} sx={Sidestyle}>
         <Sidebars />
        </Grid>
        <Grid  xs={8}>
          <h1>Dashboard</h1>
        </Grid>
      </Grid>
    </Box>
        </Fragment>
       
       

        </>
    )

}


export default Dashboard;