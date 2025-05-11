import React, { useState } from "react";
import {  Link, Navigate } from "react-router-dom";


const Login = () => {


const [loginuser,setloginuser]=useState({
    email:"",
    password:""
})


const handlechange=(e)=>{
const {name,value}=e.target;
setloginuser({
    ...loginuser,
    [name]:value
})}

const handlesubmit=async(e)=>{
    e.preventDefault()

 const getlogin=await fetch('http://localhost:8080/user/login',{
    method:"POST",
    body:JSON.stringify(loginuser),
    headers: {
        "Content-type": "application/json"
    }
 })
const hhh=await getlogin.json()

    localStorage.setItem('token',hhh.token)
   if(hhh?.user?._id){
      localStorage.setItem('userid',hhh.user._id)
   }
    console.log(hhh.user)
    if(hhh.token){

   window.location.href="/dashboard"
}
    
    alert(hhh.msg)
}


return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6">
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 animate-fade-in">
   
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">
          🔐
        </div>
      </div>
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
        Welcome Back
      </h2>
      <p className="text-center text-sm text-gray-500 mb-8">
        Please login to your account
      </p>

      <form className="space-y-5">
        <input
          type="email"
          name="email"
          onChange={(e) => handlechange(e)}
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => handlechange(e)}
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <button
          type="submit"
          onClick={handlesubmit}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition duration-300"
        >
          Login
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-gray-600">
        Don’t have an account?{' '}
        <Link to="/register" className="text-blue-600 hover:underline font-medium">
          Create one
        </Link>
      </p>
    </div>
  </div>
);
}

export default Login