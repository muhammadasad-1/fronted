import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

function Dashboard() {
  const { currentUser } = useAuth();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  // State to store widget numbers
  const [totalBeneficiaries, setTotalBeneficiaries] = useState(120);
  const [requestsPending, setRequestsPending] = useState(8);
  const [activePrograms, setActivePrograms] = useState(5);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Function to simulate data update (you can replace it with API call or real updates)
  const handleUpdateStats = () => {
    setTotalBeneficiaries(totalBeneficiaries + 1); // Increment total beneficiaries
    setRequestsPending(requestsPending + 2); // Increment requests pending
    setActivePrograms(activePrograms + 1); // Increment active programs
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className={`fixed inset-0 md:flex md:w-64 bg-blue-700 text-white ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        <div className="flex flex-col items-start justify-between h-full p-6 space-y-6">
          <h2 className="text-3xl font-bold text-white">Dashboard</h2>
          <nav className="space-y-4">
            <br />
            <a href="/" className="text-lg hover:bg-blue-600 px-4 py-2  rounded-md transition">Home</a>
            <br />
            <a href="/profile" className="text-lg hover:bg-blue-600 px-4 py-2 rounded-md transition">Profile</a>
            <br />
            <a href="/settings" className="text-lg hover:bg-blue-600 px-4 py-2 rounded-md transition">Settings</a>
            <br />
            {currentUser.role === "admin" && (
              <a href="/admin" className="text-lg hover:bg-blue-600 px-4 py-2 rounded-md transition">
                Admin Panel
              </a>
            )}
          </nav>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end p-4">
        <button onClick={toggleSidebar} className="text-white bg-blue-700 p-2 rounded-md">
          ☰
        </button>
      </div>

      {/* Main Content */}
      <div className={`md:ml-64 p-6 bg-gray-50 w-full ${isSidebarOpen ? 'ml-64' : ''}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="bg-white shadow-lg p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-semibold text-gray-900">Welcome, {currentUser.username}!</h2>
            <p className="text-lg text-gray-600 mt-2">Here’s an overview of your dashboard.</p>
          </div>

          {/* Dashboard Widgets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-6 rounded-lg text-center transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-blue-700">Total Beneficiaries</h3>
              <p className="text-4xl font-bold text-gray-900 mt-2 counter">{totalBeneficiaries}</p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-lg text-center transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-blue-700">Requests Pending</h3>
              <p className="text-4xl font-bold text-gray-900 mt-2 counter">{requestsPending}</p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-lg text-center transition transform hover:scale-105">
              <h3 className="text-2xl font-semibold text-blue-700">Active Programs</h3>
              <p className="text-4xl font-bold text-gray-900 mt-2 counter">{activePrograms}</p>
            </div>
          </div>

          {/* Button to simulate data update */}
          <div className="text-center mt-6">
            <button
              onClick={handleUpdateStats}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Update Stats
            </button>
          </div>

          {/* Additional Content */}
          <div className="mt-8 bg-white shadow-lg p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900">Latest Updates</h3>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li className="text-lg text-gray-700">Program X is now open for registration.</li>
              <li className="text-lg text-gray-700">Request for financial aid are due by next week.</li>
              <li className="text-lg text-gray-700">A new medical assistance program has been added.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
