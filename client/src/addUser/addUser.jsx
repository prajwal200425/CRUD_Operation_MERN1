import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import {toast} from "react-hot-toast"
const addUser = () => {


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

const HandleSubmit = async (e)=>{
  e.preventDefault();
  await axios.post("http://localhost:5000/api/create",employee )
  .then((res)=>{
    console.log(res.data)
    toast.success("Employee Added", {position:"top-right"})
    navigate("/")
  }).catch(error => toast.error(error.data.msg, {position:"top-right"}));
}

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Employee</h2>
      <Link
    to="/" 
    className="inline-block px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
  >
    Back
  </Link>
      <form  className="space-y-5" onSubmit={HandleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
           onChange={inputHandler}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
           onChange={inputHandler}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Company Name</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={inputHandler}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Role</label>
          <input
            type="text"
            name="role"
            id="role"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={inputHandler}
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default addUser;
