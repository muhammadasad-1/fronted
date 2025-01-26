import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

function PrivateRoute({ element }) {
  const { currentUser } = useAuth()

  return currentUser ? element : <Navigate to="/login" />
  return currentUser ? element : <Navigate to = ""/>
}

export default PrivateRoute

