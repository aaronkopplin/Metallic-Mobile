const fs = require("fs-extra");
const Web3 = require("web3");

const abi_address = JSON.parse(fs.readFileSync("abi_address.json"));
let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

contract = new web3.eth.Contract(abi_address["abi"], abi_address["address"]);
contract.methods.helloWorld().call((err, msg) => {
    console.log({ err, msg });
});
