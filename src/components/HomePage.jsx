// import React from 'react'
// import { useState } from "react";
// import OrderService from "./OrderService";
// import { BiPlus } from "react-icons/bi";
// import data from "../db.json"


// const HomePage = () => {
//     const [modalOpen, setModalOpen] = useState(false);
//     const [submittedData, setSubmittedData] = useState(false);
//     return (
//         <>

//             <div className="flex flex-col items-center">
//                 <div
//                     className="w-[250px] h-[60px] flex gap-4 rounded-lg cursor-pointer bg-blue-800 text-white"
//                     onClick={() => {
//                         setModalOpen(true);
//                     }}
//                 >
//                     <BiPlus className="mt-4 ml-2" size={25} />
//                     <p className="mt-4 mx-2 text-lg">Add Ordering Service</p>
//                 </div>


//                 {modalOpen && <OrderService setOpenModal={setModalOpen} setSubmitted={setSubmittedData} />}
//             </div>
//         </>
//     )
// }

// export default HomePage