import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const arms_and_armour = [
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

const manuscript = [
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

const jewellery = [
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

const anthropology = [
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
    const handleClick = (index, item) => {
        setContent(JSON.stringify(item,null,4));
        setOpen(true);
    }
    const [open, setOpen] = useState(false);

    const closeModal = () => {
        setOpen(false);
    };
    return (
        <div className='catagories'>
            <h1 className='catagorie-heading'>Arms and Armour</h1>
            <hr />
            <div className="arm-armour">
                {arms_and_armour.map((item, index) => (
                    <div key={index} className="card">
                        <img src={item.image} alt={item.category} />
                        <h2>{item.category}</h2>
                        <p>{item.description}</p>
                        <button onClick={() => handleClick(index, item)}>View More</button>
                    </div>
                ))}
            </div>

            <h1 className='catagorie-heading'>Anthropology</h1>
            <hr />
            <div className="anthropology">
                {anthropology.map((item, index) => (
                    <div key={index} className="card">
                        <img src={item.image} alt={item.category} />
                        <h2>{item.category}</h2>
                        <p>{item.description}</p>
                        <button onClick={() => handleClick(index, item)}>View More</button>
                    </div>
                ))}
            </div>

            <h1 className='catagorie-heading'>Manuscript</h1>
            <hr />
            <div className="manuscript">
                {manuscript.map((item, index) => (
                    <div key={index} className="card">
                        <img src={item.image} alt={item.category} />
                        <h2>{item.category}</h2>
                        <p>{item.description}</p>
                        <button onClick={() => handleClick(index, item)}>View More</button>
                    </div>
                ))}
            </div>

            <h1 className='catagorie-heading'>Jewellery</h1>
            <hr />
            <div className="jewellery">
                {jewellery.map((item, index) => (
                    <div key={index} className="card">
                        <img src={item.image} alt={item.category} />
                        <h2>{item.category}</h2>
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
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {content}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
