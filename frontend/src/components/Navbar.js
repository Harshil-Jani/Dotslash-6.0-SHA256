import { ethers } from "ethers";
import { useEffect, useState } from "react";

const getEthereumObject = () => window.ethereum;

const findMetaMaskAccount = async () => {
    try {
      const ethereum = getEthereumObject();
  
      /*
      * First make sure we have access to the Ethereum object.
      */
      if (!ethereum) {
        console.error("Make sure you have Metamask!");
        return null;
      }
  
      console.log("We have the Ethereum object", ethereum);
      const accounts = await ethereum.request({ method: "eth_accounts" });
  
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        return account;
      } else {
        console.error("No authorized account found");
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

const Navbar = () => {
    const [currentAccount, setCurrentAccount] = useState("");
    const connectWallet = async () => {
        try {
            const ethereum = getEthereumObject();
            if (!ethereum) {
                alert("Get MetaMask!");
                return;
            }
            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
            console.log("Connected", accounts[0]);
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="main_nav">
            <div className="nav_title">
                <h1>Museum Artifact</h1>
                {!currentAccount && (
                    <button className="waveButton" onClick={connectWallet}>
                        Connect Wallet
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
