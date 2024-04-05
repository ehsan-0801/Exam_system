"use client"
import React, { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
const AddOrganization = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setSelectedImage(URL.createObjectURL(file)); // Preview image
    };
    return (
        <>
            <form action="">
                <div className="relative flex items-center justify-center my-4">
                    <input
                        type="file"
                        id="profile-image"
                        accept="image/*"
                        className="hidden"
                        onChange={ handleChange }
                    />
                    <label htmlFor="profile-image" className="cursor-pointer">
                        <div className="w-48 h-48 rounded-full bg-gray-200 flex justify-center items-center">
                            { selectedImage ? (
                                <img src={ selectedImage } alt="Profile Photo" className="rounded-full w-full h-full object-cover" />
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M4 3a3 3 0 00-3 3v10a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zM15 8a1 1 0 011 1v4a1 1 0 01-1 1H9a1 1 0 01-1-1V9a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) }
                        </div>
                    </label>
                </div>
                <div className='relative my-6'>
                    <label
                        htmlFor="organization name"
                        className="absolute transition-all duration-300 text-md text-black bg-white -top-3 left-2 z-20"
                    >
                        Organization Name
                    </label>
                    <input
                        id="organization"
                        name="organization"
                        type="text"
                        required
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none p-3"
                    />
                </div>
                <div className='relative my-6'>
                    <label
                        htmlFor="Address"
                        className="absolute transition-all duration-300 text-md text-black bg-white -top-3 left-2 z-20"
                    >
                        Address
                    </label>
                    <input
                        id="Address"
                        name="Address"
                        type="text"
                        required
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none p-3"
                    />
                </div>
                <div className='relative my-6'>
                    <label
                        htmlFor="Purchased Date"
                        className="absolute transition-all duration-300 text-md text-black bg-white -top-3 left-2 z-20"
                    >
                        Purchased Date
                    </label>
                    <input
                        id="purchased_date"
                        name="purchased_date"
                        type="date"
                        required
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none p-3"
                    />
                </div>
                <div className='relative my-6'>
                    <label
                        htmlFor="Expiry date"
                        className="absolute transition-all duration-300 text-md text-black bg-white -top-3 left-2 z-20"
                    >
                        Expiry date
                    </label>
                    <input
                        id="expiry_date"
                        name="expiry_date"
                        type="date"
                        required
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none p-3"
                    />
                </div>
                <div className='my-8'>
                    <a type="submit" className=" w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Add User
                    </a>
                </div>
            </form>
        </>
    );
};

export default AddOrganization;