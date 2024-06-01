"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Component() {

    const router = useRouter();

    const [subject, setSubject] = useState("")
    const [examType, setExamType] = useState("")
    const [mcqCategory, setMcqCategory] = useState("")
    const [correctAns, setCorrectAns] = useState("")
    const [wrongAns, setWrongAns] = useState("0")
    const [bubbleThreshold, setBubbleThreshold] = useState("")
    const [status, setStatus] = useState("private")

    const formValue = {
        subject: subject,
        examType: examType,
        mcqCategory: mcqCategory,
        correctAns: correctAns,
        wrongAns: wrongAns,
        bubbleThreshold: bubbleThreshold,
        status: status,
    }
    const goBack = () => {
        router.back()
    }

    const nextPage = function () {
        ///adminPanel/NewExam/CorrectAnsSheet1
        window.localStorage.setItem('step_one_values', JSON.stringify(formValue));
        router.push("./NewExam/CorrectAnsSheet1", { scroll: false });

    }

    const fetchData = () => {
        const Data = JSON.parse(window.localStorage.getItem("step_one_values"))
        console.log(Data)
        setSubject(Data ? Data.subject : "")
        setExamType(Data ? Data.examType : "")
        setMcqCategory(Data ? Data.mcqCategory : "")
        setCorrectAns(Data ? Data.correctAns : "")
        setWrongAns(Data ? Data.wrongAns : "0")
        setBubbleThreshold(Data ? Data.bubbleThreshold : "50")
        setStatus(Data ? Data.status : "private")


    }
    useEffect(() => {
        console.log(formValue)
    }, [formValue])

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="bg-white p-8">
            <div className="flex items-center border-b pb-4">
                <div className="border-r-2 border-gray-500 mr-3 w-44">
                    <h1 className="text-2xl font-bold">New Exam</h1>
                </div>
                <div className="flex space-x-4 w-full">
                    <button variant="secondary">Exam Details</button>
                    <div className="flex items-center">
                        <div className="rounded-full bg-blue-500 text-white w-8 h-8 flex items-center justify-center">1</div>
                        <div className="w-20 h-2 bg-blue-500 ml-2 rounded-l-md" />
                        <div className="w-20 h-2 bg-gray-300 mr-2 rounded-r-md" />
                        <div className="rounded-full bg-gray-300 text-gray-500 w-8 h-8 flex items-center justify-center">2</div>
                        <div className="w-20 h-2 bg-gray-300 ml-2 rounded-l-md" />
                        <div className="w-20 h-2 bg-gray-300 mr-2 rounded-r-md" />
                        <div className="rounded-full bg-gray-300 text-gray-500 w-8 h-8 flex items-center justify-center">3</div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-3 mt-6">
                <div className='relative my-6'>
                    <label
                        htmlFor="Subject"
                        className="absolute transition-all duration-300 text-md text-black bg-white -top-3 left-2 z-20"
                    >
                        Subject
                    </label>
                    <input
                        id="Subject"
                        name="Subject"
                        type="text"
                        required
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none p-2"
                        defaultValue={ subject }
                        onChange={ (e) => setSubject(e.target.value) }
                    />
                </div>
                <div className="relative my-6">
                    <label
                        htmlFor="Subject"
                        className="absolute transition-all duration-300 text-md text-black bg-white -top-3 left-2 z-20"
                    >
                        Exam Type*
                    </label>
                    <select
                        className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        name="examType"
                        defaultValue={ examType }
                        onChange={ (e) => setExamType(e.target.value) }
                    >
                        <option value="Mid Term">
                            Mid Term
                        </option>
                        <option value="Final Term">
                            Final Term
                        </option>
                    </select>
                </div>
                <div className="relative my-6">
                    <label
                        htmlFor="Subject"
                        className="absolute transition-all duration-300 text-md text-black bg-white -top-3 left-2 z-20"
                    >
                        MCQ Category*
                    </label>
                    <select
                        className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        name="mcqCategory"
                        defaultValue={ mcqCategory }
                        onChange={ (e) => setMcqCategory(e.target.value) }
                    >
                        <option value={ "50 mcq" } >
                            50 MCQs
                        </option>
                        <option value={ "100 mcq" } >
                            100 MCQs
                        </option>
                    </select>
                </div>
                <div className='relative my-6'>
                    <label
                        htmlFor="Subject"
                        className="absolute transition-all duration-300 text-md text-black bg-white -top-3 left-2 z-20"
                    >
                        Correct Answer Mark *
                    </label>
                    <input
                        type="text"
                        required
                        name="correctAns"
                        defaultValue={ correctAns }
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none p-2"
                        onChange={ (e) => setCorrectAns(e.target.value) }
                    />
                </div>
                <div className='relative my-6'>
                    <label
                        htmlFor="Subject"
                        className="absolute transition-all duration-300 text-md text-black bg-white -top-3 left-2 z-20"
                    >
                        Wrong Answer Mark *
                    </label>
                    <input
                        type="text"
                        defaultValue={ wrongAns }
                        required
                        name="wrongAns"
                        className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none p-2"
                        onChange={ (e) => setWrongAns(e.target.value) }
                    />
                </div>
            </div>
            <div className="grid grid-cols-3 w-full">
                <div className="my-6 grid grid-cols-2 col-span-2 w-full border-2 border-dashed border-gray-400 rounded-md">
                    <div className="px-4 py-3">
                        <label className="block mb-2 font-medium">Bubble Threshold Adjustment</label>
                        <input
                            className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                            max="100"
                            min="0"
                            type="range"
                            name="bubbleThreshold"
                            defaultValue={ bubbleThreshold }
                            onChange={ (e) => setBubbleThreshold(e.target.value) }
                        />
                    </div>
                    <div className="my-6 ">
                        <Image src="/abc.png" alt="Illustration" width={ 200 } height={ 200 } className='my-2 mx-auto' />
                    </div>
                </div>
                <div className="border-2 border-dashed border-gray-500 mx-6 my-6 rounded-md p-6">
                    <label className="block font-medium">Publish as</label>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            { status == "private" ? <input className="w-4 h-4" type="radio" value="private" name="status"
                                onChange={ (e) => setStatus(e.target.value) } defaultChecked /> : <input className="w-4 h-4" type="radio" value="private" name="status"
                                    onChange={ (e) => setStatus(e.target.value) } /> }
                            <label className="ml-2" htmlFor="private" >
                                Private
                            </label>
                        </div>
                        <div className="flex items-center">
                            { status == "public" ? <input className="w-4 h-4" type="radio" value="public" name="status"
                                onChange={ (e) => setStatus(e.target.value) } defaultChecked /> : <input className="w-4 h-4" type="radio" value="public" name="status"
                                    onChange={ (e) => setStatus(e.target.value) } /> }
                            <label className="ml-2" htmlFor="public">
                                Public
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Upload or Scan Answer Sheets</h2>
                <div className="flex flex-col items-center justify-center p-10 border-2 border-dashed rounded-lg">
                    <UploadIcon className="text-blue-500 w-12 h-12 mb-4" />
                    <button variant="outline" >Click To Upload Correct Answer Sheets</button>
                    <p className="text-sm text-gray-500 mt-2">JPG, PNG or PDF, file size no more than 10MB</p>
                </div>
            </div>
            <div className="absolute right-10 bottom-6">
                <div className="">
                    <button className="px-14 py-3 bg-white" onClick={ goBack }>Previous</button>
                    <button onClick={ nextPage } className="px-14 py-3 bg-blue-500 text-white">Next</button>
                </div>
            </div>
        </div>
    )
}

function UploadIcon(props) {
    return (
        <svg
            { ...props }
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
    )
}
