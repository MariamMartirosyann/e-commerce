import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import { makeStyles } from "@mui/styles";

const useStyles: any = makeStyles({
  btn: {
    marginTop: "10%",
    background: "primary",
    color: "white",
    width: "45%",
  },
  subscrption: {
    display: "flex",
    flexDirection: "column",
  },
  lastPart:{
    width:"60%",
    display:"flex",
    flexDirection:"row",
    margin:"auto",
    color:"grey"
  },
  text:{
    fontSize:"12px",
  }
});
function Footer() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2} m="2% 7%">
        <Grid item lg={4} md={3} xs={12}>
          <Typography variant="h6" component="div">
            ABOUT US
          </Typography>
          <Typography variant="body1" component="div" width="60%" mt={3} mb={3}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere.
          </Typography>
        </Grid>
        <Grid item lg={4} md={3} xs={12}>
          <Typography variant="h6" component="div">
            NEW RELEASES
          </Typography>
          <Typography variant="body1" component="div" width="60%" mt={3} mb={3}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </Typography>
        </Grid>
        <Grid
          item
          lg={4}
          md={3}
          xs={12}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h6" component="div">
            Subscrption
          </Typography>

          <Box sx={{ width: "45%" }} mt={3} mb={2}>
            <TextField
              label="Email"
              helperText="Enter Your Email Here *"
              variant="outlined"
              color="primary"
              size="small"
            />
          </Box>
          <Button
            variant="contained"
            className={classes.btn}
            style={{
              background: "#44DBBD",
              color: "white",
              width: "45%",
            }}
          >
            Subscription Now
          </Button>
        </Grid>
        <Box className={classes.lastPart}>
          <Box m={1.5}>< FacebookRoundedIcon fontSize="small"/></Box>
          <Box m={1.5}><SendRoundedIcon fontSize="small"/></Box>
          <Box m={1.5}><SubscriptionsRoundedIcon fontSize="small"/></Box>
          <Box  m={1.5} className={classes.text}>
           © 2035 BY EZ ELECTRONICS. Powered and secured by Wix
        </Box>
        </Box>
        
      </Grid>
    </>
  );
}

export default Footer;
