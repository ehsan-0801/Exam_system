"use client";
import React, { useState, useEffect, useRef } from 'react';
import SpinningLoader from './SpinningLoader';
import Swal from 'sweetalert2';

const EditOrganization = ({ id }) => {
    // const [name, setName] = useState('');
    // const [address, setAddress] = useState('');
    // const [purchaseDate, setPurchaseDate] = useState('');
    // const [expiryDate, setExpiryDate] = useState('');
    const nameRef = useRef(null);
    const addressRef = useRef(null);
    const purchaseDateRef = useRef(null);
    const expiryDateRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [orgData, setOrgData] = useState({}); // Use state to store fetched data


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/api/organization/${id}`);
            const org = await response.json();
            setOrgData(org);
            console.log("Organization: ", org)
        };

        fetchData();
    }, []);
    console.log({ orgData });

    const formattedDate = (date) => {
        try {
            let dt = new Date(date);
            const formattedDate = dt.toISOString().substring(0, 10);
            return formattedDate;
        }
        catch (e) {
            return date;
        }
    }
    useEffect(() => {
        if (orgData) {
            nameRef.current.value = orgData.org_name;
            addressRef.current.value = orgData.address;
            purchaseDateRef.current.value = formattedDate(orgData.purchased_date);
            expiryDateRef.current.value = formattedDate(orgData.expiry_date);
        }
        console.log(nameRef, addressRef, purchaseDateRef, expiryDateRef)
    }, [orgData]);


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const formData = {
                name: nameRef.current.value,
                address: addressRef.current.value,
                purchaseDate: purchaseDateRef.current.value,
                expiryDate: expiryDateRef.current.value,
            };

            // Check for changes before sending request
            // (This logic can be moved to handleFormSubmit if needed)
            const hasChanged = Object.entries(formData).some(
                ([key, value]) => value !== orgData[key]
            );

            if (hasChanged) {
                const res = await fetch(`http://localhost:3000/api/organization/${id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                if (res.ok) {
                    console.log('Form submitted successfully');
                    Swal.fire("Edited the Data Successfully");
                    // Handle successful update (e.g., redirect, success message)
                } else {
                    console.error('Failed to submit form');
                    // Handle errors (e.g., display error message)
                }
            } else {
                console.log('No changes detected');
                // Handle no-change scenario (e.g., display a message)
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <SpinningLoader></SpinningLoader>;
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <form onSubmit={ handleFormSubmit } method="PUT">

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
                        ref={ nameRef }
                        // onChange={ (e) => setName(e.target.defaultValue ? e.target.defaultValue : e.target.value) }
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none p-3"
                        defaultValue={ orgData.org_name }
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
                        ref={ addressRef }
                        required
                        // onChange={ (e) => setAddress(e.target.defaultValue ? e.target.defaultValue : e.target.value) }
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none p-3"
                        defaultValue={ orgData.address }
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
                        ref={ purchaseDateRef }
                        // onChange={ (e) => setPurchaseDate(e.target.defaultValue ? e.target.defaultValue : e.target.value) }

                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none p-3"
                        defaultValue={ formattedDate(orgData.purchased_date) }
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
                        ref={ expiryDateRef }
                        // onChange={ (e) => setExpiryDate(e.target.defaultValue ? e.target.defaultValue : e.target.value) }
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none p-3"
                        defaultValue={ formattedDate(orgData.expiry_date) }
                    />
                </div>
                <div className="my-8">
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Edit Organization
                    </button>
                </div>
            </form>
        </>
    );
};

export default EditOrganization;
