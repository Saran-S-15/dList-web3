import React from 'react'
import Image from 'next/image';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Logo from "@/images/logo.png";

const Footer = ({ lightMode }) => {
    return (
        <div className={`bg-gradient-to-t flex justify-around px-5 py-3 border-t-1 rounded-t-xl ${lightMode ? "from-green-300 to-white text-black" : "from-green-600 to-black text-white"} mt-6`}>
            <div>
                <div className='flex'>
                    <div>
                        <Image src={Logo} alt='Logo' width={70} height={70} />
                    </div>
                    <div className='flex items-end'>
                        <h1 className='font-bold text-3xl ms-4'>dList</h1>
                    </div>
                </div>
                <div className='ml-2'>
                    <p className='text-sm w-1/2'>dList is a decentralised registration platform that is built using Next.js, Tailwind CSS, and Web3.js</p>
                </div>
            </div>

            <div className='flex flex-col justify-around'>
                <div className='flex flex-col gap-3 text-xl'>
                    <div>
                        <div>
                            <a href='http://' target='_blank' className='hover:underline hover:underline-offset-4'>Privacy</a>
                        </div>
                        <div>
                            <a href='http://' target='_blank' className='hover:underline hover:underline-offset-4'>Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div>
                        <FaSquareXTwitter size={32} className='cursor-pointer hover:scale-110 duration-300 hover:text-green-300' />
                    </div>
                    <a href='https://www.linkedin.com/in/saran-s-8765b0258?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUSzdFyifRpyFY0zp%2BPRUzg%3D%3D' target='_blank' rel=''>
                        <FaLinkedin size={32} className='cursor-pointer hover:scale-110 duration-300 hover:text-green-300' />
                    </a>
                    <a href='https://github.com/Saran-S-15' target='_blank' rel=''>
                        <FaGithub size={32} className='cursor-pointer hover:scale-110 duration-300 hover:text-green-300' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer