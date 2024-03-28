import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { FaPlus, FaRegUser } from "react-icons/fa6";
import { MdOutlineDesktopMac } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaFile } from "react-icons/fa";
import { GrStorage } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineQuestionMark } from "react-icons/md";
const Sidebar = () => {
    return (
        <div>
            <aside className="sidebar w-[300px] h-screen bg-white text-black p-4 h-screen shadow-lg shadow-zinc-900 sticky">
                {/* Your sidebar links here */ }
                <div>
                    <Image src="/image 5.png" alt="Illustration" width={ 100 } height={ 100 } className='my-2 mx-auto' />
                </div>
                <div className='my-1'>
                    <p className='text-[#8A8A8A] text-center'>Grade smarter, not harder.</p>
                </div>
                <div className='my-3'>
                    <Link href="/adminPanel/NewExam" className="block mb-4 font-semibold">
                        <button className='bg-[#013D6A] text-white w-[279px] p-2 rounded-md flex justify-center items-center'>
                            <FaPlus />
                            New Exam
                        </button>
                    </Link>
                </div>
                <nav className='my-6 ml-20'>
                    <div>
                        <Link href="/adminPanel/Dashboard" className="flex items-center my-6">
                            <MdOutlineDesktopMac className="mr-4" />
                            <span>Dashboard</span>
                        </Link>
                    </div>
                    <div>
                        <Link href="/adminPanel/ExamsProfile" className="flex items-center my-6">
                            <ImProfile className="mr-4" />
                            <span>Exams Profile</span>
                        </Link>
                    </div>
                    <div>
                        <Link href="/adminPanel/Results" className="flex items-center my-6">
                            <FaFile className="mr-4" />
                            <span>Results</span>
                        </Link>
                    </div>
                    <div>
                        <Link href="/adminPanel/Storage" className="flex items-center my-6">
                            <GrStorage className="mr-4" />
                            <span>Storage</span>
                        </Link>
                    </div>
                    <div>
                        <Link href="/adminPanel/Tenants" className="flex items-center my-6">
                            <FaRegUser className="mr-4" />
                            <span>Tenants</span>
                        </Link>
                    </div>

                    <div>
                        <Link href="/adminPanel/Settings" className="flex items-center my-6">
                            <IoSettingsOutline className="mr-4" />
                            <span>Settings</span>
                        </Link>
                    </div>
                </nav>
                <div className='flex flex-col justify-center items-center my-10'>
                    <div className='bg-[#013D6A] p-4 text-white w-10 h-10 border-8 border-[#BDD3E4] rounded-full relative'>
                        <MdOutlineQuestionMark className='absolute top-2 left-2' />
                    </div>
                    <p>Need help?</p>
                </div>
                <div className='relative'>
                    <button className='absolute left-9 bg-[#0791F8] text-white w-[202.62px] p-2 rounded-md flex justify-center items-center'>Go to help center</button>
                    <p className='absolute left-20 top-16'>Version 2.0.2</p>
                </div>
                {/* Add more links as needed */ }
            </aside>
        </div>
    );
};

export default Sidebar;