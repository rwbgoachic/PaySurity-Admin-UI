import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useState, useEffect } from 'react';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
}

export default function Menu() {
  const [items, setItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    // Placeholder data
    setItems([
      { id: 1, name: 'Margherita Pizza', price: 12.0, category: 'Entree' },
      { id: 2, name: 'Caesar Salad', price: 8.0, category: 'Appetizer' },
    ]);
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header title="Menu Items" />
        <main className="p-6">
          <button className="mb-4 bg-blue-600 text-white px-4 py-2 rounded">Add Item</button>
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead>
              <tr className="bg-gray-50 text-gray-600 uppercase text-sm">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {items.map(item => (
                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left">{item.name}</td>
                  <td className="py-3 px-6 text-left">${item.price.toFixed(2)}</td>
                  <td className="py-3 px-6 text-left">{item.category}</td>
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
