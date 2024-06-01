"use client"
import React from 'react';
import Image from 'next/image';
import Stats from '../ui/Stats';
import DoughnutChart from '../ui/DoughnutChart';
import DoughnutChart2 from '../ui/DoughnutChart2';
import RecentCustomers from '../ui/RecentCustomers';
import Header from '../ui/Header';
import { useSession } from 'next-auth/react';

const Dashboard = () => {
    const { data: session } = useSession();
    return (
        <div>
            <Header header={ `Welcome ${session?.user.name}` } subheader={ `${session?.user.role}` } />
            <div className='grid grid-cols-2'>
                <div>
                    <Stats />
                </div>
                <div className='flex items-center justify-between'>
                    <DoughnutChart />
                    <DoughnutChart2 />
                </div>
            </div>
            <div>
                <RecentCustomers />
            </div>
        </div>
    );
};

export default Dashboard;
