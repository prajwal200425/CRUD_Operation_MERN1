import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import {toast} from "react-hot-toast"
import axios from "axios"
const getUser = () => {

  const [emp, setEmp] = useState([]);
  const {id} = useParams();

  useEffect(() => {

    const fetchEmp = async () => {
      const res = await axios.get("http://localhost:5000/api/get");
      setEmp(res.data);
    }
    fetchEmp();
  }, [])


  const deleteEmp = async (empID) => {
  try {
    await axios.get(`http://localhost:5000/api/delete/${empID}`);
    
    // Update state to remove the deleted employee
    setEmp((prevEmp) => prevEmp.filter((emp) => emp._id !== empID));
    
    toast.success("Employee deleted successfully!", {
      position: "top-right",
    });
  } catch (error) {
    toast.error(error.response?.data?.msg || "Something went wrong", {
      position: "top-right",
    });
  }
};



  return (
    <>
      <div className="p-6 bg-white shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Employee List</h2>
          <Link
            to="/add"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Add Employee
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2 border">Sr.No</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Company</th>
                <th className="px-4 py-2 border">Position</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>

              {
                emp.map((emp, idx) => {
                  return (
                    <tr className="text-center" key={emp._id}>
                      <td className="px-4 py-2 border">{idx+1}</td>
                      <td className="px-4 py-2 border">{emp.name}</td>
                      <td className="px-4 py-2 border">{emp.email}</td>
                      <td className="px-4 py-2 border">{emp.companyName}</td>
                      <td className="px-4 py-2 border">{emp.role}</td>
                      <td className="px-4 py-2 border space-x-2">

                        <Link
                          to={`/edit/${emp._id}`} 
                          className="inline-block px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                        >
                          Edit
                        </Link>
                        <button onClick={()=> deleteEmp(emp._id)}
                        
                          className="inline-block px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default getUser