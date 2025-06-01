import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded shadow">Total Users: 123</div>
          <div className="p-4 bg-white rounded shadow">Total Merchants: 45</div>
          <div className="p-4 bg-white rounded shadow">Pending Orders: 7</div>
        </div>
      </main>
    </div>
  );
}
