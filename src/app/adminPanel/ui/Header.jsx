import React from 'react';
import Image from 'next/image';
const Header = ({ header, subheader }) => {
    return (
        <div>
            <div className='flex items-center justify-between px-2'>
                <div>
                    <h1 className='text-2xl font-semibold'>{ header }</h1>
                    <p>{ subheader }</p>
                </div>
                <div className='flex items-center'>
                    <div className='mr-2'>
                        <h2 className='font-semibold'>Hasan Mahmud</h2>
                        <p>Senior Admin</p>
                    </div>
                    <div>
                        <Image src="/userphoto.jpg" width={ 30 } height={ 62 } alt="Super Admin" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;