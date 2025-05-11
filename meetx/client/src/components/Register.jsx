import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
const [createuser,setcreateuser]=useState({
    name:"",
    dob:"",
    email:"",
    password:""
})

const handlechange=(e)=>{
 const {name,value}=e.target;

 setcreateuser({
    ...createuser,
    [name]:value
 })
// console.log(createuser)

}
const handleSubmit=async (e)=>{
e.preventDefault()
try {
  
  const getsave=await fetch('http://localhost:8080/user/register',{
  method:"POST",
  body:JSON.stringify(createuser),
  headers:{
   "Content-type": "application/json"
  }
  })
 const res=await getsave.json()
 if(res.msg=='user has been register'){
  window.location.href='/login'
 }
alert(res.msg)
// console.log(res);

} catch (error) {
  console.log(error)
}




 console.log(createuser)

}

return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-100 p-6">
    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 animate-fade-in">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md">
          📝
        </div>
      </div>

      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
        Create an Account
      </h2>
      <p className="text-center text-sm text-gray-500 mb-6">
        Join us by filling in the information below
      </p>

      <form className="space-y-5">
        <input
          type="text"
          name="name"
          required
          onChange={(e) => handlechange(e)}
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />
        <input
          type="date"
          name="dob"
          required
          onChange={(e) => handlechange(e)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />
        <input
          type="email"
          name="email"
          required
          onChange={(e) => handlechange(e)}
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />
        <input
          type="password"
          name="password"
          required
          onChange={(e) => handlechange(e)}
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition duration-300"
        >
          Register
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link to="/login" className="text-green-600 hover:underline font-medium">
          Login here
        </Link>
      </p>
    </div>
  </div>
);
}

export default Register