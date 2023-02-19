import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { ethers } from 'ethers';
import abi from "../utils/Museum.json";

const artifact_data = [
    {
        category: 'Item1',
        image: 'https://dummyimage.com/300x200/000/fff.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor et convallis placerat, nisi nulla ornare urna, quis accumsan nisl purus eget mi.'
    },
    {
        category: 'Item2',
        image: 'https://dummyimage.com/300x200/000/fff.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor et convallis placerat, nisi nulla ornare urna, quis accumsan nisl purus eget mi.'
    },
    {
        category: 'Item3',
        image: 'https://dummyimage.com/300x200/000/fff.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor et convallis placerat, nisi nulla ornare urna, quis accumsan nisl purus eget mi.'
    },
    {
        category: 'Item4',
        image: 'https://dummyimage.com/300x200/000/fff.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor et convallis placerat, nisi nulla ornare urna, quis accumsan nisl purus eget mi.'
    },
];

export default function () {
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [museum, setMuseum] = useState("");
    // const [owner, setOwner] = useState("");
    const [description, setDescription] = useState("");
    const [artifactData, setArtifactData] = useState([]);
    const [donationPrice, setDonationPrice] = useState(0);

    const handleClick = (index, item) => {
        setTitle(item.title);
        setName(item.name);
        setMuseum(item.museum);
        // setOwner(item.owner);
        setDescription(item.description);
        setOpen(true);
    }
    const [open, setOpen] = useState(false);

    const closeModal = () => {
        setOpen(false);
    };

    const handleDonation = () => {
        console.log("Donated");
    }

    const artifact = async () => {
        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const artifactContract = new ethers.Contract("0xc701119B9386Ded2Ba09D378f02fc19dAD13d2b0", abi.abi, signer);

            // artifactContract.createartifact("Ayush", "SVNIT Museum", "Contract Testing", "Description coming soon", "Lop");
            //
            const data = await artifactContract.getartifacts();
            setArtifactData(data);
        }
    }

    const donate = async () => {
        const donateNumber = donationPrice.nativeEvent.data;
        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const artifactContract = new ethers.Contract("0xc701119B9386Ded2Ba09D378f02fc19dAD13d2b0", abi.abi, signer);
            artifactContract.donateToartifact({value: String(donateNumber*10e9), gasPrice:'2000000000'});
        }
    }
    useEffect(() => {
        artifact();
    }, []);
    return (
        <div className='catagories'>
            <div className="artifact-data">
                {artifactData.map((item, index) => (
                    <div key={index} className="card">
                        <img src={"https://bafybeid6chs4sdsn7vkghbsgi5lbspx5cinbt6sbfn6vnfdl7iuvgiulga.ipfs.nftstorage.link/"} width={300} height={300} alt={item.category} />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <button onClick={() => handleClick(index, item)}>View More</button>
                    </div>
                ))}
            </div>
            <Modal
                open={open}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <Box className='modal-style'>
                    <img height={300} width={300} src="https://bafybeid6chs4sdsn7vkghbsgi5lbspx5cinbt6sbfn6vnfdl7iuvgiulga.ipfs.nftstorage.link/"/>
                    <h1>
                        {title}
                    </h1>
                    <h2>
                        {name}
                    </h2>
                    <h3>
                        {description}
                    </h3>
                    <h4>
                        {museum}
                    </h4>
                   <b>Enter the Amount to Input </b> <input type="number" className='' onChange={(d) => setDonationPrice(d)}/>
                   
                    <Button variant='contained' className='donate' onClick={donate}>Donate</Button>
                </Box>
            </Modal>
        </div>
    );
}
