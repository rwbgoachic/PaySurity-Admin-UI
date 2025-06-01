import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl mb-6">Admin Panel</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/">
              <a>Dashboard</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/employees">
              <a>Employees</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/menu">
              <a>Menu Items</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/inventory">
              <a>Inventory</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/performance">
              <a>System Performance</a>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
