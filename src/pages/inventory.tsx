import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

interface InventoryItem { id: number; name: string; quantity: number; unit: string; }

export default function Inventory() {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');

  useEffect(() => {
    setItems([{ id: 1, name: 'Tomatoes', quantity: 50, unit: 'lbs' }]);
  }, []);

  const addItem = () => {
    const newItem = { id: Date.now(), name, quantity: parseFloat(quantity), unit };
    setItems([...items, newItem]);
    setName(''); setQuantity(''); setUnit('');
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Inventory</h1>
        <div className="mb-6 space-x-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="p-2 border rounded"
          />
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity"
            type="number"
            className="p-2 border rounded"
          />
          <input
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            placeholder="Unit"
            className="p-2 border rounded"
          />
          <button onClick={addItem} className="px-4 py-2 bg-blue-600 text-white rounded">Add</button>
        </div>
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Name</th>
              <th className="p-2">Quantity</th>
              <th className="p-2">Unit</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.quantity}</td>
                <td className="p-2">{item.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
