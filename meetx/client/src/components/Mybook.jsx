import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Mybook = () => {

  const loadRazorpayScript = () =>
    new Promise((resolve) => {
      
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
     const handleBuy = async (e) => {
        // console.log("ccccccccccccccc",course)
        const res = await loadRazorpayScript();
        if (!res) {
          alert("Razorpay SDK failed to load");
          return;
        }

        //   console.log('ccccccccc',console.log(import.meta.env.VITE_API_URL)// should NOT be undefined
        
        // )
            // Create order from backend
            const { data: order } = await axios.post("http://localhost:8080/courses/create-order", {
              amount: 5000, 
            });
          

            console.log(data);
            
            const options = {
              key: import.meta.env.VITE_API_URL, 
              amount: 50000, // ₹500 (amount in paise, as Razorpay works in smallest currency units)
             currency: 'INR', 
             name: "Course Name",
            description: "Purchase of Course Name",
            order_id: order.id,
              handler: function (response) {
                alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
              
              },
              prefill: {
                name: "John Doe",
                email: "john@example.com",
                contact: "9999999999",
              },
              theme: {
                color: "#4f46e5",
              },
            };
          
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
          };
          

const [data,setdata]=useState([])
const checkvalidate=async ()=>{
    try {
        const token=localStorage.getItem('token')
        const id=localStorage.getItem('userid')
        const validate=await fetch(`http://localhost:8080/Booking/${id}`,{
            method:"POST",
            headers: {
                "Authorization":token,
                "Content-type": "application/json"
            }
        })
        const finalvali=await validate.json()
        console.log(finalvali)
        if(!finalvali.bookings){
           
                window.location.href = '/login';
            
            
        }
        setdata(finalvali.bookings)
        
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
  <i onClick={()=>window.location.href="/dashboard"} className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl shadow-lg transition duration-300 
   fa-solid fa-arrow-left"></i>
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
  {data?.map((e, index) => {
  const formattedDOB = new Date(e.activity.datetime).toISOString().split('T')[0];
   return <div
      key={index}
      className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition"
    >
      <img
        src="https://cdn.pixabay.com/photo/2014/08/26/22/00/cms-428667_1280.jpg"
        alt={e.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{e.activity.title}</h2>
        <p className="text-sm text-gray-600">{e.activity.description}</p>
        <p className="text-sm text-gray-600">{formattedDOB}</p>
        <p className="text-lg font-bold text-blue-500">Rs. {e.activity.location}</p>
        <button
          onClick={() => handleBuy(e)}
          className="mt-4 w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition duration-300"
        >
          Buy
        </button>
      </div>
    </div>
})}
</div>

    </div>
  </div>
);
}

export default Mybook
