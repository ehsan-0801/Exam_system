"use client"
import React, { useEffect, useRef, useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { BsThreeDotsVertical, BsPencilSquare, BsTrash, BsCheck2Circle } from "react-icons/bs";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Pagination from './Pagination';
import Action from './Action';
const Userslist = () => {
    const Data = [
        {
            id: "1022",
            organization: "Nawab Faizunnessa Government Girls' High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1023",
            organization: "Cantonment Public School and College",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1024",
            organization: "Comilla Modern High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1025",
            organization: "BRAC University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Inactive"
        },
        {
            id: "1026",
            organization: "Bangladesh University of Engineering and Technology",
            issued_date: "03-sep-2023",
            expiry_date: "03-sep-2024",
            status: "Active"
        },
        {
            id: "1027",
            organization: "Islamic University of Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1028",
            organization: "Ahsanullah University of Science and Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1029",
            organization: "Bangabandhu Sheikh Mujib Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1030",
            organization: "Rajshahi Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1023",
            organization: "Cantonment Public School and College",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1025",
            organization: "BRAC University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Inactive"
        },
        {
            id: "1024",
            organization: "Comilla Modern High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1026",
            organization: "Bangladesh University of Engineering and Technology",
            issued_date: "03-sep-2023",
            expiry_date: "03-sep-2024",
            status: "Active"
        },
        {
            id: "1022",
            organization: "Nawab Faizunnessa Government Girls' High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1028",
            organization: "Ahsanullah University of Science and Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1027",
            organization: "Islamic University of Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1030",
            organization: "Rajshahi Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1029",
            organization: "Bangabandhu Sheikh Mujib Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1022",
            organization: "Nawab Faizunnessa Government Girls' High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1023",
            organization: "Cantonment Public School and College",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1024",
            organization: "Comilla Modern High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1025",
            organization: "BRAC University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Inactive"
        },
        {
            id: "1026",
            organization: "Bangladesh University of Engineering and Technology",
            issued_date: "03-sep-2023",
            expiry_date: "03-sep-2024",
            status: "Active"
        },
        {
            id: "1027",
            organization: "Islamic University of Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1028",
            organization: "Ahsanullah University of Science and Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1029",
            organization: "Bangabandhu Sheikh Mujib Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1030",
            organization: "Rajshahi Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1023",
            organization: "Cantonment Public School and College",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1025",
            organization: "BRAC University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Inactive"
        },
        {
            id: "1024",
            organization: "Comilla Modern High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1026",
            organization: "Bangladesh University of Engineering and Technology",
            issued_date: "03-sep-2023",
            expiry_date: "03-sep-2024",
            status: "Active"
        },
        {
            id: "1022",
            organization: "Nawab Faizunnessa Government Girls' High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1028",
            organization: "Ahsanullah University of Science and Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1027",
            organization: "Islamic University of Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1030",
            organization: "Rajshahi Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1029",
            organization: "Bangabandhu Sheikh Mujib Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1022",
            organization: "Nawab Faizunnessa Government Girls' High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1023",
            organization: "Cantonment Public School and College",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1024",
            organization: "Comilla Modern High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1025",
            organization: "BRAC University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Inactive"
        },
        {
            id: "1026",
            organization: "Bangladesh University of Engineering and Technology",
            issued_date: "03-sep-2023",
            expiry_date: "03-sep-2024",
            status: "Active"
        },
        {
            id: "1027",
            organization: "Islamic University of Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1028",
            organization: "Ahsanullah University of Science and Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1029",
            organization: "Bangabandhu Sheikh Mujib Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1030",
            organization: "Rajshahi Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1023",
            organization: "Cantonment Public School and College",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1025",
            organization: "BRAC University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Inactive"
        },
        {
            id: "1024",
            organization: "Comilla Modern High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1026",
            organization: "Bangladesh University of Engineering and Technology",
            issued_date: "03-sep-2023",
            expiry_date: "03-sep-2024",
            status: "Active"
        },
        {
            id: "1022",
            organization: "Nawab Faizunnessa Government Girls' High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1028",
            organization: "Ahsanullah University of Science and Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1027",
            organization: "Islamic University of Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1030",
            organization: "Rajshahi Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1029",
            organization: "Bangabandhu Sheikh Mujib Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1022",
            organization: "Nawab Faizunnessa Government Girls' High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1023",
            organization: "Cantonment Public School and College",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1024",
            organization: "Comilla Modern High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1025",
            organization: "BRAC University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Inactive"
        },
        {
            id: "1026",
            organization: "Bangladesh University of Engineering and Technology",
            issued_date: "03-sep-2023",
            expiry_date: "03-sep-2024",
            status: "Active"
        },
        {
            id: "1027",
            organization: "Islamic University of Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1028",
            organization: "Ahsanullah University of Science and Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1029",
            organization: "Bangabandhu Sheikh Mujib Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1030",
            organization: "Rajshahi Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1023",
            organization: "Cantonment Public School and College",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1025",
            organization: "BRAC University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Inactive"
        },
        {
            id: "1024",
            organization: "Comilla Modern High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1026",
            organization: "Bangladesh University of Engineering and Technology",
            issued_date: "03-sep-2023",
            expiry_date: "03-sep-2024",
            status: "Active"
        },
        {
            id: "1022",
            organization: "Nawab Faizunnessa Government Girls' High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1028",
            organization: "Ahsanullah University of Science and Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1027",
            organization: "Islamic University of Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1030",
            organization: "Rajshahi Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1029",
            organization: "Bangabandhu Sheikh Mujib Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1022",
            organization: "Nawab Faizunnessa Government Girls' High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1023",
            organization: "Cantonment Public School and College",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1024",
            organization: "Comilla Modern High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1025",
            organization: "BRAC University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Inactive"
        },
        {
            id: "1026",
            organization: "Bangladesh University of Engineering and Technology",
            issued_date: "03-sep-2023",
            expiry_date: "03-sep-2024",
            status: "Active"
        },
        {
            id: "1027",
            organization: "Islamic University of Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1028",
            organization: "Ahsanullah University of Science and Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1029",
            organization: "Bangabandhu Sheikh Mujib Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1030",
            organization: "Rajshahi Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1023",
            organization: "Cantonment Public School and College",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1025",
            organization: "BRAC University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Inactive"
        },
        {
            id: "1024",
            organization: "Comilla Modern High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1026",
            organization: "Bangladesh University of Engineering and Technology",
            issued_date: "03-sep-2023",
            expiry_date: "03-sep-2024",
            status: "Active"
        },
        {
            id: "1022",
            organization: "Nawab Faizunnessa Government Girls' High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1028",
            organization: "Ahsanullah University of Science and Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1027",
            organization: "Islamic University of Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1030",
            organization: "Rajshahi Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1029",
            organization: "Bangabandhu Sheikh Mujib Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1022",
            organization: "Nawab Faizunnessa Government Girls' High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1023",
            organization: "Cantonment Public School and College",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1024",
            organization: "Comilla Modern High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1025",
            organization: "BRAC University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Inactive"
        },
        {
            id: "1026",
            organization: "Bangladesh University of Engineering and Technology",
            issued_date: "03-sep-2023",
            expiry_date: "03-sep-2024",
            status: "Active"
        },
        {
            id: "1027",
            organization: "Islamic University of Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1028",
            organization: "Ahsanullah University of Science and Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1029",
            organization: "Bangabandhu Sheikh Mujib Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1030",
            organization: "Rajshahi Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1023",
            organization: "Cantonment Public School and College",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1025",
            organization: "BRAC University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Inactive"
        },
        {
            id: "1024",
            organization: "Comilla Modern High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1026",
            organization: "Bangladesh University of Engineering and Technology",
            issued_date: "03-sep-2023",
            expiry_date: "03-sep-2024",
            status: "Active"
        },
        {
            id: "1022",
            organization: "Nawab Faizunnessa Government Girls' High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1028",
            organization: "Ahsanullah University of Science and Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1027",
            organization: "Islamic University of Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1030",
            organization: "Rajshahi Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1029",
            organization: "Bangabandhu Sheikh Mujib Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1022",
            organization: "Nawab Faizunnessa Government Girls' High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1023",
            organization: "Cantonment Public School and College",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1024",
            organization: "Comilla Modern High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1025",
            organization: "BRAC University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Inactive"
        },
        {
            id: "1026",
            organization: "Bangladesh University of Engineering and Technology",
            issued_date: "03-sep-2023",
            expiry_date: "03-sep-2024",
            status: "Active"
        },
        {
            id: "1027",
            organization: "Islamic University of Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1028",
            organization: "Ahsanullah University of Science and Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1029",
            organization: "Bangabandhu Sheikh Mujib Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1030",
            organization: "Rajshahi Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1023",
            organization: "Cantonment Public School and College",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1025",
            organization: "BRAC University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Inactive"
        },
        {
            id: "1024",
            organization: "Comilla Modern High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1026",
            organization: "Bangladesh University of Engineering and Technology",
            issued_date: "03-sep-2023",
            expiry_date: "03-sep-2024",
            status: "Active"
        },
        {
            id: "1022",
            organization: "Nawab Faizunnessa Government Girls' High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1028",
            organization: "Ahsanullah University of Science and Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1027",
            organization: "Islamic University of Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1030",
            organization: "Rajshahi Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1029",
            organization: "Bangabandhu Sheikh Mujib Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1022",
            organization: "Nawab Faizunnessa Government Girls' High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1023",
            organization: "Cantonment Public School and College",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1024",
            organization: "Comilla Modern High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1025",
            organization: "BRAC University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Inactive"
        },
        {
            id: "1026",
            organization: "Bangladesh University of Engineering and Technology",
            issued_date: "03-sep-2023",
            expiry_date: "03-sep-2024",
            status: "Active"
        },
        {
            id: "1027",
            organization: "Islamic University of Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1028",
            organization: "Ahsanullah University of Science and Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1029",
            organization: "Bangabandhu Sheikh Mujib Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1030",
            organization: "Rajshahi Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1023",
            organization: "Cantonment Public School and College",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1025",
            organization: "BRAC University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Inactive"
        },
        {
            id: "1024",
            organization: "Comilla Modern High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1026",
            organization: "Bangladesh University of Engineering and Technology",
            issued_date: "03-sep-2023",
            expiry_date: "03-sep-2024",
            status: "Active"
        },
        {
            id: "1022",
            organization: "Nawab Faizunnessa Government Girls' High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1028",
            organization: "Ahsanullah University of Science and Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1027",
            organization: "Islamic University of Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1030",
            organization: "Rajshahi Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1029",
            organization: "Bangabandhu Sheikh Mujib Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1022",
            organization: "Nawab Faizunnessa Government Girls' High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1023",
            organization: "Cantonment Public School and College",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1024",
            organization: "Comilla Modern High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1025",
            organization: "BRAC University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Inactive"
        },
        {
            id: "1026",
            organization: "Bangladesh University of Engineering and Technology",
            issued_date: "03-sep-2023",
            expiry_date: "03-sep-2024",
            status: "Active"
        },
        {
            id: "1027",
            organization: "Islamic University of Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1028",
            organization: "Ahsanullah University of Science and Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1029",
            organization: "Bangabandhu Sheikh Mujib Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1030",
            organization: "Rajshahi Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1023",
            organization: "Cantonment Public School and College",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1025",
            organization: "BRAC University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Inactive"
        },
        {
            id: "1024",
            organization: "Comilla Modern High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1026",
            organization: "Bangladesh University of Engineering and Technology",
            issued_date: "03-sep-2023",
            expiry_date: "03-sep-2024",
            status: "Active"
        },
        {
            id: "1022",
            organization: "Nawab Faizunnessa Government Girls' High School",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1028",
            organization: "Ahsanullah University of Science and Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1027",
            organization: "Islamic University of Technology",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1030",
            organization: "Rajshahi Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
        {
            id: "1029",
            organization: "Bangabandhu Sheikh Mujib Medical University",
            issued_date: "16-dec-2023",
            expiry_date: "16-dec-2024",
            status: "Active"
        },
    ]
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const totalPages = Math.ceil(Data.length / itemsPerPage);

    const goToPreviousPage = () => {
        setCurrentPage(Math.max(currentPage - 1, 1));
    };

    const goToNextPage = () => {
        setCurrentPage(Math.min(currentPage + 1, totalPages));
    };

    const slicedData = Data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );


    return (
        <div>
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
                    { slicedData.map((user, index) => (
                        <tr key={ index } className="text-sm border-b-2 border-gray-300">
                            <td className="p-2">{ user.id }</td>
                            <td className="p-2 flex items-center"> <FaUserCircle className='mr-3 text-2xl text-gray-400' />  { user.organization }</td>
                            <td className="p-2">{ user.issued_date }</td>
                            <td className="p-2">{ user.expiry_date }</td>
                            <td className={ user.status == "Active" ? ` text-[#2E8760] font-bold p-2` : ` text-[#E71D36] font-bold p-2` }>{ user.status }</td>
                            <td className="p-2">
                                <Action />
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
            <Pagination currentPage={ currentPage } totalPages={ totalPages } goToPreviousPage={ goToPreviousPage } goToNextPage={ goToNextPage } />
        </div>
    );
};

export default Userslist;