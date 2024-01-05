import React, { useEffect, useState } from 'react'
import { BiPlus } from "react-icons/bi";
import axios from 'axios';
import OrderService from './components/OrderService';
import { Link } from 'react-router-dom';


function App() {
  const [record, setRecord] = useState([])
  const [formData, setFormData] = useState(null);

  useEffect(() => {
      axios.get('https://orders-sa3q.onrender.com/orders')
          .then(res => {
              setRecord(res.data)
          })
  }, [])

  return (
   <>


            <div className="flex flex-col items-center">
                <Link
                to={"/orders-service"}
                    className="w-[250px] h-[60px] flex gap-4 rounded-lg cursor-pointer bg-blue-800 text-white"
                >
                    <BiPlus className="mt-4 ml-2" size={25} />
                    <p className="mt-4 mx-2 text-lg">Add Ordering Service</p>
                </Link>
               {!record ? "Services list will be listed here": <div className="flex flex-col items-center">
                <p className="text-lg font-bold pt-5 pb-2">Orders</p>
                <div className="overflow-x-auto overflow-y-auto rounded-lg border border-gray-200 mb-5">
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead className="ltr:text-left rtl:text-right">
                            <tr>
                                <th className="whitespace-nowrap lg:px-4 py-2 px-1 font-bold text-gray-900">Name</th>
                                <th className="whitespace-nowrap lg:px-4 py-2 px-1 font-bold text-gray-900">Nodes</th>
                                <th className="whitespace-nowrap lg:px-4 py-2 px-1 font-bold text-gray-900">Channel Name</th>
                                <th className="whitespace-nowrap lg:px-4 py-2 px-1 font-bold text-gray-900">Domain</th>
                                <th className="whitespace-nowrap lg:px-4 py-2 px-1 font-bold text-gray-900">Message</th>
                                <th className="whitespace-nowrap lg:px-4 py-2 px-1 font-bold text-gray-900">Actual Bytes</th>
                                <th className="whitespace-nowrap lg:px-4 py-2 px-1 font-bold text-gray-900">Preffered Bytes</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {record.map((d, i) =>
                                <tr key={i}>
                                    <td className="lg:whitespace-nowrap lg:px-4 py-2 px-1 font-medium text-gray-900">{d.name}</td>
                                    <td className="lg:whitespace-nowrap lg:px-4 py-2 px-1 font-medium text-gray-900">{d.nodes}</td>
                                    <td className="lg:whitespace-nowrap lg:px-4 py-2 px-1 font-medium text-gray-900">{d.cname}</td>
                                    <td className="lg:whitespace-nowrap lg:px-4 py-2 px-1 font-medium text-gray-900">{d.domain}</td>
                                    <td className="lg:whitespace-nowrap lg:px-4 py-2 px-1 font-medium text-gray-900">{d.message}</td>
                                    <td className="lg:whitespace-nowrap lg:px-4 py-2 px-1 font-medium text-gray-900">{d.actualbytes}</td>
                                    <td className="lg:whitespace-nowrap lg:px-4 py-2 px-1 font-medium text-gray-900">{d.prefferedbytes}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>}
            </div>
            {!formData ? null:<OrderService setFormData={setFormData} />}


   </>
  );
}

export default App;
