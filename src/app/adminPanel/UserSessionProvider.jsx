"use client"
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const UserSessionProvider = ({ children }) => {
    return (
        <SessionProvider>
            { children }
        </SessionProvider>
    );
};

export default UserSessionProvider;