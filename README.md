# get-erc20-balance
This package allows getting balance of any given erc20 contract for any given wallet address using “balanceOf” method of ERC20 contract on any Ethereum chain.
## Installation

```bash
npm install get-erc20-balance
```
```bash
yarn add get-erc20-balance
```

## Usage
- Create util class instance
```js
import { ERC20Balance } from 'get-erc20-balance'

const erc20BalanceInstance = new ERC20Balance();
```


## API

#### `ERC20BalanceInstance.getERC20BalanceOf(contractAddress: string, walletAddress: string, provider: ethers.Provider): Promise<String>`
The method returns the balance of the given contract with a string representation: