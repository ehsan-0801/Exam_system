import React from 'react';
import SettingsHeader from '../ui/SettingsHeader';

const layout = ({ children }) => {
    return (
        <div>
            <div>
                <SettingsHeader />
            </div>
            <div className='p-4 border-2 mx-4'>
                { children }
            </div>
        </div>
    );
};

export default layout;