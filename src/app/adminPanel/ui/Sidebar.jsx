"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { FaPlus, FaRegUser } from "react-icons/fa6";
import { MdOutlineDesktopMac } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaFile } from "react-icons/fa";
import { GrStorage } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineQuestionMark } from "react-icons/md";
import { usePathname, useRouter } from 'next/navigation';
const Sidebar = () => {
    const router = useRouter();
    const [activeLink, setActiveLink] = useState(router.pathname); // Initial active link

    const handleLinkClick = (href) => {
        setActiveLink(href); // Update activeLink on link click
    };
    return (
        <div>
            <aside className="bg-white text-black p-4 shadow-md shadow-gray-300 border-r-2 border-gray-300 h-screen">
                {/* Your sidebar links here */ }
                <div>
                    <Image src="/image 5.png" alt="Illustration" width={ 100 } height={ 100 } className='my-2 mx-auto' />
                </div>
                <div className='my-1'>
                    <p className='text-[#8A8A8A] text-center'>Grade smarter, not harder.</p>
                </div>
                <div className='my-3'>
                    <Link href="/adminPanel/NewExam" className="block mb-4 font-semibold">
                        <button className='bg-[#013D6A] text-white w-full p-2 rounded-md flex justify-center items-center'>
                            <FaPlus />
                            New Exam
                        </button>
                    </Link>
                </div>
                <nav className='flex justify-center items-center w-full'>
                    <div>
                        <div className="">
                            <Link
                                href="/adminPanel/Dashboard"
                                onClick={ () => handleLinkClick('/adminPanel/Dashboard') }
                                className={ `flex items-center ${activeLink === '/adminPanel/Dashboard' ? 'text-[#013D6A] font-bold rounded bg-[#F1F9FF] py-3 px-3 rounded-md' : 'py-3 px-3'}` }
                            >
                                <MdOutlineDesktopMac className="mr-4" />
                                <span>Dashboard</span>
                            </Link>
                        </div>
                        <div className="">
                            <Link href="/adminPanel/ExamsProfile"
                                onClick={ () => handleLinkClick('/adminPanel/ExamsProfile') }
                                className={ `flex items-center ${activeLink === '/adminPanel/ExamsProfile' ? 'text-[#013D6A] font-bold rounded bg-[#F1F9FF] py-3 px-3 rounded-md' : 'py-3 px-3'}` }>
                                <ImProfile className="mr-4" />
                                <span>Exams Profile</span>
                            </Link>
                        </div>
                        <div className="">
                            <Link href="/adminPanel/Results"
                                onClick={ () => handleLinkClick('/adminPanel/Results') }
                                className={ `flex items-center ${activeLink === '/adminPanel/Results' ? 'text-[#013D6A] font-bold rounded bg-[#F1F9FF] py-3 px-3 rounded-md' : 'py-3 px-3'}` }
                            >
                                <FaFile className="mr-4" />
                                <span>Results</span>
                            </Link>
                        </div>
                        <div className="">
                            <Link
                                href="/adminPanel/Storage"
                                onClick={ () => handleLinkClick('/adminPanel/Storage') }
                                className={ `flex items-center ${activeLink === '/adminPanel/Storage' ? 'text-[#013D6A] font-bold rounded bg-[#F1F9FF] py-3 px-3 rounded-md' : 'py-3 px-3'}` }
                            >
                                <GrStorage className="mr-4" />
                                <span>Storage</span>
                            </Link>
                        </div>
                        <div className="">
                            <Link
                                href="/adminPanel/Tenants"
                                onClick={ () => handleLinkClick('/adminPanel/Tenants') }
                                className={ `flex items-center mx-container ${activeLink === '/adminPanel/Tenants' ? 'text-[#013D6A] font-bold rounded bg-[#F1F9FF] py-3 px-3 rounded-md' : 'py-3 px-3'}` }>
                                <FaRegUser className="mr-4" />
                                <span>Tenants</span>
                            </Link>
                        </div>

                        <div className="">
                            <Link href="/adminPanel/Settings"
                                onClick={ () => handleLinkClick('/adminPanel/Settings') }
                                className={ `flex items-center mx-container ${activeLink === '/adminPanel/Settings' ? 'text-[#013D6A] font-bold rounded bg-[#F1F9FF] py-3 px-3 rounded-md' : 'py-3 px-3'}` }>
                                <IoSettingsOutline className="mr-4" />
                                <span>Settings</span>
                            </Link>
                        </div>
                    </div>
                </nav>
                <div className='flex flex-col justify-center items-center my-10'>
                    <div className='bg-[#013D6A] p-4 text-white w-10 h-10 border-8 border-[#BDD3E4] rounded-full relative'>
                        <MdOutlineQuestionMark className='absolute top-2 left-2' />
                    </div>
                    <p>Need help?</p>
                </div>
                <div className='relative'>
                    <button className='bg-[#0791F8] text-white w-full p-2 rounded-md flex justify-center items-center'>Go to help center</button>
                    <p className='flex items-center justify-center py-2'>Version 2.0.2</p>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;