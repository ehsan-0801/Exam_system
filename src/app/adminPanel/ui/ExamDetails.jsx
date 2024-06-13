"use client"
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import {
  BsThreeDotsVertical,
  BsPencilSquare,
  BsTrash,
  BsCheck2Circle,
} from "react-icons/bs";
import Swal from "sweetalert2";

const ExamDetails = ({ exam, fetchData }) => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const examId = parseInt(exam.id);
  console.log(examId);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleEditClick = () => {
    setShowDropdown(false);
    router.push(`/adminPanel/EditExam/${examId}`);
  };

  const handleDeleteClick = async (id) => {
    setShowDropdown(false);
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const res = await fetch(`http://localhost:3000/api/exam/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          console.log("Exam Profile deleted successfully");
          Swal.fire(
            "Deleted!",
            "The exam profile has been deleted.",
            "success"
          );
          fetchData(); // Refetch the data after deletion
        } else {
          console.error("Failed to delete Exam Profile");
          Swal.fire("Failed to delete Exam Profile");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePublishClick = () => {
    setShowDropdown(false);
    // Implement publish logic here (e.g., API call to mark as published)
    console.log("Publish clicked");
  };

  const formattedDate = (date) => {
    try {
      let dt = new Date(date);
      const formattedDate = dt.toISOString().substring(0, 10);
      return formattedDate;
    } catch (e) {
      return date;
    }
  };

  return (
    <div className="border-2 border-gray-300 p-2 rounded">
      <div className="flex items-center justify-between">
        <div>
          <div className="grid grid-cols-2 my-4">
            <h1>Created By</h1>
            <p className="text-[#914AD9] font-bold">: {exam?.user.name}</p>
          </div>
          <div className="grid grid-cols-2">
            <h1>Date</h1>
            <p className="text-[#914AD9] font-bold">
              : {formattedDate(exam?.exam_date)}
            </p>
          </div>
        </div>
        <div className="ml-4 relative">
          <BsThreeDotsVertical onClick={handleDropdownClick} />
          {showDropdown && (
            <div className="absolute right-0 shadow-md bg-white rounded-md">
              <ul className="p-2">
                <li
                  className="hover:bg-gray-200 p-2 flex items-center"
                  onClick={handleEditClick}
                >
                  <BsPencilSquare className="mr-2" /> Edit
                </li>
                <li
                  className="hover:bg-gray-200 p-2 flex items-center"
                  onClick={() => handleDeleteClick(examId)}
                >
                  <BsTrash className="mr-2" /> Delete
                </li>
                {exam.status == "private" && (
                  <li
                    className="hover:bg-gray-200 p-2 flex items-center"
                    onClick={handlePublishClick}
                  >
                    <BsCheck2Circle className="mr-2" /> Publish
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="my-4">
        <p className="text-[24px] font-[500]">{exam.exam_type}</p>
        <p>Subject: {exam.subject}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[#5B93FF] text-xs font-bold p-2 rounded bg-[#dcdfe5]">
          Correct Mark: {exam.correct_ans}
        </p>
        <p className="text-[#E71D36] text-xs font-bold p-2 rounded bg-[#f7d1d1]">
          Wrong Mark: {exam.Wrong_ans}
        </p>
        <p className="text-[#3A974C] text-xs font-bold p-2 rounded bg-[#cbe3c7]">
          MCQ: {exam.mcq_category}
        </p>
      </div>
    </div>
  );
};

export default ExamDetails;
