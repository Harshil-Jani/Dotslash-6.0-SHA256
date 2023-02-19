// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Museum {

    //ayush museum_addr
    address public museum_addr = 0x093EbC28c93Fe40B6C5A0AD31d2e956b5c1ee0Bf;

    //ramesh acc
    address public organzation = 0xeaD0de8b7D6C0D03BeBd095d6b2D2E54D02fDA51;
    struct Artifact {
        address owner;
        string name;
        string museum;
        string title;
        string description;
        // string category;
        uint256 museum_amtCollected;
        uint256 org_amtCollected;
        string image;
        address[] donators;
        uint256[] donations;
    }

    event Donate(address acc1, address acc2, uint256 amt);
    
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
        // artifact.amountCollected = 0;
        artifact.image = _image;

        numberOfartifacts++;

        return numberOfartifacts - 1;
    }

    function donateToartifact() public payable returns(bool){
        // uint256 amount = msg.value;
        // donateToartifact({value: amt})
        // Artifact storage artifact = artifacts[_id];

        // require(artifact.donations.length < 3);
        // artifact.donators.push(msg.sender);
        // artifact.donations.push(amount);
        // let amount_gwei = new BigNumber.from(amount).shiftedBy(9);
        uint256 org_share = msg.value/2;
        payable(organzation).transfer(org_share);
        payable(museum_addr).transfer(org_share);
        emit Donate(museum_addr, organzation, org_share);

        // (bool sent,) = payable(artifact.owner).call{value: amount}("");

        // if(sent) {
        //     .amountCollected = artifact.amountCollected + amount;
        // }
        return true;
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


    // constructor() payable public {
    //     owner = msg.sender;
    // }
    
    // function donate() public payable returns (bool) {

    //     uint256 org_share = msg.value/2;

    //     payable(organzation).transfer(org_share);
    //     payable(museum).transfer(org_share);
    //     return true;

    // }    
    function getBalance_org(uint256 _id) public view returns(uint256) {
        // for(uint i = 0; i < numberOfartifacts; i++) {
        //     if(i == _id)
        //     {
        //         return address(artifact[i].organzation).balance;
        //     } 
        // }
        return address(organzation).balance;
    }

    function getBalance_museum(uint256 _id) public view returns(uint256) {
        // for(uint i = 0; i < numberOfartifacts; i++){
        //     if(i == _id)
        //     {
        //         return address(artifact[i].museum).balance;
        //     }
        // }
        return address(museum_addr).balance;
    }
}