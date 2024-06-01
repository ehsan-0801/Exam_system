"use client";
import React, { useState, useEffect } from 'react';

const AddOtherUsers = () => {
    // const [selectedImage, setSelectedImage] = useState(null);
    // const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [purchaseDate, setPurchaseDate] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // const handleChange = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         setImage(file);
    //         setSelectedImage(URL.createObjectURL(file));
    //     }
    // };
    // useEffect(() => {
    //     console.log(image)
    // }, [image])

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const formData = new FormData();

            const res = await fetch('http://localhost:3000/api/organization', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, address, purchaseDate, expiryDate }),
            });

            if (res.ok) {
                console.log('Form submitted successfully');
            } else {
                console.error('Failed to submit form');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <form onSubmit={ handleFormSubmit } method="POST">
                {/* <div className="relative flex items-center justify-center my-4">
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
                                <img
                                    src={ selectedImage }
                                    alt="Profile Photo"
                                    className="rounded-full w-full h-full object-cover"
                                />
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4 3a3 3 0 00-3 3v10a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zM15 8a1 1 0 011 1v4a1 1 0 01-1 1H9a1 1 0 01-1-1V9a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) }
                        </div>
                    </label>
                </div> */}
                <div className="relative my-6">
                    <label
                        htmlFor="organization-name"
                        className="absolute transition-all duration-300 text-md text-black bg-white -top-3 left-2 z-20"
                    >
                        Organization Name
                    </label>
                    <input
                        id="organization-name"
                        name="organization"
                        type="text"
                        required
                        onChange={ (e) => setName(e.target.value) }
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none p-3"
                    />
                </div>
                <div className="relative my-6">
                    <label
                        htmlFor="address"
                        className="absolute transition-all duration-300 text-md text-black bg-white -top-3 left-2 z-20"
                    >
                        Address
                    </label>
                    <input
                        id="address"
                        name="address"
                        type="text"
                        required
                        onChange={ (e) => setAddress(e.target.value) }
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none p-3"
                    />
                </div>

                <div className="relative my-6">
                    <label
                        htmlFor="purchase-date"
                        className="absolute transition-all duration-300 text-md text-black bg-white -top-3 left-2 z-20"
                    >
                        Purchase Date
                    </label>
                    <input
                        id="purchase-date"
                        name="purchaseDate"
                        type="date"
                        required
                        onChange={ (e) => setPurchaseDate(e.target.value) }
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none p-3"
                    />
                </div>
                <div className="relative my-6">
                    <label
                        htmlFor="expiry-date"
                        className="absolute transition-all duration-300 text-md text-black bg-white -top-3 left-2 z-20"
                    >
                        Expiry Date
                    </label>
                    <input
                        id="expiry-date"
                        name="expiryDate"
                        type="date"
                        required
                        onChange={ (e) => setExpiryDate(e.target.value) }
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none p-3"
                    />
                </div>
                <div className="my-8">
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Add Organization
                    </button>
                </div>
            </form>
        </>
    );
};

export default AddOtherUsers;
