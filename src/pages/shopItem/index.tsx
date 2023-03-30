import { Grid } from '@mui/material';
import React from 'react'
import { useParams } from "react-router-dom";

const ShopItem = () => {
    const { number} = useParams();
  return (
   
        <Grid container mt={10}>
            <Grid item lg={6}md={6}xs={12}>Itemmm{number}</Grid>
            <Grid item lg={6}md={6}xs={12}></Grid>
        </Grid>
    
  )
}

export default ShopItem