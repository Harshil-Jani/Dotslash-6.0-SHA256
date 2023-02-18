import { useState, useEffect } from "react";
import { ethers } from 'ethers';
import abi from "../utils/Museum.json";

export default function () {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [museum, setMuseum] = useState("");
    const [walletAddress, setWalletAddress] = useState("");
    const [category, setCategory] = useState("");
    const [dateFound, setDateFound] = useState("");
    const [description, setDescription] = useState("");

    const handleClick = () => {
        console.log("Clicked");
        console.log(image);
        console.log(title);
        console.log(name);
        console.log(museum);
        console.log(walletAddress);
        console.log(category);
        console.log(dateFound);
        console.log(description);
        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const artifactContract = new ethers.Contract("0x38F33B552a5992CcBd993e123d25A8De981479F9", abi.abi, signer);
            artifactContract.createartifact(name, museum, title, description, image);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleClick();
    };
    return (
        <div className="form-create">
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>Image:</td>
                            <td>
                                <input
                                    type="file"
                                    onChange={(event) => setImage(event.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Title:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Enter Person/Org Name"
                                    value={title}
                                    onChange={(event) => setTitle(event.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Enter Artifact Name"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Museum:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Enter name of Museum"
                                    value={museum}
                                    onChange={(event) => setMuseum(event.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Wallet Address:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Enter Wallet Address"
                                    value={walletAddress}
                                    onChange={(event) => setWalletAddress(event.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Category:</td>
                            <td>
                                <select
                                    value={category}
                                    onChange={(event) => setCategory(event.target.value)}
                                >
                                    <option value="">Select a category</option>
                                    <option value="Arms and Armour">Arms and Armour</option>
                                    <option value="Anthropology">Anthropology</option>
                                    <option value="Manuscript">Manuscript</option>
                                    <option value="Jewellery">Jewellery</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Date Found on:</td>
                            <td>
                                <input
                                    type="date"
                                    placeholder="Date Found On"
                                    value={dateFound}
                                    onChange={(event) => setDateFound(event.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td>
                                <textarea
                                    placeholder="Write something about your discovery"
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}
                                ></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" className="form-submit">
                    Submit
                </button>
            </form>
        </div>)
}