import Sidebar from '../components/Sidebar';

export default function Performance() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">System Performance</h1>
        <p>Monitor system metrics here.</p>
      </main>
    </div>
  );
}
