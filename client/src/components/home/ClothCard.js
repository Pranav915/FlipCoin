import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, IconButton, styled } from "@mui/material";
import { makeStyles } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const ClothCard = ({ imgURl, itemId }) => {
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

  return (
    <Card
      sx={{ margin: 2, width: 270, height: 300 }}
      classes={{ root: state.raised ? classes.cardHovered : "" }}
      onMouseOver={() => setState({ raised: true, shadow: 3 })}
      onMouseOut={() => setState({ raised: false, shadow: 1 })}
      raised={state.raised}
      zdepth={state.shadow}
    >
      <Box>
        <IconButton sx={{ position: "absolute", color: "white" }}>
          <RefreshIcon />
        </IconButton>
        <CardMedia
          component="img"
          alt="green iguana"
          height="260"
          image={imgURl}
        />
        <CardActions sx={{ mx: 0 }}>
          <Button size="small">View Details</Button>
          <Button size="small">Add to Cart</Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default ClothCard;
