import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const WalletBox = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ bgcolor: "black", height: "100%", width: "30%" }}>
      <Button variant="outlined" onClick={() => {navigate("/")}} sx={{mt: 1.5, ml: 1.5}} startIcon={<ArrowBackIcon />}>
        Back
      </Button>
      <Card sx={{ maxWidth: 330, ml: 7, mt: 7 }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" sx={{display: "flex", justifyContent: "center"}}>
            Total Tokens
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{display: "flex", justifyContent: "center"}}>
            2000
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 330, ml: 7, mt: 7 }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" sx={{display: "flex", justifyContent: "center"}}>
            Total Tokens
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{display: "flex", justifyContent: "center"}}>
            2000
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 330, ml: 7, mt: 7 }}>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" sx={{display: "flex", justifyContent: "center"}}>
            Total Tokens
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{display: "flex", justifyContent: "center"}}>
            2000
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WalletBox;
