import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  SvgIconTypeMap,
  TextField,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { selectItems } from "../../app/redux/ItemSlice";
import { IItem } from "../../app/redux/interface";
import ItemAccordion from "./accardion";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { makeStyles } from "@mui/styles";

const useStyles: any = makeStyles({
  icons: {
    display: "flex",
    flexDirection: "row",
    margin:"20px 12px"
  },
});

interface IIcons {
  id: number;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  color: string;
}

const Icons = [
  { id: 1, icon: WhatsAppIcon, color: "green" },
  { id: 2, icon: FacebookRoundedIcon, color: "blue" },
  { id: 3, icon: TwitterIcon, color: "#2196f3" },
  { id: 4, icon: PinterestIcon, color: "red" },
];

const ShopItem = () => {
  const { number } = useParams();
  const itemsData = useSelector(selectItems);

  const classes = useStyles();

  const currentItem = itemsData.find(
    (item: IItem) => item.number === Number(number)
  );

  return (
    <Grid container margin="10% auto" width="70%" spacing={4}>
      <Grid item lg={6} md={6} xs={12}>
        <Box width="100%" border="1px solid grey">
          <img
            src={currentItem?.src}
            alt="item"
            style={{ width: "80%", height: "70%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            margin: "3% 5%",
          }}
        >
          <Box>
            {" "}
            <img
              src={currentItem?.src}
              alt="item"
              style={{
                width: "80px",
                height: "80px",
                border: "0.8px solid grey",
              }}
            />
          </Box>

          <Box ml={1}>
            {" "}
            <img
              src={currentItem?.srcHover}
              alt="item"
              style={{
                width: "80px",
                height: "80px",
                border: "0.8px solid grey",
              }}
            />
          </Box>
        </Box>
        <Typography variant="body1" component="div" width="100%">
          I'm a product detail. I'm a great place to add more details about your
          product such as sizing, material, care instructions and cleaning
          instructions.
        </Typography>
      </Grid>
      <Grid item lg={5} md={5} xs={12}>
        <Typography variant="h5" component="div">
          EZ 0000{currentItem?.number}
        </Typography>
        <Typography variant="body2" component="div" mt={1}>
          SKU: 000{currentItem?.number}
        </Typography>
        <Typography variant="body1" component="div" mt={3} mb={3}>
          $200.00
        </Typography>
        <Box width="25%" margin="15px 0">
          {" "}
          <TextField
            id="outlined-number"
            label="Quantity"
            type="number"
            defaultValue={1}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </Box>

        <Button
          variant="contained"
          fullWidth
          style={{
            background: "#44DBBD",
            color: "white",
            marginBottom: "10px",
          }}
        >
          Add To Cart
        </Button>
        <Button
          variant="contained"
          fullWidth
          style={{
            background: "black",
            color: "white",
            marginBottom: "20px",
          }}
        >
          Buy Now
        </Button>
        <ItemAccordion />
        <Box className={classes.icons}>
          {" "}
          {Icons.map((i: IIcons) => (
            <Box mr={1.5} key={i.id}>
              {<i.icon fontSize="small" sx={{ color: `${i.color}` }} />}
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ShopItem;
