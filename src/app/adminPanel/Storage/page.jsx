import React from 'react';
import Header from '../ui/Header';
import Analytics from '../ui/Analytics';
import BatchStorage from '../ui/BatchStorage';

const Storage = () => {
    return (
        <div>
            <Header header={ 'Storage Settings' } subheader={ 'Permanently delete files stored in IMR according to your data retention policies. ' } />
            <div>
                <Analytics />
            </div>
            <div>
                <BatchStorage />
            </div>
        </div>
    );
};

export default Storage;