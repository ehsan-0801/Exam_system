import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const SpinningLoader = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <TailSpin
                visible={ true }
                height="80"
                width="80"
                color="#023047"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={ {} }
                wrapperClass=""
            />
        </div>
    );
};

export default SpinningLoader;