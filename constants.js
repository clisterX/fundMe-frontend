export const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
export const abi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "priceFeedAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "FundMe_NotOwner",
      "type": "error"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "inputs": [],
      "name": "MINIMUM_USD",
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
      "name": "cheaperWithdraw",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "fund",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "funder",
          "type": "address"
        }
      ],
      "name": "getAddressToAmountFunded",
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
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getFunder",
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
      "inputs": [],
      "name": "getOwner",
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
      "inputs": [],
      "name": "getPriceFeed",
      "outputs": [
        {
          "internalType": "contract AggregatorV3Interface",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b50604051620013003803806200130083398181016040528101906200003791906200012a565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200015c565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000f282620000c5565b9050919050565b6200010481620000e5565b81146200011057600080fd5b50565b6000815190506200012481620000f9565b92915050565b600060208284031215620001435762000142620000c0565b5b6000620001538482850162000113565b91505092915050565b611194806200016c6000396000f3fe60806040526004361061007f5760003560e01c80639e87a5cd1161004e5780639e87a5cd14610135578063b60d428814610160578063be2693f01461016a578063d7b4750c146101745761008e565b80630343fb25146100985780633ccfd60b146100d55780636b69a592146100df578063893d20e81461010a5761008e565b3661008e5761008c6101b1565b005b6100966101b1565b005b3480156100a457600080fd5b506100bf60048036038101906100ba9190610acc565b6102eb565b6040516100cc9190610b12565b60405180910390f35b6100dd610333565b005b3480156100eb57600080fd5b506100f4610575565b6040516101019190610b12565b60405180910390f35b34801561011657600080fd5b5061011f610582565b60405161012c9190610b3c565b60405180910390f35b34801561014157600080fd5b5061014a6105ac565b6040516101579190610bb6565b60405180910390f35b6101686101b1565b005b6101726105d6565b005b34801561018057600080fd5b5061019b60048036038101906101969190610bfd565b61089e565b6040516101a89190610b3c565b60405180910390f35b6802b5e3af16b18800006101f0600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16346108e690919063ffffffff16565b1015610231576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022890610c87565b60405180910390fd5b346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461027f9190610cd6565b925050819055506001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103ba576040517f10e0797900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b600180549050811015610465576000600182815481106103e0576103df610d2c565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050808061045d90610d5b565b9150506103bd565b50600067ffffffffffffffff81111561048157610480610da4565b5b6040519080825280602002602001820160405280156104af5781602001602082028036833780820191505090505b50600190805190602001906104c59291906109c2565b5060003373ffffffffffffffffffffffffffffffffffffffff16476040516104ec90610e04565b60006040518083038185875af1925050503d8060008114610529576040519150601f19603f3d011682016040523d82523d6000602084013e61052e565b606091505b5050905080610572576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056990610e65565b60405180910390fd5b50565b6802b5e3af16b188000081565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461065d576040517f10e0797900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060018054806020026020016040519081016040528092919081815260200182805480156106e157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610697575b5050505050905060005b815181101561076b57600082828151811061070957610708610d2c565b5b6020026020010151905060008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050808061076390610d5b565b9150506106eb565b50600067ffffffffffffffff81111561078757610786610da4565b5b6040519080825280602002602001820160405280156107b55781602001602082028036833780820191505090505b50600190805190602001906107cb9291906109c2565b506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff164760405161081490610e04565b60006040518083038185875af1925050503d8060008114610851576040519150601f19603f3d011682016040523d82523d6000602084013e610856565b606091505b505090508061089a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089190610e65565b60405180910390fd5b5050565b6000600182815481106108b4576108b3610d2c565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000806108f283610922565b90506000670de0b6b3a7640000858361090b9190610e85565b6109159190610f0e565b9050809250505092915050565b6000808273ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b15801561096b57600080fd5b505afa15801561097f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a39190610fcc565b5050509150506402540be400816109ba9190611047565b915050919050565b828054828255906000526020600020908101928215610a3b579160200282015b82811115610a3a5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906109e2565b5b509050610a489190610a4c565b5090565b5b80821115610a65576000816000905550600101610a4d565b5090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a9982610a6e565b9050919050565b610aa981610a8e565b8114610ab457600080fd5b50565b600081359050610ac681610aa0565b92915050565b600060208284031215610ae257610ae1610a69565b5b6000610af084828501610ab7565b91505092915050565b6000819050919050565b610b0c81610af9565b82525050565b6000602082019050610b276000830184610b03565b92915050565b610b3681610a8e565b82525050565b6000602082019050610b516000830184610b2d565b92915050565b6000819050919050565b6000610b7c610b77610b7284610a6e565b610b57565b610a6e565b9050919050565b6000610b8e82610b61565b9050919050565b6000610ba082610b83565b9050919050565b610bb081610b95565b82525050565b6000602082019050610bcb6000830184610ba7565b92915050565b610bda81610af9565b8114610be557600080fd5b50565b600081359050610bf781610bd1565b92915050565b600060208284031215610c1357610c12610a69565b5b6000610c2184828501610be8565b91505092915050565b600082825260208201905092915050565b7f596f75206e65656420746f207370656e64206d6f726520455448210000000000600082015250565b6000610c71601b83610c2a565b9150610c7c82610c3b565b602082019050919050565b60006020820190508181036000830152610ca081610c64565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610ce182610af9565b9150610cec83610af9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610d2157610d20610ca7565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000610d6682610af9565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610d9957610d98610ca7565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600081905092915050565b50565b6000610dee600083610dd3565b9150610df982610dde565b600082019050919050565b6000610e0f82610de1565b9150819050919050565b7f43616c6c206661696c6564000000000000000000000000000000000000000000600082015250565b6000610e4f600b83610c2a565b9150610e5a82610e19565b602082019050919050565b60006020820190508181036000830152610e7e81610e42565b9050919050565b6000610e9082610af9565b9150610e9b83610af9565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610ed457610ed3610ca7565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610f1982610af9565b9150610f2483610af9565b925082610f3457610f33610edf565b5b828204905092915050565b600069ffffffffffffffffffff82169050919050565b610f5e81610f3f565b8114610f6957600080fd5b50565b600081519050610f7b81610f55565b92915050565b6000819050919050565b610f9481610f81565b8114610f9f57600080fd5b50565b600081519050610fb181610f8b565b92915050565b600081519050610fc681610bd1565b92915050565b600080600080600060a08688031215610fe857610fe7610a69565b5b6000610ff688828901610f6c565b955050602061100788828901610fa2565b945050604061101888828901610fb7565b935050606061102988828901610fb7565b925050608061103a88828901610f6c565b9150509295509295909350565b600061105282610f81565b915061105d83610f81565b9250827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211600084136000841316161561109c5761109b610ca7565b5b817f800000000000000000000000000000000000000000000000000000000000000005831260008412600084131616156110d9576110d8610ca7565b5b827f8000000000000000000000000000000000000000000000000000000000000000058212600084136000841216161561111657611115610ca7565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff058212600084126000841216161561115357611152610ca7565b5b82820290509291505056fea2646970667358221220b71be738a0ad1cd9fe11b45130c3c1d05771f29fbd1d13bcb98c4fc507b1757b64736f6c63430008090033",
  "deployedBytecode": "0x60806040526004361061007f5760003560e01c80639e87a5cd1161004e5780639e87a5cd14610135578063b60d428814610160578063be2693f01461016a578063d7b4750c146101745761008e565b80630343fb25146100985780633ccfd60b146100d55780636b69a592146100df578063893d20e81461010a5761008e565b3661008e5761008c6101b1565b005b6100966101b1565b005b3480156100a457600080fd5b506100bf60048036038101906100ba9190610acc565b6102eb565b6040516100cc9190610b12565b60405180910390f35b6100dd610333565b005b3480156100eb57600080fd5b506100f4610575565b6040516101019190610b12565b60405180910390f35b34801561011657600080fd5b5061011f610582565b60405161012c9190610b3c565b60405180910390f35b34801561014157600080fd5b5061014a6105ac565b6040516101579190610bb6565b60405180910390f35b6101686101b1565b005b6101726105d6565b005b34801561018057600080fd5b5061019b60048036038101906101969190610bfd565b61089e565b6040516101a89190610b3c565b60405180910390f35b6802b5e3af16b18800006101f0600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16346108e690919063ffffffff16565b1015610231576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022890610c87565b60405180910390fd5b346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461027f9190610cd6565b925050819055506001339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103ba576040517f10e0797900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b600180549050811015610465576000600182815481106103e0576103df610d2c565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050808061045d90610d5b565b9150506103bd565b50600067ffffffffffffffff81111561048157610480610da4565b5b6040519080825280602002602001820160405280156104af5781602001602082028036833780820191505090505b50600190805190602001906104c59291906109c2565b5060003373ffffffffffffffffffffffffffffffffffffffff16476040516104ec90610e04565b60006040518083038185875af1925050503d8060008114610529576040519150601f19603f3d011682016040523d82523d6000602084013e61052e565b606091505b5050905080610572576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056990610e65565b60405180910390fd5b50565b6802b5e3af16b188000081565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461065d576040517f10e0797900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600060018054806020026020016040519081016040528092919081815260200182805480156106e157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610697575b5050505050905060005b815181101561076b57600082828151811061070957610708610d2c565b5b6020026020010151905060008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050808061076390610d5b565b9150506106eb565b50600067ffffffffffffffff81111561078757610786610da4565b5b6040519080825280602002602001820160405280156107b55781602001602082028036833780820191505090505b50600190805190602001906107cb9291906109c2565b506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff164760405161081490610e04565b60006040518083038185875af1925050503d8060008114610851576040519150601f19603f3d011682016040523d82523d6000602084013e610856565b606091505b505090508061089a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089190610e65565b60405180910390fd5b5050565b6000600182815481106108b4576108b3610d2c565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000806108f283610922565b90506000670de0b6b3a7640000858361090b9190610e85565b6109159190610f0e565b9050809250505092915050565b6000808273ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b15801561096b57600080fd5b505afa15801561097f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a39190610fcc565b5050509150506402540be400816109ba9190611047565b915050919050565b828054828255906000526020600020908101928215610a3b579160200282015b82811115610a3a5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906109e2565b5b509050610a489190610a4c565b5090565b5b80821115610a65576000816000905550600101610a4d565b5090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a9982610a6e565b9050919050565b610aa981610a8e565b8114610ab457600080fd5b50565b600081359050610ac681610aa0565b92915050565b600060208284031215610ae257610ae1610a69565b5b6000610af084828501610ab7565b91505092915050565b6000819050919050565b610b0c81610af9565b82525050565b6000602082019050610b276000830184610b03565b92915050565b610b3681610a8e565b82525050565b6000602082019050610b516000830184610b2d565b92915050565b6000819050919050565b6000610b7c610b77610b7284610a6e565b610b57565b610a6e565b9050919050565b6000610b8e82610b61565b9050919050565b6000610ba082610b83565b9050919050565b610bb081610b95565b82525050565b6000602082019050610bcb6000830184610ba7565b92915050565b610bda81610af9565b8114610be557600080fd5b50565b600081359050610bf781610bd1565b92915050565b600060208284031215610c1357610c12610a69565b5b6000610c2184828501610be8565b91505092915050565b600082825260208201905092915050565b7f596f75206e65656420746f207370656e64206d6f726520455448210000000000600082015250565b6000610c71601b83610c2a565b9150610c7c82610c3b565b602082019050919050565b60006020820190508181036000830152610ca081610c64565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610ce182610af9565b9150610cec83610af9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610d2157610d20610ca7565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000610d6682610af9565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610d9957610d98610ca7565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600081905092915050565b50565b6000610dee600083610dd3565b9150610df982610dde565b600082019050919050565b6000610e0f82610de1565b9150819050919050565b7f43616c6c206661696c6564000000000000000000000000000000000000000000600082015250565b6000610e4f600b83610c2a565b9150610e5a82610e19565b602082019050919050565b60006020820190508181036000830152610e7e81610e42565b9050919050565b6000610e9082610af9565b9150610e9b83610af9565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610ed457610ed3610ca7565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610f1982610af9565b9150610f2483610af9565b925082610f3457610f33610edf565b5b828204905092915050565b600069ffffffffffffffffffff82169050919050565b610f5e81610f3f565b8114610f6957600080fd5b50565b600081519050610f7b81610f55565b92915050565b6000819050919050565b610f9481610f81565b8114610f9f57600080fd5b50565b600081519050610fb181610f8b565b92915050565b600081519050610fc681610bd1565b92915050565b600080600080600060a08688031215610fe857610fe7610a69565b5b6000610ff688828901610f6c565b955050602061100788828901610fa2565b945050604061101888828901610fb7565b935050606061102988828901610fb7565b925050608061103a88828901610f6c565b9150509295509295909350565b600061105282610f81565b915061105d83610f81565b9250827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211600084136000841316161561109c5761109b610ca7565b5b817f800000000000000000000000000000000000000000000000000000000000000005831260008412600084131616156110d9576110d8610ca7565b5b827f8000000000000000000000000000000000000000000000000000000000000000058212600084136000841216161561111657611115610ca7565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff058212600084126000841216161561115357611152610ca7565b5b82820290509291505056fea2646970667358221220b71be738a0ad1cd9fe11b45130c3c1d05771f29fbd1d13bcb98c4fc507b1757b64736f6c63430008090033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}