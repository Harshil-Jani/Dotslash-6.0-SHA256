import { ethers } from "ethers";
import { useEffect, useState } from "react";

const getEthereumObject = () => window.ethereum;
const Navbar = () => {
    const [currentAccount, setCurrentAccount] = useState("Connect Wallet");
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
                <button className="connect-wallet" onClick={connectWallet}>
                    {currentAccount.includes("Connect")?<p>Connect Wallet</p>:currentAccount.slice(0, 6) + "..." + currentAccount.slice(36, 42)}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
