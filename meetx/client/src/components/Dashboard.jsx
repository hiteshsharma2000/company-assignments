import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios';


const Dashboard = () => {

 
  
const handleBook=async (e)=>{
   const token=localStorage.getItem('token')
    const validate=await fetch(`http://localhost:8080/Booking/new/${e._id}`,{
            method:"POST",
            headers: {
                "Authorization":token,
                "Content-type": "application/json"
            }
        })

        
       const finalvali=await validate.json()
        console.log(finalvali)

       alert("added in booking") 

}




  


const [data,setdata]=useState([])
const checkvalidate=async ()=>{
    try {
        const token=localStorage.getItem('token')
        const validate=await fetch('http://localhost:8080/activity',{
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
<span className="flex items-center space-x-3">
  <i onClick={()=>window.location.href="/MyBooking"} className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl shadow-lg transition duration-300 
  fa-solid fa-user text-gray-700 text-xl cursor-pointer"></i>
  <h1 className="text-4xl font-extrabold text-gray-800 drop-shadow-sm">
    Dashboard
  </h1>
</span>

  

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

  
    <div className="overflow-x-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {data?.map((e, index) => (
    <div
      key={index}
      className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition"
    >
      <img
        src="https://cdn.pixabay.com/photo/2014/08/26/22/00/cms-428667_1280.jpg"
        alt={e.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{e.title}</h2>
        <p className="text-sm text-gray-600">{e.description}</p>
        <p className="text-lg font-bold text-blue-500">Rs. {e.location}</p>
        <button
          onClick={() => handleBook(e)}
          className="mt-4 w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition duration-300"
        >
          Book
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  </div>
);


}

export default Dashboard