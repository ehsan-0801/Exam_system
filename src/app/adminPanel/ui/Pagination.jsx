import React from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
const Pagination = ({ Data, itemsPerPage, goToPreviousPage, goToNextPage }) => {


    const windowSize = 5; // Number of page numbers to display

    // Calculate starting and ending page numbers dynamically
    const startPage = Math.max(1, Math.min(currentPage - Math.floor(windowSize / 2), totalPages - windowSize + 1));
    const endPage = Math.min(totalPages, startPage + windowSize - 1);
    return (
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
    );
};

export default Pagination;