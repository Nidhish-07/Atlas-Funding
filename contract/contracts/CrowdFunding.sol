// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFunding {
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
        string memory _image
    ) returns () {}

    function donateToCampaign() returns () {}

    function getDonators() returns () {}

    function getCampaigns() returns () {}
}
