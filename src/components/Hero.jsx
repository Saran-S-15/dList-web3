import React, { useState, useEffect } from 'react'
import Card from './Card'
import { Address, ABI } from '@/utils/person'
import Web3 from "web3"

const Hero = ({ lightMode }) => {
    const [web3, setWeb3] = useState(null);
    const [contract, setContract] = useState(null);
    const [account, setAccount] = useState("Connect Metamask");

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");

    const [getPeopleData, setGetPeopleData] = useState([]);

    async function initWeb3() {
        if (window.ethereum) {
            const web3instance = new Web3(window.ethereum);
            setWeb3(web3instance);
            try {
                await window.ethereum.enable();
                const accounts = await web3instance.eth.getAccounts();
                setAccount(accounts[0]);
            } catch (error) {
                console.log(error);
            }
        }
        else if (window.web3) {
            const web3instance = new Web3(window.web3.currentProvider);
            setWeb3(web3instance);
            const accounts = await web3instance.eth.getAccounts();
            setAccount(accounts[0]);
        }
        else {
            alert("Please install Metamask");
        }
    }

    useEffect(() => {
        if (web3) {
            const contractInstance = new web3.eth.Contract(ABI, Address);
            setContract(contractInstance);
            // callGetPeople();
        }
    }, [web3])

    async function callGetPeople() {
        if (contract) {
            const data = await contract.methods.getPoeple().call();
            setGetPeopleData(data);
        }
    }

    async function callAddPeople() {
        if (contract && firstName !== "" && lastName !== "" && message !== "" && account !== "Connect Metamask") {
            const data = await contract.methods.addPeople(firstName, lastName, message, account).send({ from: account });
            callGetPeople();
        }
        else{
            alert("Please fill all fields");
        }
    }

    return (
        <div className={`${lightMode ? "text-black" : "text-white"} flex flex-col gap-5 px-20`}>
            <div className='flex'>
                <div className='basis-1/2 flex flex-col gap-3 justify-center'>
                    <div>
                        <h1 className='text-8xl font-bold'>dList</h1>
                    </div>
                    <div>
                        <h3 className={`text-4xl ${lightMode ? "text-black/60" : "text-white/75"}`}>List your attendees on Chain</h3>
                    </div>
                    <div>
                        <p className='text-base w-3/4'>dList is a decentralised app built on the
                            ethereum blockchain. The aim is to provide on-chain listing for events
                            and built a smooth and scalable UI with Next.js, Tailwind CSS, Web3.js.
                            The Smart Contract is written using solidity and the DApp is delpoyed on the
                            sepolia eth testnet.</p>
                    </div>
                </div>

                <div className='basis-1/2 mx-12 px-16 py-12 border rounded-xl flex gap-5 flex-col mt-10'>
                    <h1 className='text-center text-3xl font-semibold'>dList Form</h1>
                    <div className='flex flex-col'>
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text' name='firstName' id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className={`${lightMode ? "bg-green-100" : "bg-black/40"} p-3 rounded-xl border`} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' name='lastName' id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className={`${lightMode ? "bg-green-100" : "bg-black/40"} p-3 rounded-xl border`} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='Message'>Message</label>
                        <input type='text' name='message' id="Message" value={message} onChange={(e) => setMessage(e.target.value)} className={`${lightMode ? "bg-green-100" : "bg-black/40"} p-3 rounded-xl border`} />
                    </div>
                    <div className='flex flex-col'>
                        <button className='font-medium px-5 py-2 bg-orange-500 rounded-xl hover:bg-orange-600 hover:cursor-pointer duration-200' onClick={initWeb3}>{account}</button>
                    </div>
                    <div className='flex flex-col'>
                        <button onClick={callAddPeople} className='font-medium px-5 py-2 bg-green-500 rounded-xl cursor-pointer hover:bg-green-600 duration-200'>Submit Data</button>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex gap-5'>
                    <h1 className='text-3xl font-medium'>List Members</h1>
                    <button className='px-5 py-2 font-medium bg-green-500 rounded-xl hover:bg-green-600 duration-200' onClick={callGetPeople}>Get Data</button>
                </div>
                <div className='mt-3 grid grid-cols-3 gap-5'>
                    {
                        getPeopleData.map((item, index) => {
                            return <Card lightMode={lightMode} key={index} firstName={item.firstName} lastName={item.lastName} message={item.message} walletAddress={item.walletAddress}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Hero