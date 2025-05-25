import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import axios from "axios";
import baseURL from "../Api/baseURL";


const LogIn = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const navi = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        SaveData()

    }

    const SaveData = async() => {
        try {
            const res = await baseURL.post('/user/login', {email, password})
            alert(res.data.message)
            localStorage.setItem('token', res.data.token)
            setemail('')
            setpassword('')
            navi('/booking-slot')    
        } catch (error) {
            const errmsg = error.response.data.message
            alert(errmsg)
        }
    }


  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-md text-gray-700 w-full max-w-md md:w-[420px] p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Log In
          </h2>

          <input
            id="email"
            name = "email"
            className="w-full rounded-full bg-white/70 backdrop-blur-sm border border-gray-400 mb-5 py-3 px-5 text-base outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-300"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />

          <input
            id="password"
            name = "password"
            className="w-full rounded-full bg-white/70 backdrop-blur-sm border border-gray-400 mb-6 py-3 px-5 text-base outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-300"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />

          <button
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 active:scale-95 py-3 rounded-full text-white font-semibold text-base shadow-md"
            type="submit"
          >
            Log In
          </button>

          <p className="text-center mt-6 text-sm text-gray-600">
            Don’t have an account?
            <a
              href="/"
              className="text-purple-600 font-medium underline hover:text-purple-800"
            >
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
