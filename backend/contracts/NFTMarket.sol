// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

//counters.sol to manage tokenID
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTMarket is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("GameItem", "ITM") {}

    function createNFT(string memory tokenURI)
        public returns(uint256)
    {
        _tokenIds.increment();
        //minting the token to the sender
        uint256 currentID = _tokenIds.current();
        _safeMint(msg.sender, currentID);
        _setTokenURI(currentID, tokenURI);
        return currentID;
    }
}
