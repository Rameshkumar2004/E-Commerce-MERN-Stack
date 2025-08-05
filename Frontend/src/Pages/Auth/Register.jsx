import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import Layout from '../../Components/Layouts/Layout'

function Register() {
  const [name , setName]=useState("")
  const [email , setEmail]=useState("")
  const [password , setPassword]=useState("")
  const [phone , setPhone]=useState("")
  const [address , setAddress]=useState("")

    const handleSubmit=(e)=>{
        e.prevenDefault()
        console.log(name,email,password,phone,address);
        

    }

  return (
    <Layout>
       <div className="flex items-center justify-center min-h-screen bg-yellow-50">
      <div className="bg-white w-96 p-6 text-black rounded-md shadow-lg">
        <h2 className="text-center text-3xl font-bold mb-6">User Register</h2>
        <form  onSubmit={handleSubmit}  className="flex flex-col gap-4 ">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              className="p-2 rounded bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
           
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input 
              id="email"
              type="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              className="p-2 rounded bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              className="p-2 rounded bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
                    
          </div>
           <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium" htmlFor="password">
              phone No
            </label>
            <input
              id="phone"
              type="Number"
              value={phone}
              onChange={(e)=>{setPhone(e.target.value)}}
              className="p-2 rounded bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
                    
          </div>
          
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium" htmlFor="confirmPassword">
              Address
            </label>
            <input 
              id="address"
              type="text"
              value={address}
              onChange={(e)=>{setAddress(e.target.value)}}
              className="p-2 rounded bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            
          </div>
          <button
            type="submit"
            className="mt-4 p-2 bg-blue-600 hover:bg-green-700 rounded text-white font-semibold transition"
          >
            Register
          </button>
          <p className="text-sm text-center mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
      
    </Layout>
  )
}

export default Register
