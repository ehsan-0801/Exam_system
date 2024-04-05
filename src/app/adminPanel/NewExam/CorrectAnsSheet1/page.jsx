import Image from "next/image";
import Link from "next/link"
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
                        <div className="w-20 h-2 bg-gray-300 ml-2 rounded-l-md" />
                        <div className="w-20 h-2 bg-gray-300 mr-2 rounded-r-md" />
                        <div className="rounded-full bg-gray-300 text-gray-500 w-8 h-8 flex items-center justify-center">3</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-around">
                    <div className="border-8 border-gray-300">
                        <Image src="/examsheet1.jpg" width={ 280 } height={ 600 } />
                    </div>

                    <div className="border-8 border-gray-300">
                        <Image src="/examsheet2.jpg" width={ 280 } height={ 600 } />
                    </div>
                    <div className="border-8 border-gray-300">
                        <Image src="/examsheet3.jpg" width={ 280 } height={ 600 } />
                    </div>
                    <div className="border-8 border-gray-300">
                        <Image src="/examsheet4.jpg" width={ 280 } height={ 600 } />
                    </div>
                </div>
            </div>
            <div className="absolute right-10 bottom-6">
                <div className="">
                    <button className="px-14 py-3 bg-white">Previous</button>
                    <Link href="/adminPanel/NewExam/CorrectAnsSheet2" className="px-14 py-3 bg-blue-500 text-white">Next</Link>
                </div>
            </div>
        </div>
    )
}
