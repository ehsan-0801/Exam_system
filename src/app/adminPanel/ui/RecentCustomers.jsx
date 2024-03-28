import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
const RecentCustomers = () => {
    const universities = [
        "Massachusetts Institute of Technology",
        "Stanford University",
        "Harvard University",
        "California Institute of Technology",
        "University of Cambridge",
        "University of Oxford",
        "University of Toronto",
        "National University of Singapore",
        "ETH Zurich - Swiss Federal Institute of Technology",
        "The University of Tokyo",
    ];

    function generateRandomData(rows) {
        const domains = ["gmail.com", "hotmail.com", "yahoo.com"];

        return Array.from({ length: rows }, () => ({
            id: Math.floor(Math.random() * 100000),
            university: universities[Math.floor(Math.random() * universities.length)],
            email: `${Math.random().toString(36).substring(2, 7)}@${domains[Math.floor(Math.random() * domains.length)]}`,
            registeredDate: new Date().toLocaleDateString(),
            action: "View Details",
        }));
    }
    const data = generateRandomData(10);

    return (
        <div>
            <div className='flex items-center justify-between'>
                <h1 className='mx-1'>Recent Customers</h1>
                <div className="mb-4">
                    <select
                        className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option>
                            Last Week
                        </option>
                        <option>
                            Last Month
                        </option>
                        <option>
                            Last Year
                        </option>
                    </select>
                </div>
            </div>
            <div className="container mx-auto">
                <table className="table-auto w-full text-left">
                    <thead>
                        <tr className=" text-black text-sm">
                            <th className="p-2">#ID</th>
                            <th className="p-2">University Name</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Registered Date</th>
                            <th className="p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { data.map((item) => (
                            <tr key={ item.id } className="border-b border-gray-400 text-sm">
                                <td className="p-2">{ item.id }</td>
                                <td className="p-2">{ item.university }</td>
                                <td className="p-2">{ item.email }</td>
                                <td className="p-2">{ item.registeredDate }</td>
                                <td className="p-2"><BsThreeDotsVertical /></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentCustomers;