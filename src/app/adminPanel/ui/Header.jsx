"use client"
import React from 'react';
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/auth';
import SignOutButton from './SignOutButton';
import { useSession } from 'next-auth/react';
const Header = ({ header, subheader }) => {
    const { data: session } = useSession()
    return (
        <div>
            <div className='flex items-center justify-between px-2'>
                <div>
                    <h1 className='text-2xl font-semibold'>{ header }</h1>
                    <p>{ subheader }</p>
                </div>
                {
                    session?.user ?
                        <div className='flex items-center'>
                            <div className='mr-2'>
                                <h2 className='font-semibold'>{ session?.user.name }</h2>
                                <p>{ session?.user.role }</p>
                            </div>
                            <div>
                                <Image src="/userphoto.jpg" width={ 30 } height={ 62 } alt="Super Admin" />
                            </div>
                            <div className='mr-2'>
                                <SignOutButton></SignOutButton>
                            </div>
                        </div> :
                        ""
                }
            </div>
        </div>
    );
};

export default Header;