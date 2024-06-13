"use client";
import Image from "next/image";
import Link from "next/link";
import { FaPen } from "react-icons/fa6";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Component() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  useEffect(() => {
    toast.success("All Answer Sheet Successfully Verified");
  }, []);
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
            <div className="w-20 h-2 bg-blue-500 ml-2 rounded-l-md" />
            <div className="w-20 h-2 bg-blue-500 mr-2 rounded-r-md" />
            <div className="rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center">
              3
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-around">
          <div className="border-8 border-[#9AE2C8] relative">
            <div className="absolute top-0 w-full bg-white flex items-center justify-between px-4 z-10 rounded shadow-lg">
              <div>
                <p>
                  Set <span className="text-[#3D70F5]">A</span>
                </p>
                <p>
                  Count <span className="text-[#25B900]">100</span>
                </p>
              </div>
              <div className="bg-[#D9D9D9] border-2 rounded-md p-2">
                <FaPen />
              </div>
            </div>
            <Image src="/examsheet1.jpg" width={280} height={600} />
          </div>
          <div className="border-8 border-[#9AE2C8] relative">
            <div className="absolute top-0 w-full bg-white flex items-center justify-between px-4 z-10 rounded shadow-lg">
              <div>
                <p>
                  Set <span className="text-[#3D70F5]">B</span>
                </p>
                <p>
                  Count <span className="text-[#25B900]">100</span>
                </p>
              </div>
              <div className="bg-[#D9D9D9] border-2 rounded-md p-2">
                <FaPen />
              </div>
            </div>
            <Image src="/examsheet2.jpg" width={280} height={600} />
          </div>
          <div className="border-8 border-[#9AE2C8] relative">
            <div className="absolute top-0 w-full bg-white flex items-center justify-between px-4 z-10 rounded shadow-lg">
              <div>
                <p>
                  Set <span className="text-[#3D70F5]">C</span>
                </p>
                <p>
                  Count <span className="text-[#25B900]">100</span>
                </p>
              </div>
              <div className="bg-[#D9D9D9] border-2 rounded-md p-2">
                <FaPen />
              </div>
            </div>
            <Image src="/examsheet3.jpg" width={280} height={600} />
          </div>
          <div className="border-8 border-[#9AE2C8] relative">
            <div className="absolute top-0 w-full bg-white flex items-center justify-between px-4 z-10 rounded shadow-lg">
              <div>
                <p>
                  Set <span className="text-[#3D70F5]">D</span>
                </p>
                <p>
                  Count <span className="text-[#25B900]">100</span>
                </p>
              </div>
              <div className="bg-[#D9D9D9] border-2 rounded-md p-2">
                <FaPen />
              </div>
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
            href="/adminPanel/Dashboard"
            className="px-14 py-3 bg-blue-500 text-white"
          >
            Finish
          </Link>
        </div>
      </div>
    </div>
  );
}
