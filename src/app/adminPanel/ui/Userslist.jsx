"use client";
import React, { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import Pagination from './Pagination';
import Action from './Action';
import Loading from './Loading';

const Userslist = ({ tenants, fetchData, loading }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const totalPages = Math.ceil(tenants.length / itemsPerPage);

    const goToPreviousPage = () => {
        setCurrentPage(Math.max(currentPage - 1, 1));
    };

    const goToNextPage = () => {
        setCurrentPage(Math.min(currentPage + 1, totalPages));
    };

    const slicedData = tenants.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const formattedDate = (date) => {
        const dateObj = new Date(date);
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const actualDate = dateObj.getDate() + ' ' + months[dateObj.getMonth()] + ' ' + dateObj.getFullYear();
        return actualDate;
    };

    return (
        <div>
            { loading ? (
                <Loading />
            ) : (
                <table className="table-auto w-full text-left">
                    <thead>
                        <tr className="text-black text-sm">
                            <th className="p-2">#</th>
                            <th className="p-2">Organization</th>
                            <th className="p-2">Issued Date</th>
                            <th className="p-2">Expiry Date</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { slicedData.map((tenant, index) => (
                            <tr key={ index } className="text-sm border-b-2 border-gray-300">
                                <td className="p-2">{ tenant.id }</td>
                                <td className="p-2 flex items-center">
                                    <FaUserCircle className="mr-3 text-2xl text-gray-400" />
                                    { tenant.org_name }
                                </td>
                                <td className="p-2">{ formattedDate(tenant.purchased_date) }</td>
                                <td className="p-2">{ formattedDate(tenant.expiry_date) }</td>
                                <td className={
                                    tenant.status === "Active"
                                        ? `text-[#2E8760] font-bold p-2`
                                        : `text-[#E71D36] font-bold p-2`
                                }>
                                    { tenant.status === "Active" ? "Active" : "Inactive" }
                                </td>
                                <td className="p-2">
                                    <Action tenant_id={ tenant.id } fetchData={ fetchData } />
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            ) }
            <Pagination
                currentPage={ currentPage }
                totalPages={ totalPages }
                goToPreviousPage={ goToPreviousPage }
                goToNextPage={ goToNextPage }
                onPageChange={ handlePageChange }
            />
        </div>
    );
};

export default Userslist;
