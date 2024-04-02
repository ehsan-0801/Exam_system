"use client"
import React, { useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
const SubjectDetails = () => {
    const subjectdetails = [
        {
            subject: "Bangla",
            exam_type: "Midterm Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Physics",
            exam_type: "Midterm Exams",
            result_date: "04-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Under Processing"
        },
        {
            subject: "Chemistry",
            exam_type: "Midterm Exams",
            result_date: "04-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Under Processing"
        },
        {
            subject: "English",
            exam_type: "Final Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Science",
            exam_type: "Final Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Accounting",
            exam_type: "Final Exams",
            result_date: "03-July-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Finance",
            exam_type: "Final Exams",
            result_date: "03-July-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "06-April-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "08-Dec-2022",
            students: "5002",
            passed: "5000",
            status: "Draft"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "19-August-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Midterm Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Chemistry",
            exam_type: "Midterm Exams",
            result_date: "04-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Under Processing"
        },
        {
            subject: "Physics",
            exam_type: "Midterm Exams",
            result_date: "04-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Under Processing"
        },
        {
            subject: "English",
            exam_type: "Final Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Science",
            exam_type: "Final Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Accounting",
            exam_type: "Final Exams",
            result_date: "03-July-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Finance",
            exam_type: "Final Exams",
            result_date: "03-July-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Management",
            exam_type: "Final Exams",
            result_date: "06-April-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "08-Dec-2022",
            students: "5002",
            passed: "5000",
            status: "Draft"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "19-August-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Accounting",
            exam_type: "Final Exams",
            result_date: "03-July-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Finance",
            exam_type: "Final Exams",
            result_date: "03-July-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "06-April-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "08-Dec-2022",
            students: "5002",
            passed: "5000",
            status: "Draft"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "19-August-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Midterm Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Physics",
            exam_type: "Midterm Exams",
            result_date: "04-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Under Processing"
        },
        {
            subject: "Chemistry",
            exam_type: "Midterm Exams",
            result_date: "04-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Under Processing"
        },
        {
            subject: "English",
            exam_type: "Final Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Science",
            exam_type: "Final Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Midterm Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Physics",
            exam_type: "Midterm Exams",
            result_date: "04-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Under Processing"
        },
        {
            subject: "Chemistry",
            exam_type: "Midterm Exams",
            result_date: "04-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Under Processing"
        },
        {
            subject: "English",
            exam_type: "Final Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Science",
            exam_type: "Final Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Accounting",
            exam_type: "Final Exams",
            result_date: "03-July-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Finance",
            exam_type: "Final Exams",
            result_date: "03-July-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "06-April-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "08-Dec-2022",
            students: "5002",
            passed: "5000",
            status: "Draft"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "19-August-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Midterm Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Physics",
            exam_type: "Midterm Exams",
            result_date: "04-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Under Processing"
        },
        {
            subject: "Chemistry",
            exam_type: "Midterm Exams",
            result_date: "04-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Under Processing"
        },
        {
            subject: "English",
            exam_type: "Final Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Science",
            exam_type: "Final Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Accounting",
            exam_type: "Final Exams",
            result_date: "03-July-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Finance",
            exam_type: "Final Exams",
            result_date: "03-July-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "06-April-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "08-Dec-2022",
            students: "5002",
            passed: "5000",
            status: "Draft"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "19-August-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Midterm Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Physics",
            exam_type: "Midterm Exams",
            result_date: "04-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Under Processing"
        },
        {
            subject: "Chemistry",
            exam_type: "Midterm Exams",
            result_date: "04-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Under Processing"
        },
        {
            subject: "English",
            exam_type: "Final Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Science",
            exam_type: "Final Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Accounting",
            exam_type: "Final Exams",
            result_date: "03-July-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Finance",
            exam_type: "Final Exams",
            result_date: "03-July-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "06-April-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "08-Dec-2022",
            students: "5002",
            passed: "5000",
            status: "Draft"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "19-August-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Midterm Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Physics",
            exam_type: "Midterm Exams",
            result_date: "04-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Under Processing"
        },
        {
            subject: "Chemistry",
            exam_type: "Midterm Exams",
            result_date: "04-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Under Processing"
        },
        {
            subject: "English",
            exam_type: "Final Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Science",
            exam_type: "Final Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Accounting",
            exam_type: "Final Exams",
            result_date: "03-July-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Finance",
            exam_type: "Final Exams",
            result_date: "03-July-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "06-April-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "08-Dec-2022",
            students: "5002",
            passed: "5000",
            status: "Draft"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "19-August-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Midterm Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Physics",
            exam_type: "Midterm Exams",
            result_date: "04-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Under Processing"
        },
        {
            subject: "Chemistry",
            exam_type: "Midterm Exams",
            result_date: "04-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Under Processing"
        },
        {
            subject: "English",
            exam_type: "Final Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Science",
            exam_type: "Final Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Accounting",
            exam_type: "Final Exams",
            result_date: "03-July-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Finance",
            exam_type: "Final Exams",
            result_date: "03-July-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "06-April-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "08-Dec-2022",
            students: "5002",
            passed: "5000",
            status: "Draft"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "19-August-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Midterm Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Physics",
            exam_type: "Midterm Exams",
            result_date: "04-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Under Processing"
        },
        {
            subject: "Chemistry",
            exam_type: "Midterm Exams",
            result_date: "04-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Under Processing"
        },
        {
            subject: "English",
            exam_type: "Final Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Science",
            exam_type: "Final Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Accounting",
            exam_type: "Final Exams",
            result_date: "03-July-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Finance",
            exam_type: "Final Exams",
            result_date: "03-July-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "06-April-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "08-Dec-2022",
            students: "5002",
            passed: "5000",
            status: "Draft"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "19-August-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Midterm Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Physics",
            exam_type: "Midterm Exams",
            result_date: "04-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Under Processing"
        },
        {
            subject: "Chemistry",
            exam_type: "Midterm Exams",
            result_date: "04-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Under Processing"
        },
        {
            subject: "English",
            exam_type: "Final Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Science",
            exam_type: "Final Exams",
            result_date: "03-Sep-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Accounting",
            exam_type: "Final Exams",
            result_date: "03-July-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Finance",
            exam_type: "Final Exams",
            result_date: "03-July-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "06-April-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "08-Dec-2022",
            students: "5002",
            passed: "5000",
            status: "Draft"
        },
        {
            subject: "Bangla",
            exam_type: "Final Exams",
            result_date: "19-August-2022",
            students: "5002",
            passed: "5000",
            status: "Completed"
        },

    ]
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(subjectdetails.length / itemsPerPage);

    const goToPreviousPage = () => {
        setCurrentPage(Math.max(currentPage - 1, 1));
    };

    const goToNextPage = () => {
        setCurrentPage(Math.min(currentPage + 1, totalPages));
    };

    const slicedData = subjectdetails.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const windowSize = 5; // Number of page numbers to display

    // Calculate starting and ending page numbers dynamically
    const startPage = Math.max(1, Math.min(currentPage - Math.floor(windowSize / 2), totalPages - windowSize + 1));
    const endPage = Math.min(totalPages, startPage + windowSize - 1);
    return (
        <div className="container mx-auto my-6">
            <table className="table-auto w-full text-left">
                <thead>
                    <tr className=" text-black text-sm">
                        <th className="p-2"></th>
                        <th className="p-2">Subject</th>
                        <th className="p-2">Exam Type</th>
                        <th className="p-2">Result Date</th>
                        <th className="p-2">Students</th>
                        <th className="p-2">Passed</th>
                        <th className="p-2">Status</th>
                        <th className="p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    { slicedData.map((subject, index) => (
                        <tr key={ index } className="text-sm">
                            <td className="p-2">
                                <input type="checkbox" name="" className="p-4" />
                            </td>
                            <td className="p-2">{ subject.subject }</td>
                            <td className="p-2">{ subject.exam_type }</td>
                            <td className="p-2">{ subject.result_date }</td>
                            <td className="p-2">{ subject.students }</td>
                            <td className="p-2">{ subject.passed }</td>
                            <td className={ subject.status == "Under Processing" ? ` text-[#E71D36] font-bold p-2` : subject.status == "Draft" ? ` text-[#F89827] font-bold p-2` : ` text-[#2E8760] font-bold p-2` }>{ subject.status }</td>
                            <td className="p-2"><BsThreeDotsVertical /></td>
                        </tr>
                    )) }
                </tbody>
            </table>
            <div className="flex justify-center items-center mt-6">
                <div>
                    <button className="mx-10" onClick={ goToPreviousPage } disabled={ currentPage === 1 }>
                        <MdOutlineKeyboardArrowLeft />
                    </button>
                </div>
                <div className="flex items-center justify-around">
                    { Array.from({ length: Math.min(totalPages, windowSize) }, (_, i) => (
                        <button
                            key={ i + startPage }
                            onClick={ () => onPageChange(i + startPage) }
                            className={ `px-3 py-1 mx-4 ${currentPage === i + startPage ? 'text-white bg-[#013D6A] px-3 py-1 rounded-full font-bold' : 'px-3 py-1'
                                }` }
                        >
                            { i + startPage }
                        </button>
                    )) }
                    { totalPages > windowSize + startPage - 1 && ( // Check if there are more pages beyond the current window
                        <button className="mx-4 text-gray-400">... { totalPages }</button>
                    ) }
                </div>
                <div>
                    <button className="mx-10" onClick={ goToNextPage } disabled={ currentPage === totalPages }>
                        <MdOutlineKeyboardArrowRight />
                    </button>
                </div>
            </div>
        </div >
    );
};

export default SubjectDetails;