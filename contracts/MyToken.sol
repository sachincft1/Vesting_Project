// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable(msg.sender) {

    mapping(address => uint256) public balances;

    constructor(uint256 initialSupply) ERC20("MyToken", "MTK") {
        _mint(msg.sender, initialSupply * 10 ** decimals());
        balances[msg.sender] = initialSupply * 10 ** decimals();
    }

    function transferTokens(address to, uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        _transfer(_msgSender(), to, amount);
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }
}
