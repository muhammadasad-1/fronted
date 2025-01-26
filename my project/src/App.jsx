import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import PrivateRoute from "./components/PrivateRoute"
import Header from "./components/Header"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Registration from "./pages/Registration"
import DepartmentView from "./pages/DepartmentView"
import AdminPanel from "./pages/AdminPanel"

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<PrivateRoute element={<Dashboard />} />} />
              <Route path="/register" element={<PrivateRoute element={<Registration />} />} />
              <Route path="/department" element={<PrivateRoute element={<DepartmentView />} />} />
              <Route path="/admin" element={<PrivateRoute element={<AdminPanel />} />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App

