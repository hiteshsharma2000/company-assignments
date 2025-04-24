import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const Dashboard = () => {

const [data,setdata]=useState([])
const checkvalidate=async ()=>{
    try {
        const token=localStorage.getItem('token')
        const validate=await fetch('http://localhost:8080/user/dashboard',{
            method:"POST",
            headers: {
                "Authorization":token,
                "Content-type": "application/json"
            }
        })
        const finalvali=await validate.json()
        console.log(finalvali)
        if(!finalvali.data){
            if (!finalvali.data) {
                window.location.href = '/login';
            }
            
        }
        setdata(finalvali.data)
        
    } catch (error) {
        console.log(error);
        
    }
}
useEffect(()=>{
 checkvalidate()
 console.log(data);
 
},[])




return (
  <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 p-6">
    {/* Header */}
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-extrabold text-gray-800 drop-shadow-sm">Dashboard</h1>
      <button
        onClick={() => {
          localStorage.removeItem('token');
          location.reload();
        }}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl shadow-lg transition duration-300"
      >
        Logout
      </button>
    </div>

    {/* Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-3 px-6 text-left font-semibold">Name</th>
            <th className="py-3 px-6 text-left font-semibold">DOB</th>
            <th className="py-3 px-6 text-left font-semibold">Email</th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {data?.map((e, index) => {
            const formattedDOB = e.dob?.slice(0, 10);
            return (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-blue-50 hover:bg-blue-100 transition' : 'bg-white hover:bg-blue-100 transition'}
              >
                <td className="py-3 px-6 border-b">{e.name}</td>
                <td className="py-3 px-6 border-b">{formattedDOB}</td>
                <td className="py-3 px-6 border-b">{e.email}</td>
              </tr>
            );
          })}

          {/* Static test row (optional) */}
          <tr className="bg-blue-50 hover:bg-blue-100 transition">
            <td className="py-3 px-6 border-b">dummy</td>
            <td className="py-3 px-6 border-b">1995-07-21</td>
            <td className="py-3 px-6 border-b">jane@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);


}

export default Dashboard