import { AnimateKeyframes } from "react-simple-animate";
import { useMediaQuery } from "react-responsive";
import { Box, Typography, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IItem } from "../../app/redux/interface";
import { items } from "../../app/redux/constants";

const useStyles: any = makeStyles({
  title: {
    boxSizing: "border-box",
    width: "100%",
    background: "rgba(239, 239, 240, 1)",
    display: "flex",
    alignItems: "center",
    paddingBottom: "2%",
  },
  titleBox: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    marginLeft: "20%",
    marginTop: "5%",
  },
  quickView: {
    width: "100%",
    height: "20%",
    position: "absolute",
    background: "rgba(239, 239, 240, .5)",
    left: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    width: "70%",
    margin: "5px auto",
  },
  textDecorationNone: {
    textDecoration: "none",
    color: "black",
  },
});

const Shop = () => {
  const [hoveredCart, setHoveredCart] = useState<number>(-1);

  const classes = useStyles();

  const isBigScreen = useMediaQuery({ query: "(min-width: 1400px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1050px)" });
  const isMediumScreen = useMediaQuery({ query: "(max-width: 900px)" });

  const showCartHandler = (i: number) => {
    setHoveredCart(i);
  };

  const hideCartHandler = () => {
    setHoveredCart(-1);
  };

  return (
    <>
      <Box className={classes.title}>
        <Box className={classes.titleBox}>
          <Typography
            variant={isLargeScreen ? "h4" : "h6"}
            component="div"

            //mt={isMediumScreen ? 0: 10}
          >
            SHOP
          </Typography>
          <Typography variant={isLargeScreen ? "h4" : "h6"} component="div">
            YOUR EZ
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        spacing={5}
        width="80%"
        margin="30px auto"
        className={classes.item}
      >
        {items.map((i: IItem) => (
          <Grid
            item
            key={i.number}
            md={6}
            xs={12}
            onMouseLeave={hideCartHandler}
            onMouseEnter={() => showCartHandler(i.number)}
          >
            <Box className={classes.item}>
              <Link
                to={`/shop-item/${i.number}`}
                className={classes.textDecorationNone}
              >
                <Box width="100%" sx={{ position: "relative" }}>
                  <img
                    src={hoveredCart === i.number ? i.srcHover : i.src}
                    alt="item"
                    style={{ width: "90%", height: "80%" }}
                  />
                  {hoveredCart === i.number ? (
                    <AnimateKeyframes
                      iterationCount="1"
                      keyframes={[
                        "transform: translateY(-20%)",
                        "transform: translateY(-15%),",
                        "transform: translateY(-10%),",
                        "transform: translateY(0),",
                      ]}
                      play
                    >
                      <Box className={classes.quickView}>Qiuk View</Box>
                    </AnimateKeyframes>
                  ) : null}
                </Box>
              </Link>
              <Typography variant="h6" component="div">
                EZ 0000{i.number}
              </Typography>
              <Typography variant="body1" component="div" mb={2}>
                $200.00
              </Typography>
              <Button
                variant="contained"
                style={{
                  color: "white",
                  background: "primary",
                  width: "100%",
                }}
              >
                Add To Cart
              </Button>
            </Box>
          </Grid>
        ))}
        <Grid item></Grid>
      </Grid>
    </>
  );
};

export default Shop;
