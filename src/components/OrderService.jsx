import React, { useState } from "react";
import { BiChevronDown, BiChevronUp, BiSolidXSquare } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function OrderService({ setFormData }) {
    const [status, setStatus] = useState(false);
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        name: "",
        nodes: "",
        cname: "",
        domain: "",
        message: "",
        actualbytes: "",
        prefferedbytes: ""

    });

    const [errors, setErrors] = useState({
        name: "",
        nodes: "",
        cname: "",
        domain: "",
        message: "",
        actualbytes: "",
        prefferedbytes: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputData({
            ...inputData,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: value.trim() === '' ? `${name} is required` : '',
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('https://orders-sa3q.onrender.com/orders', inputData)
            .then(res => {
                alert("Submitted data successfully view data in Home Page")
                navigate("/");
                setFormData(res.data);
            }).catch(err => console.log(err))
    };

    return (
        <>
            <div className="lg:w-[100vw] lg:h-[100vh] h-full overflow-y-auto bg-white fixed flex justify-center items-center">
                <form onSubmit={handleSubmit}>
                    <div className={status ? "lg:w-[900px] lg:h-[650px] w-[360px] h-[900px] rounded-md bg-white flex flex-col p-[25px] shadow-[0_5px_15px_rgba(0,0,0,0.35)]" : "lg:w-[900px] lg:h-[400px] w-[360px] h-[600px] rounded-md bg-white flex flex-col p-[25px] shadow-[0_5px_15px_rgba(0,0,0,0.35)]"}>
                        <Link to={"/"} className="flex justify-end">
                            <BiSolidXSquare className="text-orange-100 bg-red-500 cursor-pointer" size={30} />
                        </Link>
                        <div className="inline-block text-lg font-semibold pb-5 mt-[-2rem] ml-[10px]">
                            <h1>Create Ordering Service</h1>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-around">
                            <div className="flex flex-col">
                                <label className="block text-md font-medium text-gray-400"> Organization Name <span className="text-red-500">*</span> </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Organization Name 1"
                                    value={inputData.name}
                                    onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
                                    className="mt-1 lg:w-[25rem] w-[20rem] h-[3rem] p-5 rounded-md border-gray-200 shadow-sm sm:text-sm border bottom-1"
                                />
                                {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                            </div>
                            <div className="flex flex-col">
                                <label className="block text-md font-medium text-gray-400"> No. of Ordering Nodes <span className="text-red-500">*</span> </label>
                                <input
                                    type="text"
                                    name="nodes"
                                    required
                                    value={inputData.nodes}
                                    onChange={(e) => setInputData({ ...inputData, nodes: e.target.value })}
                                    placeholder="Organization Name 1"
                                    className="mt-1 lg:w-[25rem] w-[20rem] p-5 rounded-md border-gray-200 shadow-sm sm:text-sm border bottom-1"
                                />
                                {errors.nodes && <span style={{ color: 'red' }}>{errors.nodes}</span>}
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-around mt-6">
                            <div className="flex flex-col">
                                <label className="block text-md font-medium text-gray-400"> Channel Name (Optional) </label>
                                <input
                                    type="text"
                                    name="cname"
                                    placeholder="Organization Name 1"
                                    onChange={(e) => setInputData({ ...inputData, cname: e.target.value })}
                                    className="mt-1 lg:w-[25rem] w-[20rem] p-5 rounded-md border-gray-200 shadow-sm sm:text-sm border bottom-1"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="block text-md font-medium text-gray-400"> Domain <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="domain"
                                    required
                                    value={inputData.domain}
                                    onChange={(e) => setInputData({ ...inputData, domain: e.target.value })}
                                    placeholder="Organization Name 1"
                                    className="mt-1 lg:w-[25rem] w-[20rem] p-5 rounded-md border-gray-200 shadow-sm sm:text-sm border bottom-1"
                                />
                                {errors.domain && <span style={{ color: 'red' }}>{errors.domain}</span>}
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
                                            name="message"
                                            required
                                            value={inputData.message}
                                            onChange={(e) => setInputData({ ...inputData, message: e.target.value })}
                                            placeholder="E.g.10"
                                            className="mt-1 lg:w-[25rem] w-[20rem] h-[3rem] p-5 rounded-md border-gray-200 shadow-sm sm:text-sm border bottom-1"
                                        />
                                        {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="block text-md font-medium text-gray-400"> Absolute Max Bytes </label>
                                        <input
                                            type="text"
                                            name="actualbytes"
                                            value={inputData.actualbytes}
                                            onChange={(e) => setInputData({ ...inputData, actualbytes: e.target.value })}
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
                                            name="prefferedbytes"
                                            value={inputData.prefferedbytes}
                                            onChange={(e) => setInputData({ ...inputData, prefferedbytes: e.target.value })}
                                            required
                                            placeholder="E.g.524288"
                                            className="mt-1 lg:w-[25rem] w-[20rem] h-[3rem] p-5 rounded-md border-gray-200 shadow-sm sm:text-sm border bottom-1"
                                        />
                                        {errors.prefferedbytes && <span style={{ color: 'red' }}>{errors.prefferedbytes}</span>}
                                    </div>
                                </div>
                            </div>) : null
                        }

                        {/* **************************************************      End of Advanced Configuration Toggle View     ***************************************************/}

                        <div className="flex justify-end items-center gap-3">
                            <Link
                                to={"/"}
                                className="bg-blue-100 text-blue-600 py-2 px-7 rounded-lg font-medium"
                            >
                                Cancel
                            </Link>
                            <button type="submit" className="bg-blue-800 text-white py-2 px-7 rounded-lg font-medium cursor-pointer" onClick={() => {

                            }}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default OrderService;