import { JsonRpcProvider } from 'ethers';
import { ERC20Balance } from '../../src/utils/ERC20Balance';

describe('ERC20Balance tests', () => {
  const erc20Balance = new ERC20Balance();
  
  const url = "https://eth.llamarpc.com"
  const network = 1;

  const contractAddress = '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE';
  const walletAddress = '0x1C4b70a3968436B9A0a9cf5205c787eb81Bb558c';

  const actualBalanceValue = "3000000000000000000020000000000"


  it('should return the correct balance for the ERC20 contract', async () => {
    const provider = new JsonRpcProvider(url, network)

    const balanceValue = await erc20Balance.getERC20BalanceOf(
      contractAddress,
      walletAddress,
      provider
    );

    expect(balanceValue).toEqual(actualBalanceValue)
  });
})



