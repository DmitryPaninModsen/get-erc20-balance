import { ethers, Provider, InterfaceAbi } from "ethers";
import { IHasGetERC20BalanceOf } from "./interfaces";


export class ERC20Balance implements IHasGetERC20BalanceOf {
  async getERC20BalanceOf(contractAddress: string, walletAddress: string, provider: Provider): Promise<string> {
    const abi: InterfaceAbi = ['function balanceOf(address) view returns (uint256)'];

    const contract = new ethers.Contract(contractAddress, abi, provider);
    const balance = await contract.balanceOf(walletAddress);
    
    return balance.toString();
  }
}