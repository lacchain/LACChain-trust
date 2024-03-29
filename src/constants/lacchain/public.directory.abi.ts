export const PUBLIC_DIRECTORY_ABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'previousAdmin',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAdmin',
        type: 'address'
      }
    ],
    name: 'AdminChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'beacon',
        type: 'address'
      }
    ],
    name: 'BeaconUpgraded',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'cotAddress',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'memberId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'status',
        type: 'bool'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'prevBlock',
        type: 'uint256'
      }
    ],
    name: 'CoTChange',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'contractPrevBlock',
        type: 'uint256'
      }
    ],
    name: 'ContractChange',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'did',
        type: 'string'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'memberId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'prevBlock',
        type: 'uint256'
      }
    ],
    name: 'DidAssociated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'did',
        type: 'string'
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'memberId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'prevBlock',
        type: 'uint256'
      }
    ],
    name: 'DidDisassociated',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8'
      }
    ],
    name: 'Initialized',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'memberId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'did',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'iat',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'exp',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'expires',
        type: 'bool'
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'rawData',
        type: 'bytes'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'currentTimestap',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'prevBlock',
        type: 'uint256'
      }
    ],
    name: 'MemberChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address'
      }
    ],
    name: 'Upgraded',
    type: 'event'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'did',
            type: 'string'
          },
          {
            internalType: 'uint256',
            name: 'exp',
            type: 'uint256'
          },
          {
            internalType: 'bool',
            name: 'expires',
            type: 'bool'
          },
          {
            internalType: 'address',
            name: 'chainOfTrustAddress',
            type: 'address'
          },
          {
            internalType: 'bytes',
            name: 'rawData',
            type: 'bytes'
          }
        ],
        internalType: 'struct IPublicDirectory.setMember',
        name: '_member',
        type: 'tuple'
      }
    ],
    name: 'addMember',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'cotAddress',
        type: 'address'
      },
      {
        internalType: 'string',
        name: 'did',
        type: 'string'
      }
    ],
    name: 'associateCoTAddressByDid',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string'
      },
      {
        internalType: 'string',
        name: 'didToAssociate',
        type: 'string'
      }
    ],
    name: 'associateDid',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'changed',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'contractPrevBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'cotAddress',
        type: 'address'
      },
      {
        internalType: 'string',
        name: 'did',
        type: 'string'
      }
    ],
    name: 'disassociateCoTAddressByDid',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string'
      },
      {
        internalType: 'string',
        name: 'didToDisassociate',
        type: 'string'
      }
    ],
    name: 'disassociateDid',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string'
      }
    ],
    name: 'getMemberDetails',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'exp',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'iat',
                type: 'uint256'
              },
              {
                internalType: 'uint256',
                name: 'uat',
                type: 'uint256'
              },
              {
                internalType: 'bool',
                name: 'expires',
                type: 'bool'
              }
            ],
            internalType: 'struct IPublicDirectory.member',
            name: 'memberData',
            type: 'tuple'
          },
          {
            internalType: 'uint256',
            name: 'lastBlockChange',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'memberId',
            type: 'uint256'
          }
        ],
        internalType: 'struct IPublicDirectory.fullDetails',
        name: 'foundMember',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'id',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'trustedForwarderAddress',
        type: 'address'
      }
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      },
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    name: 'isCot',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'memberCounter',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'memberDetails',
    outputs: [
      {
        internalType: 'uint256',
        name: 'exp',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'iat',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'uat',
        type: 'uint256'
      },
      {
        internalType: 'bool',
        name: 'expires',
        type: 'bool'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'proxiableUUID',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'did',
        type: 'string'
      }
    ],
    name: 'removeMemberByDid',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'did',
            type: 'string'
          },
          {
            internalType: 'uint256',
            name: 'exp',
            type: 'uint256'
          },
          {
            internalType: 'bool',
            name: 'expires',
            type: 'bool'
          },
          {
            internalType: 'address',
            name: 'chainOfTrustAddress',
            type: 'address'
          },
          {
            internalType: 'bytes',
            name: 'rawData',
            type: 'bytes'
          }
        ],
        internalType: 'struct IPublicDirectory.setMember',
        name: '_member',
        type: 'tuple'
      }
    ],
    name: 'updateMemberDetailsByDid',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address'
      }
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address'
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes'
      }
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'version',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  }
];
