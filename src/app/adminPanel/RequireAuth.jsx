"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import SpinningLoader from './ui/SpinningLoader';

const RequireAuth = ({ children }) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/");
        }
    }, [status]);

    if (status === "loading") {
        return <SpinningLoader />;
    }

    if (status === "unauthenticated") {
        return null; // or you can show a message or redirect here
    }

    return children;
};

export default RequireAuth;