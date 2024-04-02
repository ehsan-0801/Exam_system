import React from 'react';
import Image from 'next/image';
import Stats from '../ui/Stats';
import DoughnutChart from '../ui/DoughnutChart';
import DoughnutChart2 from '../ui/DoughnutChart2';
import RecentCustomers from '../ui/RecentCustomers';
import Header from '../ui/Header';
const Dashboard = () => {
    return (
        <div>
            {/* <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-2xl font-semibold'>Welcome Hasan</h1>
                    <p>Super Admin</p>
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
            </div> */}
            <Header header={ 'Welcome Hasan' } subheader={ 'Super Admin' } />
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