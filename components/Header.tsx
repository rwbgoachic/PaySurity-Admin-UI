export default function Header({ title }: { title: string }) {
  return (
    <header className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div>
        <span className="mr-4">Admin User</span>
        <button className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
      </div>
    </header>
  );
}
