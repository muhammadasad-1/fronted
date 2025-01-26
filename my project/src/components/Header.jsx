import React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

function Header() {
  const { currentUser, logout } = useAuth()

  return (
    <header className="bg-blue-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-3xl font-semibold text-white hover:text-gray-200 transition duration-200 transform hover:scale-105"
        >
          Beneficiary Management
        </Link>
        <nav className="space-x-6">
          {currentUser ? (
            <>
              <Link 
                to="/" 
                className="text-lg font-medium text-white hover:text-gray-200 transition duration-200 transform hover:scale-105"
              >
                Dashboard
              </Link>
              <Link 
                to="/register" 
                className="text-lg font-medium text-white hover:text-gray-200 transition duration-200 transform hover:scale-105"
              >
                Register
              </Link>
              {currentUser.role === "admin" && (
                <Link 
                  to="/admin" 
                  className="text-lg font-medium text-white hover:text-gray-200 transition duration-200 transform hover:scale-105"
                >
                  Admin Panel
                </Link>
              )}
              <button
                onClick={logout}
                className="bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition duration-200 transform hover:scale-105"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition duration-200 transform hover:scale-105"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
