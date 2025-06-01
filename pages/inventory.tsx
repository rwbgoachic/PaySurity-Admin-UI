import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useState, useEffect } from 'react';

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  unit: string;
}

export default function Inventory() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);

  useEffect(() => {
    // Placeholder data
    setInventory([
      { id: 1, name: 'Tomatoes', quantity: 50, unit: 'lbs' },
      { id: 2, name: 'Cheese', quantity: 20, unit: 'lbs' },
    ]);
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header title="Inventory" />
        <main className="p-6">
          <button className="mb-4 bg-blue-600 text-white px-4 py-2 rounded">Add Supply</button>
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead>
              <tr className="bg-gray-50 text-gray-600 uppercase text-sm">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Quantity</th>
                <th className="py-3 px-6 text-left">Unit</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {inventory.map(item => (
                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">{item.name}</td>
                  <td className="py-3 px-6 text-left">{item.quantity}</td>
                  <td className="py-3 px-6 text-left">{item.unit}</td>
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
