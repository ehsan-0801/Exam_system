"use client"
import React, { useState } from 'react';
import Header from './Header';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const SettingsHeader = () => {
    const router = useRouter();
    const [activeLink, setActiveLink] = useState('/adminPanel/Settings/AccountSettings'); // Set default active link

    const handleLinkClick = (href) => {
        setActiveLink(href); // Update activeLink on link click
    };
    return (
        <>
            <Header header={ "Settings" } subheader={ "Configure application settings, including scanner preferences, SMTP email settings." } />
            <nav className='flex gap-4 p-3 my-4 mx-4 rounded shadow-md '>
                <div>
                    <Link
                        href="/adminPanel/Settings/AccountSettings"
                        onClick={ () => handleLinkClick('/adminPanel/Settings/AccountSettings') }
                        className={ `${activeLink === '/adminPanel/Settings/AccountSettings' ? 'font-bold' : ''}` }
                    >
                        Account Settings
                    </Link>
                </div>
                <div>
                    <Link
                        href="/adminPanel/Settings/MailServer"
                        onClick={ () => handleLinkClick('/adminPanel/Settings/MailServer') }
                        className={ `${activeLink === '/adminPanel/Settings/MailServer' ? 'font-bold' : ''}` }
                    >
                        Mail Server
                    </Link>
                </div>
                <div>
                    <Link
                        href="/adminPanel/Settings/ScanSettings"
                        onClick={ () => handleLinkClick('/adminPanel/Settings/ScanSettings') }
                        className={ `${activeLink === '/adminPanel/Settings/ScanSettings' ? 'font-bold' : ''}` }
                    >
                        Scan Settings
                    </Link>
                </div>
                <div>
                    <Link
                        href="/adminPanel/Settings/AnswerSheetConfig"
                        onClick={ () => handleLinkClick('/adminPanel/Settings/AnswerSheetConfig') }
                        className={ `${activeLink === '/adminPanel/Settings/AnswerSheetConfig' ? 'font-bold' : ''}` }
                    >
                        Answer Sheet Configuration
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default SettingsHeader;