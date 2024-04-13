import React from 'react';
import Image from "next/image";
const AdminProfile = () => {
    return (
        <div className="flex items-center justify-between gap-2 my-6 mx-2">
            <div className="flex items-center justify-between gap-4 shadow-lg w-full border-2 rounded-md px-6 py-4">
                <div>
                    <h1 className='text-lg py-2'>BAF Sahin College</h1>
                    <p className='text-sm py-2'>Address: <span>Baf Shaheen College Tejgaon, Dhaka-1206</span></p>
                    <p className='text-sm py-2'>Purchase Date:<span> 03-sep-2023</span></p>
                    <p className='text-sm py-2'>Expiry Date:<span> 02-sep-2024</span></p>
                </div>
                <div>
                    <Image src="/logo.png" width={ 150 } height={ 150 } />
                </div>
            </div>
            <div className="flex items-center justify-between gap-4 shadow-lg w-full border-2 rounded-md px-6 py-4">
                <div>
                    <h1 className='text-lg py-2'>Admin User</h1>
                    <p className='text-sm py-2'>Name:<span> Hasan Mahmud</span></p>
                    <p className='text-sm py-2'>Phone:<span> +880 1708549368</span></p>
                    <p className='text-sm py-2'>Email:<span> info@bafsd.edu.bd</span></p>
                </div>
                <div className="bg-pink-300 rounded-full relative overflow-hidden" style={ { width: "100px", height: "100px" } } >
                    <img src="/user.png" width={ 150 } height={ 100 } className='absolute bottom-0 object-cover' />
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;