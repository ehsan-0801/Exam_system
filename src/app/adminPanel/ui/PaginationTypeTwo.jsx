import React from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
const PaginationTypeTwo = ({ currentPage, totalPages, goToPreviousPage, goToNextPage }) => {


    const windowSize = 5; // Number of page numbers to display

    // Calculate starting and ending page numbers dynamically
    const startPage = Math.max(1, Math.min(currentPage - Math.floor(windowSize / 2), totalPages - windowSize + 1));
    const endPage = Math.min(totalPages, startPage + windowSize - 1);
    return (
        <div className="flex items-center justify-end my-1">
            <div>
                { currentPage } of  { totalPages } pages
            </div>
            <div>
                <button className="ml-2" onClick={ goToPreviousPage } disabled={ currentPage === 1 }>
                    <MdOutlineKeyboardArrowLeft />
                </button>
            </div>
            <div>
                <button className="ml-2" onClick={ goToNextPage } disabled={ currentPage === totalPages }>
                    <MdOutlineKeyboardArrowRight />
                </button>
            </div>
        </div>
    );
};

export default PaginationTypeTwo;