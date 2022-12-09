// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract AtlasFunding {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 amountCollected;
        uint256 deadline;
        string imageUrl;
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => Campaign) campaigns;

    uint256 public numberOfCampaigns = 0;

    function createCampaign(
        address _owner,
        string memory _title,
        string memory _description,
        uint256 _target,
        uint256 _deadline,
        string memory _imageUrl
    ) public returns (uint256) {
        Campaign storage newCampaign = campaigns[numberOfCampaigns];

        require(
            newCampaign.deadline < block.timestamp,
            "The deadline must be be in future."
        );

        newCampaign.owner = _owner;
        newCampaign.title = _title;
        newCampaign.description = _description;
        newCampaign.deadline = _deadline;
        newCampaign.target = _target;
        newCampaign.amountCollected = 0;
        newCampaign.imageUrl = _imageUrl;

        numberOfCampaigns++;

        return numberOfCampaigns - 1;
    }

    function donateToCampaign(uint256 _id) public payable {
        uint256 amount = msg.value;

        Campaign storage newCampaign = campaigns[_id];

        newCampaign.donators.push(msg.sender);
        newCampaign.donations.push(amount);

        (bool sent,) = payable(newCampaign.owner).call{value: amount}("");
        // (bool sent,) = payable(newCampaign.owner).call{value: amount}("");

        if (sent) {
            newCampaign.amountCollected = newCampaign.amountCollected + amount;
        }
    }

    function getDonators(
        uint256 _id
    ) public view returns (address[] memory, uint256[] memory) {
        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);

        for (uint i = 0; i < numberOfCampaigns; i++) {
            Campaign storage item = campaigns[i];

            allCampaigns[i] = item;
        }

        return allCampaigns;
    }
}
