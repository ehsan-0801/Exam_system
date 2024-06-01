"use client"
import React, { useEffect, useRef, useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { BsThreeDotsVertical, BsPencilSquare, BsTrash, BsCheck2Circle } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Pagination from './Pagination';
import Action from './Action';
import Loading from './Loading';
const Userslist = () => {

    const [tenants, setTenants] = useState([]);
    const [active, setActive] = useState(true); // Use state to store fetched data
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/organization/");
                const Tenants = await response.json();
                setTenants(Tenants);
                setLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false); // Set loading to false even on errors
            }
        };

        fetchData();
    }, []);

    console.log(tenants);
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
        setCurrentPage(pageNumber); // Update current page state
    };

    const formattedDate = (date) => {
        const dateObj = new Date(date);
        const m = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        const actual_Date = dateObj.getDate() + ' ' + m[dateObj.getMonth()] + ' ' + dateObj.getFullYear();
        return actual_Date
    }
    const compareDate = (date) => {
        const curr_date = new Date();
        const given_date = new Date(date);
        if (given_date < curr_date) {
            setActive(false);
        }
        else {
            setActive(true);
        }

    }


    return (
        <div>
            { loading ? ( // Conditionally render the loader
                <Loading />
            ) : (
                <>
                    <table className="table-auto w-full text-left">
                        <thead>
                            <tr className=" text-black text-sm">
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
                                    <td
                                        className={
                                            tenant.status === "Active"
                                                ? ` text-[#2E8760] font-bold p-2`
                                                : ` text-[#E71D36] font-bold p-2`
                                        }
                                    >
                                        { tenant.status === "Active" ? "Active" : "Inactive" }
                                    </td>
                                    <td className="p-2">
                                        <Action tenant_id={ tenant.id } />
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                    <Pagination
                        currentPage={ currentPage }
                        totalPages={ totalPages }
                        goToPreviousPage={ goToPreviousPage }
                        goToNextPage={ goToNextPage }
                        onPageChange={ handlePageChange }

                    />
                </>
            ) }
        </div>
    );
};

export default Userslist;