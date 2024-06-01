import React from 'react';
import Sidebar from './ui/Sidebar'; // Import the Sidebar component
import UserSessionProvider from './UserSessionProvider';
import RequireAuth from './RequireAuth';

const Layout = ({ children }) => {
    return (
        <UserSessionProvider>
            <RequireAuth>
                <div className="flex min-h-screen">
                    <div className="fixed left-0 top-0 h-full  overflow-y-auto bg-gray-800 text-white shadow-md z-10 w-[250px]">
                        <Sidebar />
                    </div>
                    <div className="flex-grow relative ml-[260px] mr-1">
                        { children }
                    </div>
                </div>
            </RequireAuth>
        </UserSessionProvider>
    );
};

export default Layout;