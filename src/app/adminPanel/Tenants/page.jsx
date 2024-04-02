import React from 'react';
import Header from '../ui/Header';
import { CiSearch } from "react-icons/ci";
import { FaPlus, FaRegUser } from "react-icons/fa6";
import Userslist from '../ui/Userslist';
const Tenants = () => {
    return (
        <div>
            <Header header={ 'Tenants' } subheader={ 'Total users and their licence info' } />
            <div className='border-2  rounded-md shadow-md p-4 mt-2 mx-2'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='font-bold'>Users</h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className='flex items-center border-2 border-gray-400 rounded-md px-1 ml-4'>
                            <label htmlFor="" className=''><CiSearch /></label>
                            <input className="outline-none" type="search" placeholder='Search Users' />
                        </div>
                        <div className='ml-4 mr-2'>
                            <select
                                className="w-full rounded-md border border-gray-300 p-1 outline-none mx-4"
                            >
                                <option>
                                    Filter
                                </option>
                                <option>
                                    Last Month
                                </option>
                                <option>
                                    Last Year
                                </option>
                            </select>
                        </div>
                        <div className='ml-4 mr-2'>
                            <select
                                className="w-full rounded-md border border-gray-300 p-1 outline-none mx-4"
                            >
                                <option>
                                    Filter
                                </option>
                                <option>
                                    Last Month
                                </option>
                                <option>
                                    Last Year
                                </option>
                            </select>
                        </div>
                        <div className='ml-4 mr-2'>
                            <button className='bg-[#0791F8] text-white w-full p-1 rounded-md flex justify-center items-center'><FaPlus />Add Org</button>
                        </div>
                    </div>
                </div>
                <div>
                    <Userslist />
                </div>
            </div>

        </div >
    );
};

export default Tenants;