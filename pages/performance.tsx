import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function Performance() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header title="System Performance" />
        <main className="p-6">
          <p>System performance metrics and logs will be displayed here.</p>
        </main>
      </div>
    </div>
  );
}
