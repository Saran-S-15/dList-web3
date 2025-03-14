import React from 'react'
import Logo from "@/images/logo.png";
import Image from 'next/image';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = ({ lightMode, setLightMode }) => {
    return (
        <div className={`flex justify-between px-5 py-3 border-b-1 rounded-b-xl bg-gradient-to-b ${lightMode ? " from-green-300 to-white text-black" : " from-green-600 to-black text-white"}`}>
            <div className='flex'>
                <div>
                    <Image src={Logo} alt='Logo' width={70} height={70} />
                </div>
                <div className='flex justify-center items-center'>
                    <h1 className='font-bold text-3xl ms-4'>dList</h1>
                </div>
            </div>

            <div className='flex gap-3 items-center'>
                <div>
                    <FaSquareXTwitter size={32} className='cursor-pointer hover:scale-110 duration-300 hover:text-green-300' />
                </div>
                <a href='https://www.linkedin.com/in/saran-s-8765b0258?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUSzdFyifRpyFY0zp%2BPRUzg%3D%3D' target='_blank'>
                    <FaLinkedin size={32} className='cursor-pointer hover:scale-110 duration-300 hover:text-green-300' />
                </a>
                <a href='https://github.com/Saran-S-15' target='_blank'>
                    <FaGithub size={32} className='cursor-pointer hover:scale-110 duration-300 hover:text-green-300' />
                </a>
                <div>
                    {
                        lightMode ? (
                            <div onClick={() => setLightMode((prev) => !prev)}>
                                <MdDarkMode size={32} className='cursor-pointer' />
                            </div>) : (
                            <div onClick={() => setLightMode((prev) => !prev)}>
                                <MdOutlineDarkMode size={32} className='cursor-pointer' />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar