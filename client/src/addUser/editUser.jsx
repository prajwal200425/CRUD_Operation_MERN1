import React from 'react'
import { Link, useNavigate, useParams} from "react-router-dom"
import { useState , useEffect } from 'react'
import {toast} from "react-hot-toast"
import axios from 'axios'
const editUser = () => {
const {id} = useParams();
const emp = {
  name : "",
  email:"",
  companyName:" ",
  role:"",
}

const [employee , setEmployee] = useState(emp)
const navigate = useNavigate();



 const inputHandler = (e)=>{
    const {name , value} = e.target;
     setEmployee({...employee , [name]:value })
    
  }




useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/getone/${id}`);
      console.log(res.data);
      setEmployee(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}, [id]);

const submitFrom = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.put(`http://localhost:5000/api/update/${id}`, employee);
    toast.success("Employee updated successfully!", { position: "top-right" });
    navigate("/")
  } catch (error) {
    toast.error(error.response?.data?.msg || "Something went wrong", { position: "top-right" });
  }
};



  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Employee</h2>
      <Link
    to="/" // replace "1" with actual employee ID
    className="inline-block px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
  >
    Back
  </Link>
      <form  className="space-y-5" onSubmit={submitFrom}>
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
           onChange={inputHandler}
            required
            value={employee.name}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
             onChange={inputHandler}
            required
                 value={employee.email}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Company Name</label>
          <input
            type="text"
            name="companyName"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={inputHandler}
            required
                 value={employee.companyName}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Role</label>
          <input
            type="text"
            name="role"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={inputHandler}
            required
                 value={employee.role}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Update Employee
          </button>
        </div>
      </form>
    </div>
  )
}

export default editUser
