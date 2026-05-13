import ErrorMsg from "./ErrorMsg";

const Table = ({ columns = [], data = [], loading = false, error }) => {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-slate-100 bg-white shadow-sm">

      <table className="w-full text-sm text-left">

        <thead className="bg-slate-50 border-b border-slate-100 sticky top-0 z-10">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-6 py-4 font-semibold text-slate-500 uppercase tracking-wider text-[11px]"
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-200">

          {loading && (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-14 text-slate-500"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-6 h-6 border-2 border-slate-300 border-t-slate-900 rounded-full animate-spin"></div>
                  <span className="text-sm">Loading data...</span>
                </div>
              </td>
            </tr>
          )}

          {error && (
            <tr>
              <td colSpan={columns.length}>
                <div className="py-6">
                  <ErrorMsg message={error} />
                </div>
              </td>
            </tr>
          )}

          {!loading && data.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-16 text-slate-400"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-lg">📭</span>
                  <span>No data available</span>
                </div>
              </td>
            </tr>
          )}

          {data?.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-slate-50 transition-all duration-200"
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="px-6 py-4 text-slate-700 align-top"
                >
                  {col.render
                    ? col.render(row[col.key], row)
                    : row[col.key]}
                </td>
              ))}
            </tr>
          ))}

        </tbody>

      </table>
    </div>
  );
};

export default Table;