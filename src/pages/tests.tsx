import Sidebar from '../components/Sidebar';

export default function Tests() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Testing Suite</h1>
        <p>Run unit and integration tests from here.</p>
      </main>
    </div>
  );
}
