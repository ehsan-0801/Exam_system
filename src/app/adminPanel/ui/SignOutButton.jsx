"use client"
import { signOut } from 'next-auth/react';
import React from 'react';

const SignOutButton = () => {
    const logout = async () => {
        signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/`
        })
    }
    return (
        <button onClick={ logout } className='bg-transparent text-[#e93838] border-[#e93838] border-2 ml-2 w-full p-1 rounded-md flex justify-center items-center'>
            Sign Out
        </button>
    );
};

export default SignOutButton;