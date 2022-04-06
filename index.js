const express =require('express');
const app = express();
const port = 8080;
const Web3 = require('web3');

function getWeb3() { 
    const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
    return web3;
}

//계좌 불러오기
async function getAccounts() {
    try {
        const accounts = await getWeb3().eth.getAccounts(); 
        console.log(accounts);
        return accounts;
    } catch (e) {
        console.log(e);
        return e;
    }
}

//가스비 불러오기
async function getGasPrice() {
    try {
        const gasPrice = await getWeb3().eth.getGasPrice();
        console.log(gasPrice);
        return gasPrice;
    } catch (e) {
        console.log(e);
        return e;
    }
}

//블록정보 가져오기
async function getBlock() {
    try {
        const getBlock = await getWeb3().eth.getBlock("latest");
        console.log(getBlock);
        return getBlock;
    } catch (e) {
        console.log(e);
        return e;
    }
}

app.get('/', (req, res) => {
    getAccounts().then((accounts) => {
        res.send(accounts);
    })
});

app.get('/gasprice', (req, res) => {
    getGasPrice().then((gasPrice) => {
        res.send(gasPrice);
    })
})

app.get('/getblock', (req, res) => {
    getBlock().then((getBlock) => {
        res.send(getBlock);
    })
})

app.listen(port, () => {
	console.log('Listening...');
});