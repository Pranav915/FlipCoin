import { Box } from "@mui/material";
import React, { useEffect } from "react";
import WalletBox from "./WalletBox";
import WalletHistory from "./WalletHistory";
import { useContract } from "../ContractContext";
import { useSelector } from "react-redux";

const Wallet = () => {
  // const info = useSelector((state) => state.contract);
  // let contract = info.contractDetails;
  // useEffect(() => {
  //   console.log(contract);
  // }, [contract]);
  return (
    <Box sx={{ width: "100%", height: "100vh", display: "flex" }}>
      <WalletBox />
      <WalletHistory />
    </Box>
  );
};

export default Wallet;
