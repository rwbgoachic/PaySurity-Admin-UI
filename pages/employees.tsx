import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useState, useEffect } from 'react';

interface Employee {
  id: number;
  name: string;
  role: string;
  onDuty: boolean;
}

export default function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    // Fetch from API - placeholder data
    setEmployees([
      { id: 1, name: 'Alice Johnson', role: 'Chef', onDuty: true },
      { id: 2, name: 'Bob Smith', role: 'Server', onDuty: false },
    ]);
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header title="Employees" />
        <main className="p-6">
          <button className="mb-4 bg-blue-600 text-white px-4 py-2 rounded">Add Employee</button>
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead>
              <tr className="bg-gray-50 text-gray-600 uppercase text-sm">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Role</th>
                <th className="py-3 px-6 text-left">On Duty</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {employees.map(emp => (
                <tr key={emp.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">{emp.name}</td>
                  <td className="py-3 px-6 text-left">{emp.role}</td>
                  <td className="py-3 px-6 text-left">{emp.onDuty ? 'Yes' : 'No'}</td>
                  <td className="py-3 px-6 text-left">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
