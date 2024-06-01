"use client"
import React, { useState } from 'react';
import SettingsHeadline from './SettingsHeadline';
import { FaUserLarge } from "react-icons/fa6";
const DataInputForm = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setSelectedImage(URL.createObjectURL(file)); // Preview image
    };

    const [firstNameFocused, setfirstNameFocused] = useState(false);
    const [firstNameValue, setfirstNameValue] = useState('');
    const handlefirstNameFocus = () => {
        setfirstNameFocused(true);
    };

    const handlefirstNameBlur = () => {
        if (!firstNameValue) {
            setfirstNameFocused(false);
        }
    };

    const handlefirstNameChange = (e) => {
        setfirstNameValue(e.target.value);
    };

    const [lastNameFocused, setlastNameFocused] = useState(false);
    const [lastNameValue, setlastNameValue] = useState('');
    const handlelastNameFocus = () => {
        setlastNameFocused(true);
    };

    const handlelastNameBlur = () => {
        if (!lastNameValue) {
            setlastNameFocused(false);
        }
    };

    const handlelastNameChange = (e) => {
        setlastNameValue(e.target.value);
    };

    const [passwordFocused, setPasswordFocused] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');
    const handlePasswordFocus = () => {
        setPasswordFocused(true);
    };

    const handlePasswordBlur = () => {
        if (!passwordValue) {
            setPasswordFocused(false);
        }
    };

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
    };
    const [confirmPasswordFocused, setconfirmPasswordFocused] = useState(false);
    const [confirmPasswordValue, setconfirmPasswordValue] = useState('');
    const handleconfirmPasswordFocus = () => {
        setconfirmPasswordFocused(true);
    };

    const handleconfirmPasswordBlur = () => {
        if (!confirmPasswordValue) {
            setconfirmPasswordFocused(false);
        }
    };

    const handleconfirmPasswordChange = (e) => {
        setPasswordValue(e.target.value);
    };
    const [emailFocused, setEmailFocused] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const handleEmailFocus = () => {
        setEmailFocused(true);
    };

    const handleEmailBlur = () => {
        if (!emailValue) {
            setEmailFocused(false);
        }
    };

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
    };
    const [phoneNumberFocused, setphoneNumberFocused] = useState(false);
    const [phoneNumberValue, setphoneNumberValue] = useState('');
    const handlephoneNumberFocus = () => {
        setphoneNumberFocused(true);
    };

    const handlephoneNumberBlur = () => {
        if (!phoneNumberValue) {
            setphoneNumberFocused(false);
        }
    };

    const handlephoneNumberChange = (e) => {
        setphoneNumberValue(e.target.value);
    };
    return (
        <>
            <div>
                <form action="">
                    <SettingsHeadline content={ "Personal Info" } />
                    <h1>Profile Picture</h1>
                    <div className='flex items-center gap-4'>
                        <div className="relative my-1">
                            <input
                                type="file"
                                id="profile-image"
                                accept="image/*"
                                className="hidden"
                                onChange={ handleChange }
                            />
                            <label htmlFor="profile-image" className="cursor-pointer">
                                <div className="w-16 h-16 rounded-full bg-gray-200 flex justify-center items-center">
                                    { selectedImage ? (
                                        <img src={ selectedImage } alt="Profile Photo" className="rounded-full w-full h-full object-cover" />
                                    ) : <FaUserLarge size={ 30 } /> }
                                </div>
                            </label>
                        </div>
                        <div className='p-1 flex items-center gap-2'>
                            <button className='bg-gray-300 p-2 rounded '>Change</button>
                            <button className='bg-white p-2 rounded '>Remove</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 my-2">
                        <div className='relative w-full'>
                            <label
                                htmlFor="firstName"
                                className={ `absolute transition-all duration-300 ${firstNameFocused || firstNameValue ? 'text-md text-black bg-white -top-2 left-2 z-20' : 'top-3 left-3 text-gray-700'}` }
                            >
                                First Name
                            </label>
                            <input
                                onFocus={ handlefirstNameFocus }
                                onBlur={ handlefirstNameBlur }
                                onChange={ handlefirstNameChange }
                                id="firstName"
                                name="firstName"
                                type="Email"
                                autoComplete="firstName"
                                required
                                className={ `p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none ${firstNameFocused || firstNameValue ? 'p-3' : ''}` }
                            />
                        </div>
                        <div className='relative w-full'>
                            <label
                                htmlFor="lastName"
                                className={ `absolute transition-all duration-300 ${lastNameFocused || lastNameValue ? 'text-md text-black bg-white -top-2 left-2 z-20' : 'top-3 left-3 text-gray-700'}` }
                            >
                                Last Name
                            </label>
                            <input
                                onFocus={ handlelastNameFocus }
                                onBlur={ handlelastNameBlur }
                                onChange={ handlelastNameChange }
                                id="lastName"
                                name="lastName"
                                type="text"
                                autoComplete="lastName"
                                required
                                className={ `p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none ${lastNameFocused || lastNameValue ? 'p-3' : ''}` }
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 my-2">
                        <div className='relative w-full mt-2'>
                            <label
                                htmlFor="password"
                                className={ `absolute transition-all duration-300 ${passwordFocused || passwordValue ? 'text-md text-black bg-white -top-2 left-2 z-20' : 'top-3 left-3 text-gray-700'}` }
                            >
                                Password
                            </label>
                            <input
                                onFocus={ handlePasswordFocus }
                                onBlur={ handlePasswordBlur }
                                onChange={ handlePasswordChange }
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="password"
                                required
                                className={ `p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none ${passwordFocused || passwordValue ? 'p-3' : ''}` }
                            />
                        </div>
                        <div className='relative w-full mt-2'>
                            <label
                                htmlFor="confirmPassword"
                                className={ `absolute transition-all duration-300 ${confirmPasswordFocused || confirmPasswordValue ? 'text-md text-black bg-white -top-2 left-2 z-20' : 'top-3 left-3 text-gray-700'}` }
                            >
                                confirmPassword
                            </label>
                            <input
                                onFocus={ handleconfirmPasswordFocus }
                                onBlur={ handleconfirmPasswordBlur }
                                onChange={ handleconfirmPasswordChange }
                                id="confirmPassword"
                                name="confirmPassword"
                                type="Password"
                                autoComplete="confirmPassword"
                                required
                                className={ `p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none ${confirmPasswordFocused || confirmPasswordValue ? 'p-3' : ''}` }
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 my-2">
                        <div className='relative w-full mt-2'>
                            <label id="phoneNumberLabel" htmlFor="phoneNumber" className={ `absolute transition-all duration-300 ${phoneNumberFocused || phoneNumberValue ? 'text-md text-black bg-white -top-2 left-14 z-20' : 'top-3 left-20 text-gray-700'}` }>
                                Phone Number
                            </label>
                            <div className='flex'>
                                <select name="" id="" className='border-l border-t border-b border-gray-300 rounded-s'>
                                    <option value="">+880</option>
                                </select>
                                <input
                                    onFocus={ handlephoneNumberFocus }
                                    onBlur={ handlephoneNumberBlur }
                                    onChange={ handlephoneNumberChange }
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    className={ `p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none ${phoneNumberFocused || phoneNumberValue ? 'p-3' : ''}` }
                                    required
                                />
                            </div>
                        </div>
                        <div className='relative w-full mt-2'>
                            <label
                                htmlFor="email"
                                className={ `absolute transition-all duration-300 ${emailFocused || emailValue ? 'text-md text-black bg-white -top-2 left-2 z-20' : 'top-3 left-3 text-gray-700'}` }
                            >
                                Email
                            </label>
                            <input
                                onFocus={ handleEmailFocus }
                                onBlur={ handleEmailBlur }
                                onChange={ handleEmailChange }
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className={ `p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none ${emailFocused || emailValue ? 'p-3' : ''}` }
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <form action="">
                    <div className='flex items-center justify-between gap-4'>
                        <div className='w-full'>
                            <SettingsHeadline content={ "Organization Info" } />
                            <h1>Organization logo</h1>
                            <div className='flex items-center gap-4'>
                                <div className="relative my-1">
                                    <input
                                        type="file"
                                        id="profile-image"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={ handleChange }
                                    />
                                    <label htmlFor="profile-image" className="cursor-pointer">
                                        <div className="w-44 h-32 rounded bg-gray-200 flex justify-center items-center">
                                            { selectedImage ? (
                                                <img src={ selectedImage } alt="Profile Photo" className="rounded-full w-full h-full object-cover" />
                                            ) : <FaUserLarge size={ 80 } /> }
                                        </div>
                                    </label>
                                </div>
                                <div className='p-1 flex items-center gap-2'>
                                    <button className='bg-gray-300 p-2 rounded '>Change</button>
                                    <button className='bg-white p-2 rounded '>Remove</button>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='relative my-4'>
                                <label
                                    htmlFor="firstName"
                                    className={ `absolute transition-all duration-300 ${firstNameFocused || firstNameValue ? 'text-md text-black bg-white -top-2 left-2 z-20' : 'top-3 left-3 text-gray-700'}` }
                                >
                                    First Name
                                </label>
                                <input
                                    onFocus={ handlefirstNameFocus }
                                    onBlur={ handlefirstNameBlur }
                                    onChange={ handlefirstNameChange }
                                    id="firstName"
                                    name="firstName"
                                    type="Email"
                                    autoComplete="firstName"
                                    required
                                    className={ `p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none ${firstNameFocused || firstNameValue ? 'p-3' : ''}` }
                                />
                            </div>
                            <div className='relative my-4'>
                                <label
                                    htmlFor="firstName"
                                    className={ `absolute transition-all duration-300 ${firstNameFocused || firstNameValue ? 'text-md text-black bg-white -top-2 left-2 z-20' : 'top-3 left-3 text-gray-700'}` }
                                >
                                    First Name
                                </label>
                                <input
                                    onFocus={ handlefirstNameFocus }
                                    onBlur={ handlefirstNameBlur }
                                    onChange={ handlefirstNameChange }
                                    id="firstName"
                                    name="firstName"
                                    type="Email"
                                    autoComplete="firstName"
                                    required
                                    className={ `p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none ${firstNameFocused || firstNameValue ? 'p-3' : ''}` }
                                />
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default DataInputForm;