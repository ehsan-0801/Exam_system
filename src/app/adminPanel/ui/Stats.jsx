import React from 'react';

const Stats = () => {
    return (
        <div className='border-2 border-gray-300 rounded-md p-2 w-[550px] h-[200px] my-2 shadow-slate-400 shadow-md flex flex-col justify-center'>
            <div className='grid grid-cols-2  grid-flow-col gap-2'>
                <div className='border-2 border-gray-300 rounded-md my-1 p-1'>
                    <p>Total Organization</p>
                    <p className='text-2xl'>170</p>
                </div>
                <div className='border-2 border-gray-300 rounded-md my-1 p-1'>
                    <p>Total Exam Under Process</p>
                    <p className='text-2xl'>90</p>
                </div>
            </div>
            <div className='grid grid-cols-2  grid-flow-col gap-2'>
                <div className='border-2 border-gray-300 rounded-md my-1 p-1'>
                    <p>Total Answer Sheet Processed</p>
                    <p className='text-2xl'>7800</p>
                </div>
                <div className='border-2 border-gray-300 rounded-md my-1 p-1'>
                    <p>Total Exam Profiles</p>
                    <p className='text-2xl'>25</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;