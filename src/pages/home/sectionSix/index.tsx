import LastBanner from "../../../images/lastBanner.webp";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Button, Grid} from "@mui/material";


const useStyles: any = makeStyles({
    btn: {
      background: "primary",
      color: "white",
      width: "45%",
    },
   
    lastSection: {
      position: "relative",
    },
    lastSectiontext: {
      position: "absolute",
      top: "20%",
      left: "12%",
      width: "40%",
    },
  });

const SectionSix = () => {

    const classes = useStyles();

  return (
    <Grid container className={classes.lastSection}>
        <img src={LastBanner} alt="last banner" width="100%" />
        <Box className={classes.lastSectiontext}>
          <Typography variant="h3" component="div" width="45%">
            LIFE IS EZ
          </Typography>
          <Typography variant="body1" component="div" width="48%" mt={7} mb={7}>
            Your home is well prepared for your return, perfectly set to
            whatever makes you most comfortable
          </Typography>
          <Button variant="contained" className={classes.btn}>
            BUY NOW
          </Button>
        </Box>
      </Grid>
  )
}

export default SectionSix