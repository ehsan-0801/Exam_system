"use client"
import React, { useState, useRef, useEffect } from 'react';
import { BsThreeDotsVertical, BsPencilSquare, BsTrash, BsCheck2Circle } from "react-icons/bs";

const examData = { // Replace with your actual exam data fetching logic
    createdBy: 'Rafiqul Islam Rana',
    date: '13-11-23',
    title: 'Medical Exam May 2024',
    subject: 'Engineering Drawing',
    correctMarks: 1,
    wrongMarks: 1,
    mcqCount: 50,
    published: false, // Add a published property if needed
};

const ExamDetails = () => {
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

    const handleEditClick = () => {
        setShowDropdown(false);
        // Implement edit logic here (e.g., navigate to edit page)
        console.log('Edit clicked');
    };

    const handleDeleteClick = () => {
        setShowDropdown(false);
        // Implement delete logic here (e.g., confirmation prompt, API call)
        console.log('Delete clicked');
    };

    const handlePublishClick = () => {
        setShowDropdown(false);
        // Implement publish logic here (e.g., API call to mark as published)
        console.log('Publish clicked');
    };

    return (
        <div className='border-2 border-gray-300 p-3'>
            <div className='flex items-center justify-between'>
                <div>
                    <div className='grid grid-cols-2 my-4'>
                        <h1>Created By</h1>
                        <p className='text-[#914AD9] font-bold'>: { examData.createdBy }</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <h1>Date</h1>
                        <p className='text-[#914AD9] font-bold'>: { examData.date }</p>
                    </div>
                </div>
                <div className='ml-4 relative'>
                    <BsThreeDotsVertical onClick={ handleDropdownClick } />
                    { showDropdown && (
                        <div className='absolute right-0  shadow-md bg-white rounded-md'>
                            <ul className='p-2'>
                                <li className='hover:bg-gray-200 p-2 flex items-center' onClick={ handleEditClick }>
                                    <BsPencilSquare className='mr-2' /> Edit
                                </li>
                                <li className='hover:bg-gray-200 p-2 flex items-center' onClick={ handleDeleteClick }>
                                    <BsTrash className='mr-2' /> Delete
                                </li>
                                { !examData.published && ( // Conditionally render publish option
                                    <li className='hover:bg-gray-200 p-2 flex items-center' onClick={ handlePublishClick }>
                                        <BsCheck2Circle className='mr-2' /> Publish
                                    </li>
                                ) }
                            </ul>
                        </div>
                    ) }
                </div>
            </div>
            <div className='my-4'>
                <p className='text-[24px] font-[500]'>{ examData.title }</p>
                <p>Subject: { examData.subject }</p>
            </div>
            <div className='flex items-center justify-between'>
                <p className='text-[#5B93FF] text-xs font-bold p-2 rounded bg-[#dcdfe5]'>
                    Correct Mark: { examData.correctMarks }
                </p>
                <p className='text-[#E71D36] text-xs font-bold p-2 rounded bg-[#f7d1d1]'>
                    Wrong Mark: { examData.wrongMarks }
                </p>
                <p className='text-[#3A974C] text-xs font-bold p-2 rounded bg-[#cbe3c7]'>
                    MCQ: { examData.mcqCount }
                </p>
            </div>
        </div>
    );
};

export default ExamDetails;
