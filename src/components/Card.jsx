import React from 'react'

const Card = ({ lightMode, firstName, lastName, message, walletAddress }) => {
    const trimmedWalletAddress = walletAddress.slice(0,4)+"..."+walletAddress.slice(-4)
    return (
        <div className={`${lightMode ? "text-black" : "text-white"} flex flex-col gap-3 p-3 border rounded-xl hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 duration-200`}>
            <div>
                <p className='text-xs '>First Name</p>
                <h3 className='text-2xl font-medium'>{firstName}</h3>
            </div>
            <div>
                <p className='text-xs '>Last Name</p>
                <h3 className='text-2xl font-medium'>{lastName}</h3>
            </div>
            <div>
                <p className='text-xs '>Message</p>
                <h3 className='text-2xl font-medium'>{message}</h3>
            </div>
            <div>
                <p className='text-xs '>Wallet Address</p>
                <h3 className='text-2xl font-medium '>{trimmedWalletAddress}</h3>
            </div>
        </div>
    )
}

export default Card