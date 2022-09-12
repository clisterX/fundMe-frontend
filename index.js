import { ethers } from "./ethers-5.6.esm.min.js"
import {abi, contractAddress} from "./constants.js"

const connectButton = document.getElementById("connectButton")
const withdrawButton = document.getElementById("withdrawButton")
const fundButton = document.getElementById("fundButton")
const balanceButton = document.getElementById("balanceButton")
connectButton.onclick = connect
fundButton.onclick = fund


async function connect() {
  
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" })
    } catch (error) {
       console.log(error)
    }       
    connectButton.innerHTML = "Connected"
    const accounts = await ethereum.request({ method: "eth_accounts" })
    console.log(accounts)
  } else {
    connectButton.innerHTML = "Please install MetaMask"
  }
}

async function fund(){
  const ethAmount = "77"  
  console.log("funding with: ", ethAmount)
    if (typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        console.log(signer)
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try{
        const transactionResponse = await contract.fund({
        value: ethers.utils.parseEther(ethAmount)
        })
        await listenForTransaction(transactionResponse, provider)
          
        } catch (error){
          console.log(error)
        }
    }
    
}

function listenForTransaction(transactionResponse, provider){
  console.log("mining", transactionResponse.hash)
  return new Promise()
  provider.on(transactionResponse.hash, (transactionReceipt) => {
    console.log("completed with", transactionReceipt, "confirmations")
  })
    
}
