import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header title="Dashboard" />
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-teal-600">
              <h2 className="text-sm font-semibold text-gray-500 uppercase">Today's Revenue</h2>
              <p className="mt-2 text-2xl font-bold text-gray-800">$3,250</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-500">
              <h2 className="text-sm font-semibold text-gray-500 uppercase">Open Clients</h2>
              <p className="mt-2 text-2xl font-bold text-gray-800">24</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-indigo-500">
              <h2 className="text-sm font-semibold text-gray-500 uppercase">System Alerts</h2>
              <p className="mt-2 text-2xl font-bold text-gray-800">2</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
