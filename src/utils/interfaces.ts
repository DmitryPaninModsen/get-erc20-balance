import { Provider } from "ethers";


export interface IHasGetERC20BalanceOf {
	getERC20BalanceOf(contractAddress: string, walletAddress: string, provider: Provider): Promise<string>;
}