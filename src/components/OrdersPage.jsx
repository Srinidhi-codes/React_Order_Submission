// import React, { useEffect } from 'react'
// import { useState } from "react";
// import OrderService from "./OrderService";
// import { BiPlus } from "react-icons/bi";
// import data from "../db.json"
// import axios from 'axios';

// const OrdersPage = () => {

//     return (
//         <>
//             <div className="flex flex-col items-center">
//                 <p className="text-lg font-bold pt-5 pb-2">Orders</p>
//                 <div className="overflow-x-auto overflow-y-auto rounded-lg border border-gray-200 mb-5">
//                     <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
//                         <thead className="ltr:text-left rtl:text-right">
//                             <tr>
//                                 <th className="whitespace-nowrap lg:px-4 py-2 px-1 font-bold text-gray-900">Name</th>
//                                 <th className="whitespace-nowrap lg:px-4 py-2 px-1 font-bold text-gray-900">Nodes</th>
//                                 <th className="whitespace-nowrap lg:px-4 py-2 px-1 font-bold text-gray-900">Channel Name</th>
//                                 <th className="whitespace-nowrap lg:px-4 py-2 px-1 font-bold text-gray-900">Domain</th>
//                                 <th className="whitespace-nowrap lg:px-4 py-2 px-1 font-bold text-gray-900">Message</th>
//                                 <th className="whitespace-nowrap lg:px-4 py-2 px-1 font-bold text-gray-900">Actual Bytes</th>
//                                 <th className="whitespace-nowrap lg:px-4 py-2 px-1 font-bold text-gray-900">Preffered Bytes</th>
//                             </tr>
//                         </thead>

//                         <tbody className="divide-y divide-gray-200">
//                             {record.map((d, i) =>
//                                 <tr key={i}>
//                                     <td className="lg:whitespace-nowrap lg:px-4 py-2 px-1 font-medium text-gray-900">{d.name}</td>
//                                     <td className="lg:whitespace-nowrap lg:px-4 py-2 px-1 font-medium text-gray-900">{d.nodes}</td>
//                                     <td className="lg:whitespace-nowrap lg:px-4 py-2 px-1 font-medium text-gray-900">{d.cname}</td>
//                                     <td className="lg:whitespace-nowrap lg:px-4 py-2 px-1 font-medium text-gray-900">{d.domain}</td>
//                                     <td className="lg:whitespace-nowrap lg:px-4 py-2 px-1 font-medium text-gray-900">{d.message}</td>
//                                     <td className="lg:whitespace-nowrap lg:px-4 py-2 px-1 font-medium text-gray-900">{d.actualbytes}</td>
//                                     <td className="lg:whitespace-nowrap lg:px-4 py-2 px-1 font-medium text-gray-900">{d.prefferedbytes}</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default OrdersPage