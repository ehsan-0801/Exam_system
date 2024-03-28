import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
const ExamDetails = () => {
    return (
        <div className='border-2 border-gray-300 p-3 '>
            <div className='flex items-center justify-between'>
                <div>
                    <div className='grid grid-cols-2 my-4'>
                        <h1>Created By</h1>
                        <p className='text-[#914AD9] font-bold ml-2'>: Rafiqul Islam Rana</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <h1>Date</h1>
                        <p className='text-[#914AD9] font-bold ml-2'>: 13-11-23</p>
                    </div>
                </div>
                <div className='ml-4'>
                    <BsThreeDotsVertical />
                </div>
            </div>
            <div className='my-4'>
                <p className='text-[24px] font-[500]'>Medical Exam May 2024</p>
                <p>Subject: Engineering Drawing</p>
            </div>
            <div className='flex items-center justify-between'>
                <p className='text-[#5B93FF] font-bold p-2 rounded bg-[#dcdfe5]'>Correct Mark: 1</p>
                <p className='text-[#E71D36] font-bold p-2 rounded bg-[#f7d1d1]'>Wrong Mark: 1</p>
                <p className='text-[#3A974C] font-bold p-2 rounded bg-[#cbe3c7]'>MCQ: 50</p>
            </div>
        </div>
    );
};

export default ExamDetails;