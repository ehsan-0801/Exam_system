import React from 'react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoDesktop } from "react-icons/io5";
import { AiFillProfile } from "react-icons/ai";
import { TbFileHorizontal } from "react-icons/tb";
import { GrStorage } from "react-icons/gr";
import { FaRegUser, FaPlus } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";
import { useRouter } from 'next/router';
const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen w-full">
            <div className="hidden border-r bg-white-500 lg:block">
                <aside className="w-64 text-black shadow-lg w-[320px]">
                    <div className='mb-4 mx-auto'>
                        <Image className='my-2 mx-auto' src="/image 5.png" alt="Illustration" width={ 100 } height={ 100 } />
                        <p className='text-center text-gray-500'>Grade smarter, not harder.</p>
                    </div>
                    <a
                        className="rounded-lg px-3 py-2 bg-[#013D6A] w-[300px] mx-auto text-white flex justify-center items-center my-6"
                        href="#"
                        rel="ugc"
                    >
                        <FaPlus className='mr-2' />
                        New Exam
                    </a>
                    <div className="flex h-full flex-col gap-2 w-[320px]">
                        <nav className="grid items-start px-4 mx-auto my-4 text-sm font-medium">
                            <Link href="/adminPanel/Dashboard" className={ `${activeItem === 'Dashboard' ? 'text-blue-500' : 'text-black'
                                } flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-700 mb-4` }
                                onClick={ () => handleItemClick('Dashboard') }>
                                <IoDesktop />
                                Dashboard
                            </Link>
                            <Link href="/adminPanel/ExamsProfile" className={ `${activeItem === 'ExamsProfile' ? 'text-blue-500' : 'text-black'
                                } flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 mb-4` }
                                onClick={ () => handleItemClick('ExamsProfile') }>
                                <AiFillProfile />
                                Exams Profile
                            </Link>
                            <Link href="/adminPanel/Results" className={ `${activeItem === 'Results' ? 'text-blue-500' : 'text-black'
                                } flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 mb-4` }
                                onClick={ () => handleItemClick('Results') }>
                                <TbFileHorizontal />
                                Results
                            </Link>
                            <Link href="/adminPanel/Storage" className={ `${activeItem === 'Storage' ? 'text-blue-500' : 'text-black'
                                } flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 mb-4` }
                                onClick={ () => handleItemClick('Storage') }>
                                <GrStorage />
                                Storage
                            </Link>
                            <Link href="/adminPanel/Tenants" className={ `${activeItem === 'Tenants' ? 'text-blue-500' : 'text-black'
                                } flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 mb-4` }
                                onClick={ () => handleItemClick('Tenants') }>
                                <FaRegUser />
                                Tenants
                            </Link>
                            <Link href="/adminPanel/Settings" className={ `${activeItem === 'Settings' ? 'text-blue-500' : 'text-black'
                                } flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 mb-4` }
                                onClick={ () => handleItemClick('Settings') }>
                                <IoSettingsOutline />
                                Settings
                            </Link>
                        </nav>
                        <div className='flex flex-col items-center justify-center '>
                            <p className='border-4 border-[#BDD3E4] w-[18%] rounded-full bg-[#013D6A] p-4 text-center text-white'><FaQuestion /></p>
                            <p className='text-[#013D6A] text-2xl'>Need Help?</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <button className='bg-[#0791F8] text-center text-white p-3 rounded-md'>Go to help center</button>
                        </div>
                        <p className='text-center'>Version  2.0.2</p>
                    </div>
                </aside>
            </div>
            <div className="flex-1 flex flex-col">
                <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-6">
                    { children }
                </main>
            </div>
        </div>
    );
};

export default Layout;