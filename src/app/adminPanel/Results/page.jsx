import React from 'react';
import Header from '../ui/Header';
import SubjectDetails from '../ui/SubjectDetails';

const Results = () => {
    return (
        <div>
            <Header header={ "Results" } subheader={ "This page displays the results and analysis of your answer sheets after scanning and verification" } />
            <div className='border-2 border-gray-300 h-[600px] shadow-md rounded-md p-6'>
                <SubjectDetails />
            </div>
        </div>
    );
};

export default Results;