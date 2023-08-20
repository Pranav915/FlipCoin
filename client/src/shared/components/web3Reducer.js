import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import FlipBank from '../../abis/FlipCoin.json';
import { connect } from 'react-redux';
import { useAccount } from '../../components/ContractContext';

const EthProvider = ({setContractDetails}) => {
  const [ethBalance, setEthBalance] = useState('0');
  const [coinBalance, setCoinBalance] = useState('0');
  const { account, updateAccount } = useAccount();

  useEffect(() => {
    console.log("hi")
    loadWeb3();
    loadBlockchainData();
  }, []);

  async function loadBlockchainData() {
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    // setAccount(accounts[0]); // Use setAccount to update the account state

    const ethBalance = await web3.eth.getBalance(accounts[0]);
    setEthBalance(ethBalance); // Use setEthBalance to update the ethBalance state

    // Load Token
    const networkId = await web3.eth.net.getId();
    const contractData = FlipBank.networks[networkId];
    if (contractData) {
      const flipBank = new web3.eth.Contract(FlipBank.abi, contractData.address);
      console.log("flipbank",flipBank);
      updateAccount(flipBank);

      let coinBalance = await flipBank.methods.balanceOf(accounts[0]).call();
      // console.log(account);
      setCoinBalance(coinBalance.toString()); // Use setCoinBalance to update the coinBalance state
    } else {
      window.alert('Token contract not deployed to detected network.');
    }
  }

  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  // Return your JSX content here
  return (
    <></>
  );
}

export default EthProvider;
