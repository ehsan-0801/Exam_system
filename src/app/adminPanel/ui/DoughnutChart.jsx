"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = () => {
    let data = [
        {
            label: "62% New",
            value: 62,
            color: "rgba(27, 89, 248, 1)",
            cutout: "50%",
        },
        {
            label: "13% Returning",
            value: 13,
            color: "rgba(27, 89, 248, .6)",
            cutout: "50%",
        },
        {
            label: "23% Inactive",
            value: 23,
            color: "rgba(229,229,229, .7)",
            cutout: "50%",
        },
    ]

    const options = {
        // Enable responsive behavior
        plugins: {
            responsive: true,
            legend: {
                position: 'left',
                align: 'center',
                maxWidth: 400,
                labels: {
                    boxWidth: 15,
                    boxHeight: 15,
                }
            },

        },

        // Set cutout property based on data
        cutout: data.map((item) => item.cutout),
    };

    const finalData = {
        labels: data.map((item) => item.label),
        datasets: [
            {
                data: data.map((item) => Math.round(item.value)),
                backgroundColor: data.map((item) => item.color),
                borderColor: data.map((item) => item.color),
                borderWidth: 1,
                dataVisibility: new Array(data.length).fill(true),
            },
        ],
    };
    return (
        <div className="w-[300px] h-[200px] border-2 border-gray-400 ml-2 px-1 rounded-md">
            <p className="text-[16px]">Users</p>
            <p className="text-[23px] font-semibold">4209</p>
            <Doughnut data={ finalData } options={ options } className="" />
        </div>
    );
};

export default DoughnutChart;