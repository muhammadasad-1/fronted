import React from "react"

function AdminPanel() {
  const users = [
    { id: 1, username: "admin1", role: "Admin" },
    { id: 2, username: "receptionist1", role: "Receptionist" },
    { id: 3, username: "staff1", role: "Department Staff" },
  ]

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-gray-700 mb-8 text-center">Admin Panel</h2>
      
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">User Management</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left py-3 px-4 text-gray-700">Username</th>
                <th className="text-left py-3 px-4 text-gray-700">Role</th>
                <th className="text-left py-3 px-4 text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4">{user.username}</td>
                  <td className="py-3 px-4">{user.role}</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-500 hover:text-blue-700 mr-3">Edit</button>
                    <button className="text-red-500 hover:text-red-700">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default AdminPanel
