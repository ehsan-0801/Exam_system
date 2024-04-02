"use client"
import React, { useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
const BatchStorage = () => {
    const examdetails = [
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "End-of-Semester Test ",
            file_size: "114 MB",
            owner: "Mahadi Hasan",
            created_in: "5 days ago",
        },
        {
            exam_name: "10th Grade Math Final",
            file_size: "8.2 MB",
            owner: "Jisan Khan",
            created_in: "2 days ago",
        },
        {
            exam_name: "Biology 101 Midterm",
            file_size: "10 MB",
            owner: "Jisan Khan",
            created_in: "1 days ago",
        },
        {
            exam_name: "Comprehensive Exam",
            file_size: "25 MB",
            owner: "Mahiya Jannat",
            created_in: "14 days ago",
        },
        {
            exam_name: "Annual Examination 2023",
            file_size: "400 MB",
            owner: "Furuya Rei",
            created_in: "14 days ago",
        },
        {
            exam_name: "Final Assestment Exam",
            file_size: "450 MB",
            owner: "Mahadi Hasan",
            created_in: "1 month ago",
        },
        {
            exam_name: "Midterm Examination 2023",
            file_size: "300 MB",
            owner: "James Black",
            created_in: "24 days ago",
        },
    ]
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;
    const totalPages = Math.ceil(examdetails.length / itemsPerPage);

    const goToPreviousPage = () => {
        setCurrentPage(Math.max(currentPage - 1, 1));
    };

    const goToNextPage = () => {
        setCurrentPage(Math.min(currentPage + 1, totalPages));
    };

    const slicedData = examdetails.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const windowSize = 5; // Number of page numbers to display

    // Calculate starting and ending page numbers dynamically
    const startPage = Math.max(1, Math.min(currentPage - Math.floor(windowSize / 2), totalPages - windowSize + 1));
    const endPage = Math.min(totalPages, startPage + windowSize - 1);
    return (
        <div className="container mt-2 mx-2 shadow-md border-2 border-gray-300 rounded-md px-3 py-1">
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold'>Batches Using IMR storage</h1>
                </div>
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
            <table className="table-auto w-full text-left">
                <thead>
                    <tr className=" text-black text-sm">
                        <th className="p-2">Exam Name</th>
                        <th className="p-2">File Size</th>
                        <th className="p-2">Owner</th>
                        <th className="p-2">Created</th>
                        <th className="p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    { slicedData.map((exam, index) => (
                        <tr key={ index } className="text-sm border-b-2 border-gray-300">
                            <td className="p-2">{ exam.exam_name }</td>
                            <td className="p-2">{ exam.file_size }</td>
                            <td className="p-2">{ exam.owner }</td>
                            <td className="p-2">{ exam.created_in }</td>
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

export default BatchStorage;