import { Box } from "@mui/material";
import React from "react";
import WalletBox from "./WalletBox";
import WalletHistory from "./WalletHistory";

const Wallet = () => {
  return (
    <Box sx={{ width: "100%", height: "100vh", display: "flex" }}>
      <WalletBox />
      <WalletHistory />
    </Box>
  );
};

export default Wallet;
