"use client"
import React, { useEffect, useRef, useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { BsThreeDotsVertical, BsPencilSquare, BsTrash, BsCheck2Circle } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link';

const Action = () => {
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
    return (
        <div className='relative '>
            <BsThreeDotsVertical onClick={ handleDropdownClick } />

            { showDropdown && (
                <div className='z-10 absolute top-4 right-16 shadow-md bg-white rounded-md'>
                    <ul className='p-2'>
                        <li className='hover:bg-gray-200 p-2 '>
                            <Link href="/adminPanel/TenantDetails" className='flex items-center'><BsPencilSquare className='mr-2' /> Edit</Link>
                        </li>
                        <li className='hover:bg-gray-200 p-2 flex items-center'>
                            <BsTrash className='mr-2' /> Delete
                        </li>
                    </ul>
                </div>
            ) }
        </div>
    );
};

export default Action;