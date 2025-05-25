import React, { useState } from "react";
import axios from "axios";
import baseURL from "../Api/baseURL";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });
  const [resumeFile, setResumeFile] = useState(null);


  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setResumeFile(Array.from(e.target.files))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("services", formData.service);
    form.append("date", formData.date);
    form.append("time", formData.time);
    
    resumeFile.forEach((file) => {
      form.append("resumelink", file); // append all selected images
    });

  
    bookingData(form);
  };


  const bookingData = async (form) => {
    try {
      const res = await baseURL.post(
        "/booking-slot/bookings",
        form,
        getAuthHeaders()
      );

      alert(res.data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        resume: "",
        service: "",
        date: "",
        time: "",
      });
    } catch (error) {
      alert(error?.response?.data?.message || "Booking failed done");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 via-teal-100 to-green-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 p-10 rounded-2xl shadow-xl w-full max-w-lg backdrop-blur-sm"
      >
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-700">
          Book a Slot
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
            required
            className="px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            required
            className="px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone"
            required
            className="px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
          />

            <input
            name="resumelink"
            onChange={handleFileChange}
            type="file"
            multiple
            required
            className="px-4 py-3 border border-gray-300 rounded-xl shadow-sm bg-white"
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            <option value="">Select Service</option>
            <option value="Resume Review">Resume Review</option>
            <option value="Mock Interview">Mock Interview</option>
          </select>

          <input
            name="date"
            value={formData.date}
            onChange={handleChange}
            type="date"
            required
            className="px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
          />

          <input
            name="time"
            value={formData.time}
            onChange={handleChange}
            type="time"
            required
            className="px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <button
          type="submit"
          className="mt-8 w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-3 rounded-full shadow-md transition-all duration-200 ease-in-out"
        >
          Book Slot
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
