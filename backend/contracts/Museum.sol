// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Museum {
    struct Artifact {
        address owner;
        string name;
        string museum;
        string title;
        string description;
        // string category;
        uint256 amountCollected;
        string image;
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => Artifact) public artifacts;

    uint256 public numberOfartifacts = 0;

    function createartifact(string memory _name, string memory _museum, string memory _title, string memory _description, string memory _image) public returns (uint256) {
        Artifact storage artifact = artifacts[numberOfartifacts];

        // require(artifact.deadline < block.timestamp, "The deadline should be a date in the future.");

        artifact.owner = msg.sender;
        artifact.name = _name;
        artifact.title = _title;
        artifact.description = _description;
        // artifact.category = _category;
        artifact.museum = _museum;
        // artifact.target = _target;
        // artifact.deadline = _deadline;
        artifact.amountCollected = 0;
        artifact.image = _image;

        numberOfartifacts++;

        return numberOfartifacts - 1;
    }

    function donateToartifact(uint256 _id) public payable {
        uint256 amount = msg.value;

        Artifact storage artifact = artifacts[_id];

        require(artifact.donations.length < 3);
        artifact.donators.push(msg.sender);
        artifact.donations.push(amount);

        (bool sent,) = payable(artifact.owner).call{value: amount}("");

        if(sent) {
            artifact.amountCollected = artifact.amountCollected + amount;
        }
    }

    function getDonators(uint256 _id) view public returns (address[] memory, uint256[] memory) {
        return (artifacts[_id].donators, artifacts[_id].donations);
    }

    function getartifacts() public view returns (Artifact[] memory) {
        Artifact[] memory allartifacts = new Artifact[](numberOfartifacts);

        for(uint i = 0; i < numberOfartifacts; i++) {
            Artifact storage item = artifacts[i];
            allartifacts[i] = item;
        }
        return allartifacts;
    }
}