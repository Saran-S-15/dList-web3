export const ABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_firstName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_lastName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_message",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "walletAddress",
                "type": "address"
            }
        ],
        "name": "addPeople",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPoeple",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "firstName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "lastName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "message",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "walletAddress",
                        "type": "address"
                    }
                ],
                "internalType": "struct dlist.Person[]",
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
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "poepleList",
        "outputs": [
            {
                "internalType": "string",
                "name": "firstName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "lastName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "message",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "walletAddress",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalPeople",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

export const Address = "0x8aA4f8B0a1dE1566F44F8121cCdAf3D7FCb7a02A";