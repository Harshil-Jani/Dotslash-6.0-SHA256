import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Create from "./Create";
import Owned from "./Owned";
import Home from "./Home";

const getEthereumObject = () => window.ethereum;

const Navbar = ({ setWalletConnect, setAction }) => {
    const [currentAccount, setCurrentAccount] = useState("Connect Wallet");
    const [selectedButton, setSelectedButton] = useState(null);

    function handleButtonClick(buttonName) {
        if (buttonName == "create") {
            setAction(<Create />);
        }
        else if (buttonName == "owned") {
            setAction(<Owned />);
        }else if (buttonName == "home") {
            setAction(<Home/>);
        }
    }
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
            setWalletConnect(accounts[0]);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="main_nav">
            <div className="nav_title">
                <h1>Museum Artifact MarketPlace</h1>
                <button
                    className={`nav-button`}
                    onClick={() => handleButtonClick("create")}
                >
                    Create
                </button>
                <button
                    className={`nav-button`}
                    onClick={() => handleButtonClick("home")}
                >
                    Home
                </button>
                <button
                    className={`nav-button`}
                    onClick={() => handleButtonClick("owned")}
                >
                    Owned
                </button>
                <button className="connect-wallet" onClick={connectWallet}>
                    {currentAccount.includes("Connect") ? (
                        <p>Connect Wallet</p>
                    ) : (
                        currentAccount.slice(0, 6) + "..." + currentAccount.slice(36, 42)
                    )}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
