"use client"
import React, { useEffect, useRef, useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { BsThreeDotsVertical, BsPencilSquare, BsTrash, BsCheck2Circle } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Drawer from 'react-modern-drawer';
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';
import EditOrganization from './EditOrganization';
import Swal from 'sweetalert2';

const Action = ({ tenant_id }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []); // Empty dependency array ensures the event listener is added/removed only once

    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown);
    };
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const handleCloseDrawer = () => {
        setIsOpen(false);
    }
    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/organization/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                console.log('Organization deleted successfully');
                Swal.fire("organization Deleted")
                // Handle successful deletion (e.g., redirect, display success message)
            } else {
                console.error('Failed to delete organization');
                // Handle errors (e.g., display error message)
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <div className='relative '>
            <BsThreeDotsVertical onClick={ handleDropdownClick } />

            { showDropdown && (
                <div className='z-10 absolute top-4 right-16 shadow-md bg-white rounded-md'>
                    <ul className='p-2'>
                        <li className='hover:bg-gray-200 p-2 '>
                            <button onClick={ toggleDrawer } className='flex items-center'><BsPencilSquare className='mr-2' /> Edit</button>
                        </li>
                        <li className='hover:bg-gray-200 p-2 flex items-center'>
                            <button onClick={
                                Swal.fire({
                                    title: "Are you sure?",
                                    text: "You won't be able to revert this!",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "Yes, delete it!"
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        handleDelete(tenant_id)
                                    }
                                })
                            }>
                                <BsTrash className='mr-2' /> Delete
                            </button>
                        </li>
                    </ul>
                </div>
            ) }
            <Drawer
                open={ isOpen }
                onClose={ toggleDrawer }
                direction='right'
                className='bla bla bla'
                size={ 300 }
            >
                <div className='px-4 py-4'>
                    <div className='flex items-center justify-between'>
                        <p className='font-semibold'>Edit Organization</p>
                        <div>
                            <button className='text-red-600' onClick={ handleCloseDrawer }>
                                <IoMdClose />
                            </button>
                        </div>
                    </div>
                    <div className='my-4'>
                        <EditOrganization id={ tenant_id } />
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default Action;