import { ethers } from "ethers";
import abi from "../artifacts/contracts/Chai.sol/Chai.json"

const contractAddress="0x05F660E5eA3c638c348f4363D14d676F1983db65"
const contractABI = abi.abi

export const getContract = async() => {
    const {ethereum} = window

    if (!ethereum) {
        console.log("Please install metamask")
        return
    } 

    const provider = new ethers.BrowserProvider(ethereum)
    const signer = await provider.getSigner()
    const contract = new ethers.Contract(contractAddress, contractABI, signer)

    return contract
}