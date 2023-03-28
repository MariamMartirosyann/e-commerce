import { useMediaQuery } from "react-responsive";
import { Typography, Button, Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Banner from "../../../images/banner.webp";

const useStyles: any = makeStyles({
  banner: {width: "80%", height: "80%" },
  bannerSmall: {
    marginTop:"80px",
    marginLeft:"15%",
    width: "70%",
    height: "70%",
  },
});

const SectionOne = () => {
  const classes = useStyles();

  const isBigScreen = useMediaQuery({ query: "(min-width: 1400px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1050px)" });
  const isMediumScreen = useMediaQuery({ query: "(min-width: 900px)" });

  return (
    <Grid container spacing={2}>
      <Grid
        item
        lg={6}
        md={6}
        xs={12}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant={isLargeScreen ? "h3" : "h4"}
          component="div"
          width={isBigScreen ? "45%" : "60%"}
          mt={isBigScreen ? "30px" : 0}
        >
          YOUR HOME.
        </Typography>
        <Typography
          variant={isLargeScreen ? "h3" : "h4"}
          component="div"
          width={isBigScreen ? "45%" : "60%"}
        >
          SMARTER.
        </Typography>

        <Typography
          variant="body1"
          component="div"
          width={isBigScreen ? "45%" : "60%"}
          mt={7}
          mb={3}
        >
          Control your home enviroment from the palm of your hand with EZ
        </Typography>

        <Typography
          variant="body1"
          component="div"
          width={isBigScreen ? "45%" : "60%"}
          mb={6}
        >
          <u>Learn More </u>
        </Typography>
        <Button
          variant="contained"
          style={{
            color: "white",
            background: "primary",
            width: `${isBigScreen ? "45%" : "60%"}`,
          }}
        >
          BUY NOW
        </Button>
      </Grid>
      <Grid item lg={6} md={6} xs={12}>
        <img src={Banner} alt="banner" className={isBigScreen? classes.banner : classes.bannerSmall} />
      </Grid>
    </Grid>
  );
};

export default SectionOne;