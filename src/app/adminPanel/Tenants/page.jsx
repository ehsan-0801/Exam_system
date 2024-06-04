"use client";
import React, { useState, useEffect } from 'react';
import Header from '../ui/Header';
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import Userslist from '../ui/Userslist';
import AddOrganization from '../ui/AddOrganization';
import Drawer from 'react-modern-drawer';
import { IoMdClose } from "react-icons/io";
import 'react-modern-drawer/dist/index.css';

const Tenants = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [tenants, setTenants] = useState([]);
    const [loading, setLoading] = useState(true);

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };
    const handleCloseDrawer = () => {
        setIsOpen(false);
    };

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/organization/");
            const Tenants = await response.json();
            setTenants(Tenants);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Header header={ 'Tenants' } subheader={ 'Total users and their licence info' } />
            <div className='border-2 rounded-md shadow-md p-4 mt-2 mx-2'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='font-bold'>Users</h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className='flex items-center border-2 border-gray-400 rounded-md px-1 ml-4'>
                            <label><CiSearch /></label>
                            <input className="outline-none" type="search" placeholder='Search Users' />
                        </div>
                        <div className='ml-4 mr-2'>
                            <select className="w-full rounded-md border border-gray-300 p-1 outline-none mx-4">
                                <option>Filter</option>
                                <option>Last Month</option>
                                <option>Last Year</option>
                            </select>
                        </div>
                        <div className='ml-4 mr-2'>
                            <button onClick={ toggleDrawer } className='bg-[#0791F8] text-white w-full p-1 rounded-md flex justify-center items-center'><FaPlus />Add Org</button>
                            <Drawer
                                open={ isOpen }
                                onClose={ toggleDrawer }
                                direction='right'
                                className='bla bla bla'
                                size={ 300 }
                            >
                                <div className='px-4 py-4'>
                                    <div className='flex items-center justify-between'>
                                        <p className='font-semibold'>Add Organization</p>
                                        <button className='text-red-600' onClick={ handleCloseDrawer }>
                                            <IoMdClose />
                                        </button>
                                    </div>
                                    <div className='my-4'>
                                        <AddOrganization fetchData={ fetchData } />
                                    </div>
                                </div>
                            </Drawer>
                        </div>
                    </div>
                </div>
                <div>
                    <Userslist tenants={ tenants } fetchData={ fetchData } loading={ loading } />
                </div>
            </div>
        </div>
    );
};

export default Tenants;
