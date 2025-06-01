import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Admin</h2>
      <nav>
        <ul>
          <li><Link href="/"><a>Dashboard</a></Link></li>
          <li><Link href="/users"><a>Users</a></Link></li>
          <li><Link href="/clients"><a>Clients</a></Link></li>
          <li><Link href="/reports"><a>Reports</a></Link></li>
        </ul>
      </nav>
    </aside>
  );
}