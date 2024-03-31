"use client"
import { Doughnut } from "react-chartjs-2";
import {
    Chart, ArcElement, CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from 'react-chartjs-2';

Chart.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend);

const data = {
    datasets: [
        {
            data: [69, 31],
            backgroundColor: [
                "#D7EEFF",
                "#6FB8EF"
            ],
            display: true,
        }
    ]
};
const labels = ["Midterm Examination 2024", "Final Assessment", "End-of-Semester Test", "Annual Examination 2023"];
const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    barPercentage: 0.5,
    barThickness: 20,
    maintainAspectRatio: false,
    responsive: true, // Ensures chart adapts to container size
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: false,
        },
    },
    rotation: -90,
    circumference: 180,
    cutout: "70%",
};
const data2 = {
    labels: labels,
    fill: false,
    datasets: [{
        data: [68, 110, 128, 90],
        axis: 'y',
        backgroundColor: [
            '#59A1F5',
            '#FFBA00',
            '#D5011D',
            '#00B8FA'
        ],

        borderWidth: 1
    }]
};
const Analytics = () => {
    return (
        <div className="flex items-center ">
            <div className="w-full p-6 border-2 border-gray-400 shadow-md rounded-md mx-2">
                <Bar options={ options } data={ data2 } />
            </div>
            <div className=" relative p-6 border-2 border-gray-400 rounded-md">
                <Doughnut
                    data={ data }
                    options={ {
                        plugins: {
                            legend: {
                                display: false,
                            },
                            tooltip: {
                                enabled: false
                            }
                        },
                        rotation: -90,
                        circumference: 180,
                        cutout: "70%",
                        maintainAspectRatio: true,
                        responsive: true,
                        maintainAspectRatio: false,

                    } }
                />
                <div>
                    <p
                        style={ {
                            position: "absolute",
                            top: "95%",
                            left: "13%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                            textColor: "#D7EEFF",
                            fontSize: "15px",

                        } }>
                        0GB
                    </p>

                    <p style={ {
                        position: "absolute",
                        top: "75%",
                        left: "53%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        fontSize: "50px",
                    } }>69%</p>
                    <p
                        style={ {
                            position: "absolute",
                            top: "95%",
                            left: "87%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                            textColor: "#D7EEFF",
                            fontSize: "15px",

                        } }>
                        256GB
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Analytics;