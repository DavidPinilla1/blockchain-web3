import Web3 from 'web3';
import abiBNBContract from './smart-contracts/BNB/BNB-ABI.json';
const { ETH_NODE_URL, ETH_ADDRESS } = process.env;
const web3 = new Web3(ETH_NODE_URL);

//get ethereum address balance
const balance = await web3.eth.getBalance(ETH_ADDRESS);
const balanceEther = web3.utils.fromWei(balance, 'ether');
console.log(balanceEther)

// interacting with an Smart contract (ERC20 token)
const BNBSCAddress='0xB8c77482e45F1F44dE1745F52C74426C631bDD52';
const BNBContract = new web3.eth.Contract(abiBNBContract,BNBSCAddress);

// getting some data on the way
const name = await BNBContract.methods.name().call();
console.log(name)

