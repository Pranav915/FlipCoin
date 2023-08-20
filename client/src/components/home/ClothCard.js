import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Switch, styled } from "@mui/material";
import { connect, useSelector } from "react-redux";
import { getMainActions } from "../../app/actions/mainActions";
const ClothCard = ({ item, addToCart }) => {
  const userInfo = useSelector((state) => state.user);
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const useStyles = styled({
    root: {
      maxWidth: 310,
      transition: "transform 0.15s ease-in-out",
    },
    cardHovered: {
      transform: "scale3d(1.05, 1.05, 1)",
    },
  });
  const classes = useStyles();
  const [state, setState] = React.useState({
    raised: false,
    shadow: 1,
  });

  const handleAddToCart = () => {
    const data = {
      productId:item.id,
      op:2
    }
    addToCart(data);
  }

  return (
    <Card
      sx={{ margin: 2, width: 270 }}
      classes={{ root: state.raised ? classes.cardHovered : "" }}
      onMouseOver={() => setState({ raised: true, shadow: 3 })}
      onMouseOut={() => setState({ raised: false, shadow: 1 })}
      raised={state.raised}
      zdepth={state.shadow}
    >
      <Box>
        <CardMedia
          component="img"
          alt="green iguana"
          height="260"
          image={item.itemImage}
        />
        <CardContent style={{ margin: "0 15px", padding: "0" }}>
          <table style={{ width: "100%", margin: "auto 5px" }}>
            <tr>
              <td><Typography variant="h5">Shirt</Typography></td>
              <td align="right"><Typography variant="h6">$50</Typography></td>
            </tr>
          </table>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button style={{ display: (userInfo && userInfo.userDetails.role === "seller") ? "none" : "block" }} size="medium" variant="text" onClick={handleAddToCart}>Add to Cart</Button>
          <div style={{ display: (userInfo && userInfo.userDetails.role !== "seller") ? "none" : "flex" }}><Typography>Avail Loyalty Program </Typography><Switch {...label} /></div>
        </CardActions>
      </Box>
    </Card>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getMainActions(dispatch),
  };
};
export default connect(null, mapActionsToProps)(ClothCard);
