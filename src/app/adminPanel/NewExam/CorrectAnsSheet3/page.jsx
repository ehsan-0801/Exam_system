import Image from "next/image";
import Link from "next/link";
import { FaPen } from "react-icons/fa6";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
export default function Component() {
    return (
        <div className="bg-white p-8">
            <div className="flex items-center border-b pb-4">
                <div className="border-r-2 border-gray-500 mr-3 w-44">
                    <h1 className="text-2xl font-bold">New Exam</h1>
                </div>
                <div className="flex space-x-4 w-full">
                    <button variant="secondary">Correct Answer Sheets</button>
                    <div className="flex items-center">
                        <div className="rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center">1</div>
                        <div className="w-20 h-2 bg-blue-500 ml-2 rounded-l-md" />
                        <div className="w-20 h-2 bg-blue-500 mr-2 rounded-r-md" />
                        <div className="rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center">2</div>
                        <div className="w-20 h-2 bg-blue-500 ml-2 rounded-l-md" />
                        <div className="w-20 h-2 bg-blue-500 mr-2 rounded-r-md" />
                        <div className="rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center">3</div>
                    </div>
                </div>
            </div>
            <div >
                <div className="flex items-center justify-end">
                    <div className="flex items-center justify-around w-1/3 py-4 px-8 bg-[#E7F9EB] my-6 rounded shadow-md">
                        <div>
                            <p className="text-4xl"><IoCheckmarkDoneCircleOutline /></p>
                        </div>
                        <div>
                            <p className="text-[#2E8760] font-semibold ">All Answer Sheet Successfully Verified</p>
                            <p className="text-xs font-semibolds">Today 10:30PM</p>
                        </div>
                        <div className="relative">
                            <p className="absolute -top-4 mx-1"><IoMdClose /></p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-around">
                    <div className="border-8 border-[#9AE2C8] relative">
                        <div className="absolute top-0 w-full bg-white flex items-center justify-between px-4 z-10 rounded shadow-lg">
                            <div>
                                <p>Set <span className="text-[#3D70F5]">A</span></p>
                                <p>Count <span className="text-[#25B900]">100</span></p>
                            </div>
                            <div className="bg-[#D9D9D9] border-2 rounded-md p-2">
                                <FaPen />
                            </div>
                        </div>
                        <Image src="/examsheet1.jpg" width={ 280 } height={ 600 } />
                    </div>
                    <div className="border-8 border-[#9AE2C8] relative">
                        <div className="absolute top-0 w-full bg-white flex items-center justify-between px-4 z-10 rounded shadow-lg">
                            <div>
                                <p>Set <span className="text-[#3D70F5]">B</span></p>
                                <p>Count <span className="text-[#25B900]">100</span></p>
                            </div>
                            <div className="bg-[#D9D9D9] border-2 rounded-md p-2">
                                <FaPen />
                            </div>
                        </div>
                        <Image src="/examsheet2.jpg" width={ 280 } height={ 600 } />
                    </div>
                    <div className="border-8 border-[#9AE2C8] relative">
                        <div className="absolute top-0 w-full bg-white flex items-center justify-between px-4 z-10 rounded shadow-lg">
                            <div>
                                <p>Set <span className="text-[#3D70F5]">C</span></p>
                                <p>Count <span className="text-[#25B900]">100</span></p>
                            </div>
                            <div className="bg-[#D9D9D9] border-2 rounded-md p-2">
                                <FaPen />
                            </div>
                        </div>
                        <Image src="/examsheet3.jpg" width={ 280 } height={ 600 } />
                    </div>
                    <div className="border-8 border-[#9AE2C8] relative">
                        <div className="absolute top-0 w-full bg-white flex items-center justify-between px-4 z-10 rounded shadow-lg">
                            <div>
                                <p>Set <span className="text-[#3D70F5]">D</span></p>
                                <p>Count <span className="text-[#25B900]">100</span></p>
                            </div>
                            <div className="bg-[#D9D9D9] border-2 rounded-md p-2">
                                <FaPen />
                            </div>
                        </div>
                        <Image src="/examsheet4.jpg" width={ 280 } height={ 600 } />
                    </div>
                </div>
            </div>
            <div className="absolute right-10 bottom-6">
                <div className="">
                    <button className="px-14 py-3 bg-white">Previous</button>
                    <Link href="/adminPanel/Dashboard" className="px-14 py-3 bg-blue-500 text-white">Finish</Link>
                </div>
            </div>
        </div>
    )
}
