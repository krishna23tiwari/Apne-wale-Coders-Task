import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import baseURL from "../Api/baseURL";


const SignUp = () => {
    const [forumData, setforumData] = useState({
        name : "",
        email: "",
        password: ""
    })

    const navi =  useNavigate()

    const handleSignup = (e) => {
        e.preventDefault()


        SignupData()
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setforumData((prev) => ({...prev, [name] : value}))
    }


    const SignupData = async() => {
        try {
            const res = await baseURL.post('/user/signup', forumData)
            alert(res.data.message)
            console.log(res.data)
            setforumData({name: '', email: '', password: ''})
            navi('/login')
        } catch (error) {
            const errmsg = error.response.data.message
            alert(errmsg)
        }
    }



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-50 to-white">
      <form onSubmit={handleSignup} className="w-full max-w-md space-y-6 px-4 py-6 bg-white bg-opacity-90 rounded-2xl shadow-xl text-slate-800">
        <h1 className="text-3xl font-bold text-center text-indigo-700">Sign Up</h1>

        <p className="text-sm text-center text-gray-500">
          Welcome to Our World
        </p>

        <div className="space-y-5">
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <div className="flex items-center px-3 h-11 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400">
              <svg
                className="w-5 h-5 text-slate-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 10a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM2 18a8 8 0 0 1 16 0H2Z" />
              </svg>
              <input
                type="text"
                name = "name"
                placeholder="Enter your full name"
                value={forumData.name}
                onChange={handleChange}
                required
                className="w-full px-2 h-full outline-none bg-transparent"
              />
            </div>
          </div>

         
          <div>
            <label className="block font-medium mb-1">Email Address</label>
            <div className="flex items-center px-3 h-11 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400">
              <svg
                className="w-5 h-5 text-slate-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.5l-8 5-8-5V4Zm0 2.236v9.764A2 2 0 0 0 4 18h12a2 2 0 0 0 2-2V6.236l-8 5-8-5Z" />
              </svg>
              <input
                type="email"
                name = "email"
                placeholder="Enter your email address"
                value={forumData.email}
                onChange={handleChange}
                required
                className="w-full px-2 h-full outline-none bg-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Password</label>
            <div className="flex items-center px-3 h-11 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400">
              <svg
                className="w-5 h-5 text-slate-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 8V6a5 5 0 1 1 10 0v2h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-2a3 3 0 1 1 6 0v2H7V6Zm3 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
              </svg>
              <input
                type="password"
                name = "password"
                placeholder="Enter your password"
                value={forumData.password}
                onChange={handleChange}
                required
                className="w-full px-2 h-full outline-none bg-transparent"
              />
            </div>
          </div>

          
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-indigo-600 text-white py-2 rounded-full hover:bg-indigo-700 transition"
          >
            Submit Form
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M12.293 5.293a1 1 0 0 1 1.414 1.414L10.414 10l3.293 3.293a1 1 0 0 1-1.414 1.414L8.586 10l3.707-3.707Z" />
            </svg>
          </button>

          <p className="text-center text-sm">
            Already have an account?
            <a
              href="/login"
              className="text-blue-600 font-medium underline hover:text-blue-800 ml-1"
            >
              Log In
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

