import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import { ICartItem, IItem } from "../../app/redux/interface";
import {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
  selectCartItems,
} from "../../app/redux/slices/cartSlice";
import Button from "@mui/material/Button";
import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";

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
  smallImageBoxDrawer: {
    width: "90px",
    height: "90px",
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
  counterBoxDrawer: {
    border: "0.8px solid grey",
    width: "70px",
    height: "30px",
    margin: " 5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    fontSize: "15px",
  },
  subtotal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftSecondBox: {
    display: "flex",
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-between",
  },
  circleClose: {
    border: "1px solid grey",
    borderRadius: "50px",
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
  },
  cartDrawerFooter: {
    marginBottom: "15px",
  },
});
interface ICartComponent {
  isDrawer?: boolean;
}
interface INumOrUn{
  a:number | undefined,
  b:number | undefined,
}

const Cart = ({ isDrawer }: ICartComponent) => {
  const cartItemsData = useSelector(selectCartItems);
  console.log(cartItemsData, "cartItemsData");


  const isSmallScreen = useMediaQuery({ query: "(max-width: 699px)" });

  const classes = useStyles();
  const dispatch = useDispatch();
  const [isCartDrawer, setCartDrawer] = useState<boolean | undefined>(isDrawer);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

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

  // const itemsTotal=cartItemsData.map((i:ICartItem)=>{return i.price * i.itemQuantity})
  // const itemTotal= (id:number)=>{
  //  return  itemsTotal[id-1]
  // }
  // console.log(itemsTotal,itemTotal(2),"itemTotal")

  const totalAmount = useMemo(() => {
    const totalSum = cartItemsData.map((i:ICartItem) => {
      return i.itemQuantity * i.price;
    });
    const sum = totalSum.reduce((a, b) => a + b, 0);

    return sum;
  }, [cartItemsData]);



  const ItemsDiscount=useMemo(() => {
    const itemDiscount = cartItemsData.map((i:ICartItem) => {
      const itemTotal= i.itemQuantity * i.price;
      return  itemTotal>2000 ? 0.1 * itemTotal :0
    });
    return itemDiscount
  ;
  }, [cartItemsData]);

  const totalDiscount = useMemo(() => {
    const totalSum = cartItemsData.map((i:ICartItem) => {
      const total= i.itemQuantity * i.price;
      if(total > 2000){
        return total * 0.1
      }
     return
    });

    const sum = totalSum?.reduce((a:any, b:any) => a + b, 0 );

    return sum
  }, [cartItemsData]);
  

  const totalAmountWithDiscount =totalDiscount? totalAmount - totalDiscount : totalAmount
;

  
  return (
    <Grid container sx={{ width: "80%", margin: "1% auto" }} spacing={5}>
      <Grid item lg={isCartDrawer ? 12 : 8} md={isCartDrawer ? 12 : 8} xs={12}>
        {!isCartDrawer ? (
          <Typography variant="h6" component="div" mt={2}>
            My cart
          </Typography>
        ) : null}

        {cartItemsData.length ? (
          cartItemsData.map((i: ICartItem) => (
            <Box className={classes.bigBox} key={i.id}>
              {isCartDrawer ? (
                <Box
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  key={i.id}
                >
                  <Box className={classes.itemDetail}>
                    <Box>
                      <img
                        src={i.src}
                        alt="item"
                        className={classes.smallImageBoxDrawer}
                      />
                    </Box>
                    <Box className={classes.leftSecondBox}>
                      <Box className={classes.leftText}>
                        <Typography variant="body1" component="div">
                          EZ 0000{i.id}
                        </Typography>

                        <Typography variant="body2" component="div">
                          ${i.price}.00
                        </Typography>

                        <Box className={classes.counterBoxDrawer}>
                          {" "}
                          <RemoveIcon fontSize="inherit" onClick={() => handleDecreaseCart(i)} />{i.itemQuantity}
                          <AddIcon fontSize="inherit" onClick={() => handleAddToCart(i)} />
                        </Box>
                      </Box>
                    </Box>
                    {isHovering && (
                      <Box mt={1} ml={3} className={classes.circleClose}>
                        <CloseIcon fontSize="inherit"  onClick={() => handleRemoveFromCart(i)}/>
                      </Box>
                    )}
                  </Box>
                  <Box width="100%" mt={2} mb={3}>
                    <Divider />
                  </Box>
                </Box>
              ) : (
                <>
                  <Box width="100%" mt={2} mb={3}>
                    <Divider />
                  </Box>
                  <Box className={classes.itemDetail}>
                    <Box>
                      <img
                        src={i.src}
                        alt="item"
                        className={classes.smallImageBox}
                      />
                    </Box>
                    <Box className={classes.leftSecondBox}>
                      <Box className={classes.leftText}>
                        <Typography variant="body1" component="div">
                          EZ 0000{i.id}
                        </Typography>

                        <Typography variant="body2" component="div" mt={1}>
                          ${i.price}.00
                        </Typography>
                      </Box>
                      <Box className={classes.counterBox}>
                        {" "}
                        <RemoveIcon fontSize="small"  onClick={() => handleDecreaseCart(i)}/> {i.itemQuantity}
                        <AddIcon fontSize="small"  onClick={() => handleAddToCart(i)} />
                      </Box>
                    </Box>
                    <Box mt={1} ml={4}>
                      <Typography variant="body1" component="div"><>
                        ${i.price* i.itemQuantity}.00 </>
                      </Typography>
                      <Typography variant="body1" component="div">
                       {i.price*i.itemQuantity > 2000 ? ` -$ ${i.price*i.itemQuantity *0.1}`  : null} 
                      </Typography>
                    </Box>
                    <Box mt={1} ml={3}>
                      <CloseIcon fontSize="small" onClick={() => handleRemoveFromCart(i)} />
                    </Box>
                  </Box>
                </>
              )}
            </Box>
          ))
        ) : (
          <Typography variant="h6" component="div" mt={2}>
            Cart is empty
          </Typography>
        )}
      </Grid>
      <Grid
        item
        lg={isCartDrawer ? 12 : 4}
        md={isCartDrawer ? 12 : 4}
        xs={12}
        mt={2}
      >
        {isCartDrawer ? (
          <Box className={classes.cartDrawerFooter}>
            <Divider />
            <Box mt={1} className={classes.subtotal}>
              <Typography variant="body1" component="div" mb={2}>
                Subtotal
              </Typography>
              <Typography variant="body1" component="div" mb={2}>
                ${totalAmount}.00
              </Typography>
            </Box>
        
            <Box className={classes.subtotal}>
              <Typography variant="body2" component="div" mb={2}>
                Discount
              </Typography>
              <Typography variant="body2" component="div" mb={2}>
                ${!isNaN(totalDiscount) ?  totalDiscount : 0}.00
              </Typography>
            </Box>
            <Divider />
            <Box className={classes.subtotal} mt={1} mb={1}>
              <Typography variant="h6" component="div">
                Total
              </Typography>
              <Typography variant="h6" component="div">
              ${totalDiscount? totalAmount - totalDiscount : totalAmount}.00
              </Typography>
            </Box>
            <Divider />
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
          </Box>
        ) : (
          <>
            {" "}
            <Typography variant="h6" component="div" mb={2}>
              Order summary
            </Typography>
            <Divider />
            <Box mt={3} className={classes.subtotal}>
              <Typography variant="body1" component="div" mb={2}>
                Subtotal
              </Typography>
              <Typography variant="body1" component="div" mb={2}>
                ${totalAmount}.00
              </Typography>
            </Box>
            <Box className={classes.subtotal}>
              <Typography variant="body2" component="div" mb={2}>
                Discount
              </Typography>
              <Typography variant="body2" component="div" mb={2}>
                ${!isNaN(totalDiscount) ?  totalDiscount : 0}.00
              </Typography>
            </Box>
            
            <Divider />
            <Box mt={3} mb={2} className={classes.subtotal}>
              <Typography variant="h6" component="div">
                Total
              </Typography>
              <Typography variant="h6" component="div">
              ${totalAmountWithDiscount}.00
              </Typography>
            </Box>
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
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default Cart;
