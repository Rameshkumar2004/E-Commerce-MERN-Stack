import React from "react";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import Layout from "../../Components/Layouts/Layout";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
  return (
   <Layout>
      <div className="flex items-center justify-center min-h-screen bg-yellow-50">
      <div className="bg-white w-96 p-6 text-black rounded-md shadow-lg">
        <h2 className="text-center text-3xl font-bold mb-6">User Login</h2>
        <form require onSubmit={handleSubmit((data) => console.log(data))}  className="flex flex-col gap-4 ">
          
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input 
              id="email"
              type="email"
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
              className="p-2 rounded bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
                    
          
            
          </div>
          <button
            type="submit"
            className="mt-4 p-2 bg-blue-600 hover:bg-green-700 rounded text-white font-semibold transition"
          >
            Login
          </button>
          <p className="text-sm text-center mt-2">
            No have an account?{" "}
            <Link to="/register" className="text-blue-400 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
      
    </Layout>
  );
}

export default Login;
