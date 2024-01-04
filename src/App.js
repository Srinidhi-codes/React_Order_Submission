import { useState } from "react";
import OrderService from "./components/OrderService";
import { BiPlus } from "react-icons/bi";
import data from "./db.json"

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState(false);

  return (
   <>

   <div className="flex flex-col items-center">

{/****************************************       Displaying Dummy Data on Submit    *****************************************/}

      <p className="text-lg font-bold pt-5 pb-2">{submittedData ? "Orders" : "No ordering services here."}</p>
      {submittedData && <OrderService setOpenModal={setModalOpen} setSubmitted={setSubmittedData} /> ?(
        <div className="overflow-x-auto rounded-lg border border-gray-200 mb-5">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Nodes</th>
              <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Channel Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Domain</th>
              <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Message</th>
              <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Actual Bytes</th>
              <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">Preffered Bytes</th>
            </tr>
          </thead>
      
          <tbody className="divide-y divide-gray-200">
          {data.map((item,i)=>{
                    return <tr key={i}>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.name}</td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.nodes}</td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.cname}</td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.domain}</td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.message}</td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.actualbytes}</td>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.prefferedbytes}</td>
                    </tr>
                  })}
          </tbody>
        </table>
      </div>)
        :<p className="text-sm text-gray-400 pb-5" >Services list will be listed here.</p>}

{/********************************        Displaying Dummy Data on Submit Ends Here       *********************************/}

      <div
        className="w-[250px] h-[60px] flex gap-4 rounded-lg cursor-pointer bg-blue-800 text-white"
        onClick={() => {
          setModalOpen(true);
        }}
      >
      <BiPlus className="mt-4 ml-2" size={25} /> 
      <p className="mt-4 mx-2 text-lg">Add Ordering Service</p>
      </div>
      
        
      {modalOpen && <OrderService setOpenModal={setModalOpen} setSubmitted={setSubmittedData}  />}
    </div>
   </>
  );
}

export default App;
