import React from 'react';
import Header from '../ui/Header';
import AdminProfile from '../ui/AdminProfile';
import OtherUsers from '../ui/OtherUsers';

const TenantDetails = () => {
    return (
        <div>
            <Header header={ "Tenant Detail" } subheader={ "Total users and their licence info" } />

            <AdminProfile />
            <OtherUsers />
        </div>
    );
};

export default TenantDetails;