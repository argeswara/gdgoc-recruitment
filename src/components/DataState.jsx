export default function DataState({ loading, error, isEmpty, onRetry, children }) {
  if (loading) return <p className="py-8 text-gray-500">Memuat data...</p>;

  if (error) {
    return (
      <div className="py-8">
        <p className="text-red-600">Gagal memuat data: {error}</p>
        <button onClick={onRetry} className="mt-2 rounded bg-brand px-4 py-2 text-white">
          Coba lagi
        </button>
      </div>
    );
  }

  if (isEmpty) return <p className="py-8 text-gray-500">Belum ada data.</p>;

  return children;
}