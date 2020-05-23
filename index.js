import Web3 from 'web3';
const { ETH_NODE_URL, ETH_ADDRESS } = process.env;
const web3 = new Web3(ETH_NODE_URL);
//get ethereum address balance
const balance = await web3.eth.getBalance(ETH_ADDRESS);
const balanceEther = web3.utils.fromWei(balance, 'ether')
console.log(balanceEther)