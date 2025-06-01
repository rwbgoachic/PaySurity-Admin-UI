import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

interface MenuItem { id: number; name: string; price: number; category: string; }

export default function Menu() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    setItems([{ id: 1, name: 'Pizza', price: 12.99, category: 'Entree' }]);
  }, []);

  const addItem = () => {
    const newItem = { id: Date.now(), name, price: parseFloat(price), category };
    setItems([...items, newItem]);
    setName(''); setPrice(''); setCategory('');
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Menu Items</h1>
        <div className="mb-6 space-x-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="p-2 border rounded"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            type="number"
            className="p-2 border rounded"
          />
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            className="p-2 border rounded"
          />
          <button onClick={addItem} className="px-4 py-2 bg-blue-600 text-white rounded">Add</button>
        </div>
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Name</th>
              <th className="p-2">Price</th>
              <th className="p-2">Category</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="p-2">{item.name}</td>
                <td className="p-2">${item.price.toFixed(2)}</td>
                <td className="p-2">{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
