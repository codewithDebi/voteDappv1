export const CONTRACT_ADDRESS = '0x3ea6dad667bdCAca87A428f2fF1CCA7aea24A6C3'
export const CONTRACT_ABI =    [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_electionId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_contestantId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_voterAddress",
        "type": "address"
      }
    ],
    "name": "castVote",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "contestants",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "platform",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "voteCount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "contestantId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "stateCode",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "constituencyCode",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "electionID",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "electionNames",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "elections",
    "outputs": [
      {
        "internalType": "string",
        "name": "electionName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "electionDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "startTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "electionId",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "filteredContestants",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "platform",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "voteCount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "contestantId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "stateCode",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "constituencyCode",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "electionID",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllContestants",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "platform",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "voteCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "contestantId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "stateCode",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "constituencyCode",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "electionID",
            "type": "uint256"
          }
        ],
        "internalType": "struct Vote.Contestant[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllElections",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "electionName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "electionDate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "startTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endTime",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "electionId",
            "type": "uint256"
          }
        ],
        "internalType": "struct Vote.Election[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_contestantId",
        "type": "uint256"
      }
    ],
    "name": "getContestantInfo",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getElectionNames",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_electionId",
        "type": "uint256"
      }
    ],
    "name": "getElectionScore",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "platform",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "voteCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "contestantId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "stateCode",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "constituencyCode",
            "type": "uint256"
          }
        ],
        "internalType": "struct Vote.ElectionScore[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getNumOfVoters",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRegistrar",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_voterAddress",
        "type": "address"
      }
    ],
    "name": "getVoterInfo",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "age",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "stateCode",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "voterIdNumber",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "constituencyCode",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "voterAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "voted",
            "type": "uint256"
          }
        ],
        "internalType": "struct Vote.Voter",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_platform",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_stateCode",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_constituencyCode",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_electionID",
        "type": "uint256"
      }
    ],
    "name": "registerContestant",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_electionName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_electionDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_startTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_endTime",
        "type": "uint256"
      }
    ],
    "name": "registerElection",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_age",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_stateCode",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_constituencyCode",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_voterIdNumber",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_voterAddress",
        "type": "address"
      }
    ],
    "name": "registerVoter",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "voters",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "age",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "stateCode",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "voterIdNumber",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "constituencyCode",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "voterAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "voted",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
