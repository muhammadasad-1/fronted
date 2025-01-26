import React, { useState } from "react"

function DepartmentView() {
  const [token, setToken] = useState("")
  const [beneficiaryData, setBeneficiaryData] = useState(null)

  const handleTokenScan = (e) => {
    e.preventDefault()
    // Implement token scanning logic here
    // For demonstration, we'll use mock data
    setBeneficiaryData({
      name: "John Doe",
      cnic: "1234567890123",
      purpose: "Financial Aid",
      status: "In Progress",
    })
  }

  const updateStatus = (newStatus) => {
    // Implement status update logic here
    setBeneficiaryData({ ...beneficiaryData, status: newStatus })
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-gray-700 mb-6 text-center">Department View</h2>
      <form onSubmit={handleTokenScan} className="mb-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Enter token"
          className="w-full md:w-64 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="w-full md:w-auto bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-200">
          Scan Token
        </button>
      </form>
      {beneficiaryData && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Beneficiary Information</h3>
          <p className="text-lg mb-2">
            <strong>Name:</strong> {beneficiaryData.name}
          </p>
          <p className="text-lg mb-2">
            <strong>CNIC:</strong> {beneficiaryData.cnic}
          </p>
          <p className="text-lg mb-2">
            <strong>Purpose:</strong> {beneficiaryData.purpose}
          </p>
          <p className="text-lg mb-4">
            <strong>Status:</strong> {beneficiaryData.status}
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => updateStatus("In Progress")}
              className="bg-yellow-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-yellow-600 transition duration-200"
            >
              In Progress
            </button>
            <button
              onClick={() => updateStatus("Completed")}
              className="bg-green-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-green-700 transition duration-200"
            >
              Completed
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DepartmentView
