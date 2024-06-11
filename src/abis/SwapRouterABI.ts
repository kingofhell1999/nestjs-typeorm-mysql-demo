const SwapRouterABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_vault',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_usdg',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_weth',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'tokenIn',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'tokenOut',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountIn',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountOut',
        type: 'uint256',
      },
    ],
    name: 'Swap',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_plugin',
        type: 'address',
      },
    ],
    name: 'addPlugin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_plugin',
        type: 'address',
      },
    ],
    name: 'approvePlugin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'approvedPlugins',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_collateralToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_indexToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_collateralDelta',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_sizeDelta',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_isLong',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: '_receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
    ],
    name: 'decreasePosition',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_path',
        type: 'address[]',
      },
      {
        internalType: 'address',
        name: '_indexToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_collateralDelta',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_sizeDelta',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_isLong',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: '_receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minOut',
        type: 'uint256',
      },
    ],
    name: 'decreasePositionAndSwap',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_path',
        type: 'address[]',
      },
      {
        internalType: 'address',
        name: '_indexToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_collateralDelta',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_sizeDelta',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_isLong',
        type: 'bool',
      },
      {
        internalType: 'address payable',
        name: '_receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minOut',
        type: 'uint256',
      },
    ],
    name: 'decreasePositionAndSwapETH',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_collateralToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_indexToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_collateralDelta',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_sizeDelta',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_isLong',
        type: 'bool',
      },
      {
        internalType: 'address payable',
        name: '_receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
    ],
    name: 'decreasePositionETH',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_plugin',
        type: 'address',
      },
    ],
    name: 'denyPlugin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'directPoolDeposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gov',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_path',
        type: 'address[]',
      },
      {
        internalType: 'address',
        name: '_indexToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amountIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_sizeDelta',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_isLong',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
    ],
    name: 'increasePosition',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_path',
        type: 'address[]',
      },
      {
        internalType: 'address',
        name: '_indexToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_minOut',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_sizeDelta',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_isLong',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
    ],
    name: 'increasePositionETH',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collateralToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_indexToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_collateralDelta',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_sizeDelta',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_isLong',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: '_receiver',
        type: 'address',
      },
    ],
    name: 'pluginDecreasePosition',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collateralToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_indexToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_sizeDelta',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_isLong',
        type: 'bool',
      },
    ],
    name: 'pluginIncreasePosition',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'pluginTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'plugins',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_plugin',
        type: 'address',
      },
    ],
    name: 'removePlugin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_gov',
        type: 'address',
      },
    ],
    name: 'setGov',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_path',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: '_amountIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minOut',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_receiver',
        type: 'address',
      },
    ],
    name: 'swap',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_path',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: '_minOut',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_receiver',
        type: 'address',
      },
    ],
    name: 'swapETHToTokens',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_path',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: '_amountIn',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minOut',
        type: 'uint256',
      },
      {
        internalType: 'address payable',
        name: '_receiver',
        type: 'address',
      },
    ],
    name: 'swapTokensToETH',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'usdg',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'vault',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'weth',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];

export default SwapRouterABI;
