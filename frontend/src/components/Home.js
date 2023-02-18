import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ethers } from 'ethers';
import abi from "../utils/Museum.json";
import Website from "../config.json";

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
    const [content, setContent] = useState(null);
    const [artifactData,setArtifactData] = useState([])
    const handleClick = (index, item) => {
        setContent(JSON.stringify(item, null, 4));
        setOpen(true);
    }
    const [open, setOpen] = useState(false);

    const closeModal = () => {
        setOpen(false);
    };

    const handleDonation = () => {
        console.log("Donated Bitch");
    }

    const artifact = async () => {
        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const artifactContract = new ethers.Contract("0x38F33B552a5992CcBd993e123d25A8De981479F9", abi.abi, signer);
            
            // artifactContract.createartifact("Ayush", "SVNIT Museum", "Contract Testing", "Description coming soon", "Lop");
            //
            const data = await artifactContract.getartifacts();
            console.log(data[0].owner);
            setArtifactData(data);
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
                    <h1 id="modal-modal-title" variant="h6" component="h2">
                        {/* {JSON.parse(content)?.image}
                        {JSON.parse(content)?.description} */}
                        {JSON.stringify(content)}
                    </h1>
                    <Button variant='contained' className='donate' onClick={handleDonation}>Donate</Button>
                </Box>
            </Modal>
        </div>
    );
}
