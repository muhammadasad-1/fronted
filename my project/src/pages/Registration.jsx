import React, { useState } from "react"

function Registration() {
  const [formData, setFormData] = useState({
    cnic: "",
    name: "",
    phone: "",
    address: "",
    purpose: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Implement registration logic here
    console.log("Registration data:", formData)
    // Reset form after submission
    setFormData({ cnic: "", name: "", phone: "", address: "", purpose: "" })
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Register Beneficiary</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="cnic" className="block text-lg font-medium text-gray-600 mb-2">
            CNIC
          </label>
          <input
            type="text"
            id="cnic"
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-600 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-lg font-medium text-gray-600 mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-lg font-medium text-gray-600 mb-2">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="purpose" className="block text-lg font-medium text-gray-600 mb-2">
            Purpose
          </label>
          <select
            id="purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select purpose</option>
            <option value="financial">Financial Aid</option>
            <option value="medical">Medical Assistance</option>
            <option value="education">Education Support</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button 
          type="submit" 
          className="w-full bg-green-600 text-white py-3 rounded-lg text-lg hover:bg-green-700 transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Registration
