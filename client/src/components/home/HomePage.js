import React, { useEffect, useState } from "react";
import HomeNavbar from "./HomeNavbar";
import OutfitCard from "./OutfitCard";
import { Box } from "@mui/material";
import { getMainActions } from "../../app/actions/mainActions";
import { connect, useSelector } from "react-redux";
import { logout } from "../../shared/utils/logout";
import { getAuthActions } from "../../app/actions/authActions";
import { useNavigate } from "react-router-dom";

const HomePage = ({getAllProducts}) => {
  const navigate = useNavigate();
  console.log(useSelector((state) => state.main.productList))
  const [outfitList, setOutfitList] = useState([
    {
      outfitId: "",
      items: [
        {
          itemId: "",
          itemImage: "https://source.unsplash.com/random",
        },
        {
          itemId: "",
          itemImage: "https://source.unsplash.com/random",
        },
        {
          itemId: "",
          itemImage: "https://source.unsplash.com/random",
        },
      ],
    },
    {
      outfitId: "",
      items: [
        {
          itemId: "",
          itemImage: "https://source.unsplash.com/random",
        },
        {
          itemId: "",
          itemImage: "https://source.unsplash.com/random",
        },
        {
          itemId: "",
          itemImage: "https://source.unsplash.com/random",
        },
      ],
    },
  ]);

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("user"));
    if (!userDetails) {
      logout();
    } 
    getAllProducts();
    
  }, []);

  return (
    <>
      <HomeNavbar />
      <Box sx={{ mt: 9, display: "flex", flexDirection: "row" }}>
        <Box sx={{ width: "100%" }}>
          {outfitList.map((outfit, i) => (
            <OutfitCard
              outfitDetails={outfit.items}
              outfitId={outfit.outfitId}
              key={i}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getMainActions(dispatch),
    ...getAuthActions(dispatch),
  };
};
export default connect(null, mapActionsToProps)(HomePage);
