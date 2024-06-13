"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaPen } from "react-icons/fa6";
import { ToastContainer } from "react-toastify";

export default function Component({ formValue }) {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  const SendData = (data) => {
    window.localStorage.removeItem("set_No");
    window.localStorage.setItem("set_No", JSON.stringify(data));
    router.push("./CorrectAnsSheet2");
  };

  return (
    <div className="bg-white p-8">
      <ToastContainer />
      <div className="flex items-center border-b pb-4">
        <div className="border-r-2 border-gray-500 mr-3 w-44">
          <h1 className="text-2xl font-bold">Edit Exam</h1>
        </div>
        <div className="flex space-x-4 w-full">
          <button variant="secondary">Correct Answer Sheets</button>
          <div className="flex items-center">
            <div className="rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center">
              1
            </div>
            <div className="w-20 h-2 bg-blue-500 ml-2 rounded-l-md" />
            <div className="w-20 h-2 bg-blue-500 mr-2 rounded-r-md" />
            <div className="rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center">
              2
            </div>
            <div className="w-20 h-2 bg-gray-300 ml-2 rounded-l-md" />
            <div className="w-20 h-2 bg-gray-300 mr-2 rounded-r-md" />
            <div className="rounded-full bg-gray-300 text-gray-500 w-8 h-8 flex items-center justify-center">
              3
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-around">
          <div className="border-8 border-gray-300 relative">
            <div className="absolute top-0 w-full bg-white flex items-center justify-between px-4 z-10 rounded shadow-lg">
              <span>
                <p>
                  Set <span className="text-[#3D70F5]">A</span>
                </p>
                <p>
                  Count{" "}
                  <span className="text-[#f30e0ef1] font-semibold">99</span>
                </p>
              </span>
              <button
                onClick={() => SendData("A")}
                className="bg-[#D9D9D9] border-2 rounded-md p-2"
              >
                <FaPen />
              </button>
            </div>
            <Image src="/examsheet1.jpg" width={280} height={600} />
          </div>

          <div className="border-8 border-gray-300 relative">
            <div className="absolute top-0 w-full bg-white flex items-center justify-between px-4 z-10 rounded shadow-lg">
              <div>
                <p>
                  Set <span className="text-[#3D70F5]">B</span>
                </p>
                <p>
                  Count{" "}
                  <span className="text-[#f30e0ef1] font-semibold">99</span>
                </p>
              </div>
              <button
                onClick={() => SendData("B")}
                className="bg-[#D9D9D9] border-2 rounded-md p-2"
              >
                <FaPen />
              </button>
            </div>
            <Image src="/examsheet2.jpg" width={280} height={600} />
          </div>
          <div className="border-8 border-gray-300 relative">
            <div className="absolute top-0 w-full bg-white flex items-center justify-between px-4 z-10 rounded shadow-lg">
              <div>
                <p>
                  Set <span className="text-[#3D70F5]">C</span>
                </p>
                <p>
                  Count <span className="text-[#f30e0ef1]">99</span>
                </p>
              </div>
              <button
                onClick={() => SendData("C")}
                className="bg-[#D9D9D9] border-2 rounded-md p-2"
              >
                <FaPen />
              </button>
            </div>
            <Image src="/examsheet3.jpg" width={280} height={600} />
          </div>
          <div className="border-8 border-gray-300 relative">
            <div className="absolute top-0 w-full bg-white flex items-center justify-between px-4 z-10 rounded shadow-lg">
              <div>
                <p>
                  Set <span className="text-[#3D70F5]">D</span>
                </p>
                <p>
                  Count <span className="text-[#f30e0ef1]">99</span>
                </p>
              </div>
              <button
                onClick={() => SendData("C")}
                className="bg-[#D9D9D9] border-2 rounded-md p-2"
              >
                <FaPen />
              </button>
            </div>
            <Image src="/examsheet4.jpg" width={280} height={600} />
          </div>
        </div>
      </div>
      <div className="absolute right-10 bottom-6">
        <div className="">
          <button className="px-14 py-3 bg-white" onClick={goBack}>
            Previous
          </button>
          <Link
            href="/adminPanel/NewExam/CorrectAnsSheet2"
            className="px-14 py-3 bg-blue-500 text-white"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
