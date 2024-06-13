"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Component() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const goBack = () => {
    router.back();
  };
  const fetchSetValue = () => {
    const Data = JSON.parse(window.localStorage.getItem("set_No"));
    setData(Data);
  };
  useEffect(() => {
    fetchSetValue();
  }, []);
  const Questions = [
    {
      id: 1,
      question_no: "Q-1",
      answer: "A",
    },
    {
      id: 2,
      question_no: "Q-2",
      answer: "A",
    },
    {
      id: 3,
      question_no: "Q-3",
      answer: "A",
    },
    {
      id: 4,
      question_no: "Q-4",
      answer: "A",
    },
    {
      id: 5,
      question_no: "Q-5",
      answer: "A",
    },
    {
      id: 6,
      question_no: "Q-5",
      answer: "A",
    },
    {
      id: 7,
      question_no: "Q-7",
      answer: "A",
    },
    {
      id: 8,
      question_no: "Q-8",
      answer: "A",
    },
    {
      id: 9,
      question_no: "Q-9",
      answer: "A",
    },
    {
      id: 10,
      question_no: "Q-10",
      answer: "A",
    },

    {
      id: 11,
      question_no: "Q-11",
      answer: "A",
    },
    {
      id: 12,
      question_no: "Q-12",
      answer: "A",
    },
    {
      id: 13,
      question_no: "Q-13",
      answer: "A",
    },
    {
      id: 14,
      question_no: "Q-14",
      answer: "A",
    },
    {
      id: 15,
      question_no: "Q-15",
      answer: "A",
    },
    {
      id: 16,
      question_no: "Q-15",
      answer: "A",
    },
    {
      id: 17,
      question_no: "Q-17",
      answer: "A",
    },
    {
      id: 18,
      question_no: "Q-18",
      answer: "A",
    },
    {
      id: 19,
      question_no: "Q-19",
      answer: "A",
    },
    {
      id: 20,
      question_no: "Q-20",
      answer: "A",
    },
    {
      id: 21,
      question_no: "Q-21",
      answer: "A",
    },
    {
      id: 22,
      question_no: "Q-22",
      answer: "A",
    },
    {
      id: 23,
      question_no: "Q-23",
      answer: "A",
    },
    {
      id: 24,
      question_no: "Q-24",
      answer: "A",
    },
    {
      id: 25,
      question_no: "Q-25",
      answer: "A",
    },
    {
      id: 26,
      question_no: "Q-25",
      answer: "A",
    },
    {
      id: 27,
      question_no: "Q-27",
      answer: "A",
    },
    {
      id: 28,
      question_no: "Q-28",
      answer: "A",
    },
    {
      id: 29,
      question_no: "Q-29",
      answer: "A",
    },
    {
      id: 30,
      question_no: "Q-30",
      answer: "A",
    },

    {
      id: 31,
      question_no: "Q-31",
      answer: "A",
    },
    {
      id: 32,
      question_no: "Q-32",
      answer: "A",
    },
    {
      id: 33,
      question_no: "Q-33",
      answer: "A",
    },
    {
      id: 34,
      question_no: "Q-34",
      answer: "A",
    },
    {
      id: 35,
      question_no: "Q-35",
      answer: "A",
    },
    {
      id: 36,
      question_no: "Q-35",
      answer: "A",
    },
    {
      id: 37,
      question_no: "Q-37",
      answer: "A",
    },
    {
      id: 38,
      question_no: "Q-38",
      answer: "A",
    },
    {
      id: 39,
      question_no: "Q-39",
      answer: "A",
    },
    {
      id: 40,
      question_no: "Q-40",
      answer: "A",
    },
    {
      id: 41,
      question_no: "Q-41",
      answer: "A",
    },
    {
      id: 42,
      question_no: "Q-42",
      answer: "A",
    },
    {
      id: 43,
      question_no: "Q-43",
      answer: "A",
    },
    {
      id: 44,
      question_no: "Q-44",
      answer: "A",
    },
    {
      id: 45,
      question_no: "Q-45",
      answer: "A",
    },
    {
      id: 46,
      question_no: "Q-45",
      answer: "A",
    },
    {
      id: 47,
      question_no: "Q-47",
      answer: "A",
    },
    {
      id: 48,
      question_no: "Q-48",
      answer: "A",
    },
    {
      id: 49,
      question_no: "Q-49",
      answer: "A",
    },
    {
      id: 50,
      question_no: "Q-50",
      answer: "A",
    },
  ];
  return (
    <div className="bg-white p-8">
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
            <div className="w-20 h-2 bg-gray-300 mr-2 rounded-r-md" />
            <div className="rounded-full bg-gray-300 text-gray-500 w-8 h-8 flex items-center justify-center">
              3
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-around p-2">
          <div className="border-8 border-gray-300">
            <Image src="/examsheet1.jpg" width={365} height={700} />
          </div>
          <div className="flex-1 p-4 border-2 border-gray-400 rounded-md ml-2">
            <h1 className="text-center mb-8 text-2xl">Set {data}</h1>
            <div className="flex flex-wrap justify-around ">
              {Questions.map((question, index) => (
                <div key={question.id} className="relative my-1">
                  <label
                    htmlFor="Subject"
                    className="absolute transition-all duration-300 text-md text-black bg-white -top-2 left-2 z-20 text-[13px]"
                  >
                    {question.question_no}
                  </label>
                  <input
                    id="Subject"
                    name="Subject"
                    type="text"
                    value={question.answer}
                    required
                    className="block w-32 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none p-1"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-10 bottom-6">
        <div className="">
          <button className="px-14 py-3 bg-white" onClick={goBack}>
            Previous
          </button>
          <Link
            href="/adminPanel/NewExam/CorrectAnsSheet3"
            className="px-14 py-3 bg-blue-500 text-white"
          >
            Save
          </Link>
        </div>
      </div>
    </div>
  );
}
