import React, { useState } from 'react';

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
    const [expandedItem, setExpandedItem] = useState(null);

    const handleExpand = (index) => {
        setExpandedItem(index);
    }

    const handleCollapse = () => {
        setExpandedItem(null);
    }

    return (
        <div className='catagories'>
            <h1>Arms and Armour</h1>
            <div className="arm-armour">
                {arms_and_armour.map((item, index) => (
                    <div key={index} className="card" onClick={() => handleExpand(index)}>
                        <img src={item.image} alt={item.category} />
                        <h2>{item.category}</h2>
                        {expandedItem === index ? (
                            <div>
                                <p>{item.description}</p>
                                <button onClick={() => handleCollapse()}>Close</button>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>

            <h1>Anthropology</h1>
            <div className="anthropology">
                {arms_and_armour.map((item, index) => (
                    <div key={index} className="card" onClick={() => handleExpand(index)}>
                        <img src={item.image} alt={item.category} />
                        <h2>{item.category}</h2>
                        {expandedItem === index ? (
                            <div>
                                <p>{item.description}</p>
                                <button onClick={() => handleCollapse()}>Close</button>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>

            <h1>Manuscript</h1>
            <div className="anthropology">
                {arms_and_armour.map((item, index) => (
                    <div key={index} className="card" onClick={() => handleExpand(index)}>
                        <img src={item.image} alt={item.category} />
                        <h2>{item.category}</h2>
                        {expandedItem === index ? (
                            <div>
                                <p>{item.description}</p>
                                <button onClick={() => handleCollapse()}>Close</button>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>

            <h1>Jewellery</h1>
            <div className="anthropology">
                {arms_and_armour.map((item, index) => (
                    <div key={index} className="card" onClick={() => handleExpand(index)}>
                        <img src={item.image} alt={item.category} />
                        <h2>{item.category}</h2>
                        {expandedItem === index ? (
                            <div>
                                <p>{item.description}</p>
                                <button onClick={() => handleCollapse()}>Close</button>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
}
