import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LensIcon from "@mui/icons-material/Lens";
import Navbar from "../../shared/navbar";
import Banner from "../../images/banner.webp";
import BannerSecond from "../../images/paralax.png";
import ParalaxSecond from "../../images/secondParalax.png";
import AnimatedImg from "../../images/3.webp";
import LastBanner from "../../images/lastBanner.webp";
import { makeStyles } from "@mui/styles";
import { sectionTree } from "./sections";
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";

const useStyles: any = makeStyles({
  paralax: {
    position: "relative",
    backgroundImage: `url(${BannerSecond})`,
    width: "100%",
    height: "120vh",
    boxSizing: "border-box",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingBottom: "20px",
  },
  paralaxText: {
    width: "40%",
    marginLeft: "20%",
    position: "absolute",
    right: 0,
    top: "10%",
  },
  paralaxPoints: {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "row",
  },
  arrow: {
    margin: "10px",
  },
  sectionTree: {
    width: "70%",
  },
  iconItem: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  sectionTreeIcon: {
    border: "2px solid #44DBBD",
    borderRadius: "14px",
    padding: "10px",
    width: "70px",
    margin: " 15px auto",
  },
  btn: {
    background: "primary",
    color: "white",
    width: "45%",
  },
  paralaxSecond: {
    position: "relative",
    backgroundImage: `url(${ParalaxSecond})`,
    width: "100%",
    height: "300vh",
    boxSizing: "border-box",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingBottom: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    width: "100%",
    height: "0.7px",
    bgcolor: "black",
    margin: "31% 0",
  },
  row: {
    display: "flex",
    flexDirection: "row",
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

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container spacing={2}>
        <Grid
          item
          lg={6}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          md={6}
        >
          <Typography variant="h3" component="div" width="45%" mt={10}>
            YOUR HOME.
          </Typography>
          <Typography variant="h3" component="div" width="45%">
            SMARTER.
          </Typography>

          <Typography variant="body1" component="div" width="45%" mt={7} mb={3}>
            Control your home enviroment from the palm of your hand with EZ
          </Typography>

          <Typography variant="body1" component="div" width="45%" mb={6}>
            <u>Learn More </u>
          </Typography>
          <Button
            variant="contained"
            className={classes.btn}
          >
            BUY NOW
          </Button>
        </Grid>
        <Grid item lg={6} md={6}>
          <img
            src={Banner}
            alt="banner"
            style={{ width: "80%", height: "80%" }}
          />
        </Grid>
      </Grid>
      <Box className={classes.paralax}>
        <Box className={classes.paralaxText}>
          <Typography variant="h3" component="div" mt={10}>
            HOW
          </Typography>
          <Typography variant="h3" component="div">
            IT WORKS
          </Typography>
          <Typography variant="body1" component="div" width="45%" mt={3} mb={3}>
            Synchronising your home devices and managing them from your
            smartphone has never been so EZ
          </Typography>
          <Box className={classes.paralaxPoints}>
            <span className={classes.arrow}>
              <ArrowForwardIosIcon fontSize="small" color="primary" />
            </span>
            <Typography variant="body1" component="div" width="35%">
              Download the EZ app to your smart phone
            </Typography>
          </Box>

          <Box className={classes.paralaxPoints}>
            <span className={classes.arrow}>
              <ArrowForwardIosIcon fontSize="small" color="primary" />
            </span>
            <Typography variant="body1" component="div" width="35%">
              Connect EZ to your Internet router 
            </Typography>
          </Box>

          <Box className={classes.paralaxPoints}>
            <span className={classes.arrow}>
              <ArrowForwardIosIcon fontSize="small" color="primary" />
            </span>
            <Typography variant="body1" component="div" width="35%">
              ​Add your electronic devices and control your home enviroment from
              anywhere
            </Typography>
          </Box>
        </Box>
      </Box>
      <Grid
        container
        className={classes.sectionTree}
        width="60%"
        spacing={5}
        m=" 80px auto"
      >
        {sectionTree.map((i) => (
          <Grid
            item
            key={i.id}
            lg={4}
            md={6}
            xs={12}
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Box className={classes.sectionTreeIcon}>
              {<i.icon color="primary" />}
            </Box>
            <Typography mt={2} mb={2}>
              {i.title}
            </Typography>
            <Typography component="div" width="70%" m="auto">
              {i.text}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Box className={classes.paralaxSecond}>
        <Typography variant="h3" component="div" color="white">
          FINE CURVES
        </Typography>
      </Box>
      {/*  <Box>
        <Typography variant="h3" component="div" mt={10} ml={25}>
          MINIMAL &
        </Typography>
        <Typography variant="h3" component="div" ml={25}>
          SMART DESIGN
        </Typography>
        <Grid container width="100%" height="90vh" pl="14%">
          <Grid item lg={6} md={6} xs={12}>
            <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
              {" "}
              <Typography variant="body1" component="div" mt="28%" width="30%">
                Energy efficiancy indicators
              </Typography>{" "}
              <Box
                sx={{
                  width: "100%",
                  height: "0.7px",
                  bgcolor: "black",
                  marginTop: "31%",
                }}
              ></Box>
            </Box>
            <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
              <Typography variant="body1" component="div" width="30%" mt="12%">
                Conected devices indicators
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  height: "0.7px",
                  bgcolor: "black",
                  marginTop: "15%",
                }}
              ></Box>
            </Box>

            <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <Typography variant="body1" component="div" mt="12%" width="30%">
              Sleek aluminum surface
            </Typography>
            <Box
                sx={{
                  width: "100%",
                  height: "0.7px",
                  bgcolor: "black",
                  marginTop: "17%",
                }}
              ></Box>
            </Box>
            <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <Typography variant="body1" component="div" mt="10%" width="35%">
              Colorful customizable interior
            </Typography>
           
            <Box
                sx={{
                  width: "100%",
                  height: "0.7px",
                  bgcolor: "black",
                  marginTop: "15%",
                }}
              />
            </Box>
            <Typography variant="body1" component="div" mt="2%" width="35%">
            < LensIcon  sx={{color:"#b3e5fc"}}/>
           < LensIcon sx={{color:"#f48fb1"}}/>
           < LensIcon sx={{color:"#fff9c4"}}/>
           < LensIcon sx={{color:"#cfd8dc"}}/>
           < LensIcon/>
           < LensIcon sx={{color:"#a1887f"}}/>
           
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} xs={12} className={classes.animatedImg}>
            <img
              src={AnimatedImg}
              alt="animates image"
              width="100%"
              height="100%"
            />
          </Grid>
        </Grid>
      </Box> */}
      <Box height="100vh" mb={15}>
        <Typography variant="h3" component="div" mt={10} ml={25}>
          MINIMAL &
        </Typography>
        <Typography variant="h3" component="div" ml={25}>
          SMART DESIGN
        </Typography>
        <Grid container width="100%" height="700px" pl="14%">
          <Grid item lg={6} md={6} xs={12}>
            <AnimateGroup play>
              <Animate
                start={{ opacity: 0 }}
                end={{ opacity: 1 }}
                sequenceIndex={0}
                duration={9}
              >
                <Box
                  sx={{ width: "100%", display: "flex", flexDirection: "row" }}
                >
                  {" "}
                  <Typography
                    variant="body1"
                    component="div"
                    mt="28%"
                    width="30%"
                  >
                    Energy efficiancy indicators
                  </Typography>{" "}
                  <Box
                    sx={{
                      width: "100%",
                      height: "0.7px",
                      bgcolor: "black",
                      marginTop: "31%",
                    }}
                  ></Box>
                </Box>
              </Animate>
              <Animate
                start={{ opacity: 0 }}
                end={{ opacity: 1 }}
                sequenceIndex={1}
                duration={3}
              >
                <Box
                  sx={{ width: "100%", display: "flex", flexDirection: "row" }}
                >
                  <Typography
                    variant="body1"
                    component="div"
                    width="30%"
                    mt="12%"
                  >
                    Conected devices indicators
                  </Typography>

                  <Box
                    sx={{
                      width: "100%",
                      height: "0.7px",
                      bgcolor: "black",
                      marginTop: "15%",
                    }}
                  ></Box>
                </Box>
              </Animate>

              <Animate
                start={{ opacity: 0 }}
                end={{ opacity: 1 }}
                sequenceIndex={2}
                duration={3}
              >
                <Box
                  sx={{ width: "100%", display: "flex", flexDirection: "row" }}
                >
                  <Typography
                    variant="body1"
                    component="div"
                    mt="12%"
                    width="30%"
                  >
                    Sleek aluminum surface
                  </Typography>
                  <Box
                    sx={{
                      width: "100%",
                      height: "0.7px",
                      bgcolor: "black",
                      marginTop: "17%",
                    }}
                  ></Box>
                </Box>
              </Animate>
              <Animate
                start={{ opacity: 0 }}
                end={{ opacity: 1 }}
                sequenceIndex={3}
                duration={3}
              >
                <Box
                  sx={{ width: "100%", display: "flex", flexDirection: "row" }}
                >
                  <Typography
                    variant="body1"
                    component="div"
                    mt="10%"
                    width="35%"
                  >
                    Colorful customizable interior
                  </Typography>

                  <Box
                    sx={{
                      width: "100%",
                      height: "0.7px",
                      bgcolor: "black",
                      marginTop: "15%",
                    }}
                  />
                </Box>

                <Typography
                  variant="body1"
                  component="div"
                  mt="2%"
                  width="35%"
                  mb="4%"
                >
                  <LensIcon sx={{ color: "#b3e5fc", fontSize: "15px" }} />
                  <LensIcon sx={{ color: "#f48fb1", fontSize: "15px" }} />
                  <LensIcon sx={{ color: "#fff9c4", fontSize: "15px" }} />
                  <LensIcon sx={{ color: "#cfd8dc", fontSize: "15px" }} />
                  <LensIcon sx={{ fontSize: "15px" }} />
                  <LensIcon sx={{ color: "#a1887f", fontSize: "15px" }} />
                </Typography>
              </Animate>
            </AnimateGroup>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <img
              src={AnimatedImg}
              alt="animates image"
              width="100%"
              height="100%"
            />
          </Grid>
        </Grid>
      </Box>

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
    </div>
  );
};

export default Home;
