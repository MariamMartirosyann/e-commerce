import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import Image from "../../images/1.webp";
import { IItem } from "../../app/redux/interface";
import {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
} from "../../app/redux/slices/cartSlice";
import Button from "@mui/material/Button";
import { useState } from "react";

const useStyles: any = makeStyles({
  itemDetail: {
    display: "flex",
    flexDirection: "row",
  },
  bigBox: {
    display: "flex",
    flexDirection: "column",
  },
  smallImageBox: {
    width: "80px",
    height: "80px",
    border: "0.8px solid grey",
  },
  leftText: {
    marginLeft: "20px",
  },
  counterBox: {
    border: "0.8px solid grey",
    width: "30%",
    height: "30px",
    margin: " 5px",
    display: "flex",
    justifyContent: "space-around",
    padding: "2px",
  },
  subtotal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftSecondBox: {
    display: "flex",
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
  },
});
interface ICartComponent {
  isDrawer?: boolean;
}

const Cart = ({ isDrawer }: ICartComponent) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isCartDrawer, setCartDrawer] = useState<boolean | undefined>(isDrawer);

  const handleAddToCart = (item: IItem) => {
    dispatch(addToCart(item));
  };
  const handleRemoveFromCart = (item: IItem) => {
    dispatch(removeFromCart(item));
  };
  const handleDecreaseCart = (item: IItem) => {
    dispatch(decreaseCart(item));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <Grid container sx={{ width: "80%", margin: "5% auto" }} spacing={5}>
      <Grid item lg={isCartDrawer ? 12 : 8} md={isCartDrawer ? 12 : 8} xs={12}>
        <Typography variant="h6" component="div" mt={2}>
          My cart
        </Typography>
        <Box className={classes.bigBox}>
          <Box width="100%" mt={2} mb={3}>
            <Divider />
          </Box>
          <Box className={classes.itemDetail}>
            <Box>
              <img src={Image} alt="item" className={classes.smallImageBox} />
            </Box>
            <Box className={classes.leftSecondBox}>
              <Box className={classes.leftText}>
                <Typography variant="body1" component="div">
                  EZ 0000
                </Typography>

                <Typography variant="body2" component="div" mt={1}>
                  $200.00
                </Typography>
              </Box>
              <Box className={classes.counterBox}>
                {" "}
                <RemoveIcon fontSize="small" />1<AddIcon fontSize="small" />
              </Box>
            </Box>

            <Box mt={1} ml={4}>
              <Typography variant="body1" component="div">
                $200.00
              </Typography>
            </Box>
            <Box mt={1} ml={3}>
              <CloseIcon fontSize="small" />
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        lg={isCartDrawer ? 12 : 4}
        md={isCartDrawer ? 12 : 4}
        xs={12}
        mt={2}
      >
        {!isCartDrawer ? (
          <>
            <Typography variant="h6" component="div" mb={2}>
              Order summary
            </Typography>
            <Divider />
            <Box mt={3} className={classes.subtotal}>
              <Typography variant="body1" component="div" mb={2}>
                Subtotal
              </Typography>
              <Typography variant="body1" component="div" mb={2}>
                $200.00
              </Typography>
            </Box>
          </>
        ) : null}

        <Box className={classes.subtotal}>
          <Typography variant="body2" component="div" mb={2}>
            Discount
          </Typography>
          <Typography variant="body2" component="div" mb={2}>
            $20.00
          </Typography>
        </Box>
        <Divider />
        <Box mt={3} mb={2} className={classes.subtotal}>
          <Typography variant="h6" component="div">
            Total
          </Typography>
          <Typography variant="h6" component="div">
            $200.00
          </Typography>
        </Box>

        {!isCartDrawer ? (
          <Button
            variant="contained"
            fullWidth
            style={{
              background: "#44DBBD",
              color: "white",
            }}
          >
            Buy
          </Button>
        ) : (
          <Button
            variant="contained"
            fullWidth
            style={{
              background: "#44DBBD",
              color: "white",
            }}
          >
            View Cart
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default Cart;
