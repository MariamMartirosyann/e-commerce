import { useMediaQuery } from "react-responsive";
import AnimatedImg from "../../../images/3.webp";
import { makeStyles } from "@mui/styles";
import { Animate, AnimateGroup } from "react-simple-animate";
import { Box, Typography, Grid, Divider } from "@mui/material";
import LensIcon from "@mui/icons-material/Lens";

const useStyles: any = makeStyles({
  btn: {
    background: "primary",
    color: "white",
    width: "45%",
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
});

interface IFeature {
  id: number;
  text: string;
}
const features: IFeature[] = [
  { id: 1, text: "Energy efficiancy indicators" },
  { id: 2, text: "Conected devices indicators" },
  { id: 3, text: "Sleek aluminum surface" },
  { id: 4, text: "Colorful customizable interior" },
];

const SectionFive = () => {
  const classes = useStyles();

  const isBigScreen = useMediaQuery({ query: "(min-width: 1400px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1050px)" });
  const isMediumScreen = useMediaQuery({ query: "(max-width: 900px)" });
  return (
    <>
      {isMediumScreen ? (
        <Box>
          <Typography variant="h5" component="div" margin="20px auto">
            MINIMAL &
          </Typography>
          <Typography variant="h5" component="div" ml="45%">
            SMART DESIGN
          </Typography>
          <Grid container width="100%" height="90vh" pl="14%" mt={5}>
            <Grid item lg={6} md={6} xs={12}>
              {features.map((i: IFeature) => (
                <Box
                  sx={{ width: "100%", display: "flex", flexDirection: "row" }}
                  key={i.id}
                >
                  
                  <Typography variant="body1" component="div" margin="3% auto">
                   {i.text}
                  </Typography>
                </Box>
              ))}

              {/* <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
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
            </Box> */}
              <Typography variant="body1" component="div" mt="2%" width="35%">
                <LensIcon sx={{ color: "#b3e5fc" }} />
                <LensIcon sx={{ color: "#f48fb1" }} />
                <LensIcon sx={{ color: "#fff9c4" }} />
                <LensIcon sx={{ color: "#cfd8dc" }} />
                <LensIcon />
                <LensIcon sx={{ color: "#a1887f" }} />
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
        </Box>
      ) : (
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
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                    }}
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
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                    }}
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
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                    }}
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
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                    }}
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
      )}
    </>
  );
};

export default SectionFive;
