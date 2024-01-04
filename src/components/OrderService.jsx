import React, { useState } from "react";
import { BiChevronDown, BiChevronUp, BiSolidXSquare } from "react-icons/bi";

function OrderService({ setOpenModal, setSubmitted }) {
    const [status, setStatus] = useState(false);

    return (
        <div className="lg:w-[100vw] lg:h-[100vh] h-full overflow-y-auto bg-white fixed flex justify-center items-center">
            <div className={status ? "lg:w-[900px] lg:h-[600px] w-[360px] h-[900px] rounded-md bg-white flex flex-col p-[25px] shadow-[0_5px_15px_rgba(0,0,0,0.35)]" : "lg:w-[900px] lg:h-[400px] w-[360px] h-[600px] rounded-md bg-white flex flex-col p-[25px] shadow-[0_5px_15px_rgba(0,0,0,0.35)]"}>
                <div onClick={() => setOpenModal(false)} className="flex justify-end">
                    <BiSolidXSquare className="text-orange-100 bg-red-500 cursor-pointer" size={30} />
                </div>
                <div className="inline-block text-lg font-semibold pb-5 mt-[-2rem] ml-[10px]">
                    <h1>Create Ordering Service</h1>
                </div>
                <div className="flex flex-col lg:flex-row justify-around">
                    <div className="flex flex-col">
                        <label className="block text-md font-medium text-gray-400"> Organization Name <span className="text-red-500">*</span> </label>
                        <input
                            type="text"
                            id="name"
                            required
                            placeholder="Organization Name 1"
                            className="mt-1 lg:w-[25rem] w-[20rem] h-[3rem] p-5 rounded-md border-gray-200 shadow-sm sm:text-sm border bottom-1"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="block text-md font-medium text-gray-400"> No. of Ordering Nodes <span className="text-red-500">*</span> </label>
                        <input
                            type="text"
                            id="nodes"
                            required
                            placeholder="Organization Name 1"
                            className="mt-1 lg:w-[25rem] w-[20rem] p-5 rounded-md border-gray-200 shadow-sm sm:text-sm border bottom-1"
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-around mt-6">
                    <div className="flex flex-col">
                        <label className="block text-md font-medium text-gray-400"> Channel Name (Optional) </label>
                        <input
                            type="text"
                            id="cname"
                            placeholder="Organization Name 1"
                            className="mt-1 lg:w-[25rem] w-[20rem] p-5 rounded-md border-gray-200 shadow-sm sm:text-sm border bottom-1"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="block text-md font-medium text-gray-400"> Domain <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            id="domain"
                            required
                            placeholder="Organization Name 1"
                            className="mt-1 lg:w-[25rem] w-[20rem] p-5 rounded-md border-gray-200 shadow-sm sm:text-sm border bottom-1"
                        />
                    </div>
                </div>

                {/****************************************     Advanced Configuration Toggle View     *************************************************************/}

                <div className="text-lg font-semibold pb-5 mt-[2rem] ml-[10px]">
                    <div onClick={() => setStatus(!status)} className="flex cursor-pointer">
                        <h1>Advanced Configurations</h1>
                        {!status ? <BiChevronDown className="ml-3" size={30} /> : <BiChevronUp className="ml-3" size={30} />}
                    </div>
                </div>
                {status ?
                    (<div className="block h-[50vh]">
                        <div className="flex lg:flex-row flex-col justify-around">
                            <div className="flex flex-col">
                                <label className="block text-md font-medium text-gray-400"> Max Message Count <span className="text-red-500">*</span> </label>
                                <input
                                    type="text"
                                    id="message"
                                    required
                                    placeholder="E.g.10"
                                    className="mt-1 lg:w-[25rem] w-[20rem] h-[3rem] p-5 rounded-md border-gray-200 shadow-sm sm:text-sm border bottom-1"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="block text-md font-medium text-gray-400"> Absolute Max Bytes </label>
                                <input
                                    type="text"
                                    id="actualbytes"
                                    placeholder="E.g.1038723"
                                    className="mt-1 lg:w-[25rem] w-[20rem] h-[3rem] p-5 rounded-md border-gray-200 shadow-sm sm:text-sm border bottom-1"
                                />
                            </div>
                        </div>
                        <div className="flex justify-start mt-6 lg:ml-3">
                            <div className="flex flex-col justify-start">
                                <label className="block text-md font-medium text-gray-400"> Preffered Max Bytes <span className="text-red-500">*</span> </label>
                                <input
                                    type="text"
                                    id="prefferedbytes"
                                    required
                                    placeholder="E.g.524288"
                                    className="mt-1 lg:w-[25rem] w-[20rem] h-[3rem] p-5 rounded-md border-gray-200 shadow-sm sm:text-sm border bottom-1"
                                />
                            </div>
                        </div>
                    </div>) : null
                }

                {/* **************************************************      End of Advanced Configuration Toggle View     ***************************************************/}

                <div className="flex justify-end items-center gap-3">
                    <button
                        className="bg-blue-100 text-blue-600 py-2 px-7 rounded-lg font-medium"
                        onClick={() => {
                            setOpenModal(false);
                        }}

                    >
                        Cancel
                    </button>
                    <button className="bg-blue-800 text-white py-2 px-7 rounded-lg font-medium cursor-pointer" onClick={() => {
                        setSubmitted(true);
                        setOpenModal(false);
                    }}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default OrderService;