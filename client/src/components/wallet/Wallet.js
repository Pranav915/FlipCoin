import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import WalletBox from "./WalletBox";
import WalletHistory from "./WalletHistory";
import { useAccount } from "../ContractContext";
import { useSelector } from "react-redux";

const Wallet = () => {
  const contract = useAccount();
  const [contractName, setContractName] = useState(""); // Initialize state
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    async function fetchContractName() {
      try {
        const name = await contract.methods.name().call();
        setContractName(name);
      } catch (error) {
        console.error('Error:', error);
      }
      setLoading(false); // Set loading to false once data is loaded
    }

    if (contract) {
      fetchContractName();
    }
  }, [contract]);

  if (loading) {
    return <div>Loading...</div>; // Return loading message while loading
  }

  return (
    <Box sx={{ width: "100%", height: "100vh", display: "flex" }}>
      <div>Contract Name: {contractName}</div>
      <WalletBox />
      <WalletHistory />
    </Box>
  );
};

export default Wallet;
