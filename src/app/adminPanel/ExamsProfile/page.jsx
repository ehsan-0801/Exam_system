"use client"
import React, { useEffect, useState } from 'react';
import Header from '../ui/Header';
import ExamDetails from '../ui/ExamDetails';
import { useSession } from 'next-auth/react';

const ExamsProfile = () => {

    const { data: session } = useSession();
    const id = parseInt(session?.user.id)
    const [exams, setExams] = useState([]); // Initialize as an array

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/api/exam/${id}`);
            const exam = await response.json();
            setExams(exam);
            console.log("Exam: ", exam);
        };

        fetchData();
    }, []);

    return (
        <div>
            <Header header={ 'Exams Profiles' } subheader={ 'Manage, Design and Customize exam profiles here.' } />
            <div className='border-2 border-gray-300 h-[600px] shadow-md rounded-md p-6'>
                <div className='grid grid-cols-3 gap-8'>
                    {
                        exams.length > 0 ? exams.map((exam, index) => (
                            <ExamDetails key={ index } exam={ exam } />
                        )) : <p>No exam profile found</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default ExamsProfile;
