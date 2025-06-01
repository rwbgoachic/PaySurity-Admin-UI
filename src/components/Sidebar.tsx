import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-800 text-white min-h-screen">
      <div className="p-4 text-2xl font-bold">PaySurity Admin</div>
      <nav className="mt-6">
        <ul>
          <li className="mb-2"><Link href="/"><a className="block px-4 py-2 hover:bg-blue-700">Dashboard</a></Link></li>
          <li className="mb-2"><Link href="/employees"><a className="block px-4 py-2 hover:bg-blue-700">Employees</a></Link></li>
          <li className="mb-2"><Link href="/menu"><a className="block px-4 py-2 hover:bg-blue-700">Menu Items</a></Link></li>
          <li className="mb-2"><Link href="/inventory"><a className="block px-4 py-2 hover:bg-blue-700">Inventory</a></Link></li>
          <li className="mb-2"><Link href="/tests"><a className="block px-4 py-2 hover:bg-blue-700">Tests</a></Link></li>
          <li className="mb-2"><Link href="/performance"><a className="block px-4 py-2 hover:bg-blue-700">System Performance</a></Link></li>
        </ul>
      </nav>
    </aside>
  );
}
