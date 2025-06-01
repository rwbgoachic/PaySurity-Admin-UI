import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

interface Employee { id: number; name: string; role: string; onDuty: boolean; }

export default function Employees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [onDuty, setOnDuty] = useState(false);

  useEffect(() => {
    // Fetch employees - placeholder data
    setEmployees([{ id: 1, name: 'Alice', role: 'Manager', onDuty: true }]);
  }, []);

  const addEmployee = async () => {
    // Placeholder: call API to add employee
    const newEmp = { id: Date.now(), name, role, onDuty };
    setEmployees([...employees, newEmp]);
    setName(''); setRole(''); setOnDuty(false);
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Employees</h1>
        <div className="mb-6">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="p-2 border rounded mr-2"
          />
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Role"
            className="p-2 border rounded mr-2"
          />
          <label className="mr-2">
            <input
              type="checkbox"
              checked={onDuty}
              onChange={() => setOnDuty(!onDuty)}
              className="mr-1"
            />
            On Duty
          </label>
          <button onClick={addEmployee} className="px-4 py-2 bg-blue-600 text-white rounded">Add</button>
        </div>
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Name</th>
              <th className="p-2">Role</th>
              <th className="p-2">On Duty</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td className="p-2">{emp.name}</td>
                <td className="p-2">{emp.role}</td>
                <td className="p-2">{emp.onDuty ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
