import { useEffect, useState } from 'react';
import LendingContract from '../contracts/LendingContract.json';

const { ethers } = require("ethers");

const useContract = () => {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initializeContract = async () => {
      try {
        // Connect to the provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Get the signer
        const signer = provider.getSigner();

        // Create the contract instance
        const contractAddress = '0xb7DEacF6c4ae666190222E2ab2f9CB431D2E9A5e';
        const contractAbi = LendingContract.abi;
        const lendingContract = new ethers.Contract(contractAddress, contractAbi, signer);

        // Set the contract instance
        setContract(lendingContract);
      } catch (error) {
        console.error('Failed to initialize contract:', error);
      }
    };

    initializeContract();
  }, []);

  return contract;
};

export default useContract;
