import './Table.css'
const Table = ({ columns, data, onEdit, onDelete }) => (
  <div className='overflow-auto'>

    <table className="table-auto w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col} className="border border-gray-200 px-4 py-2">
              {col}
            </th>
          ))}
          <th className="border border-gray-200 px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="text-center">
            {columns.map((col) => (
              <td key={col} className="border border-gray-200 px-4 py-2">
                {row[col.toLowerCase()]}
              </td>
            ))}
            <td className="border border-gray-200 px-4 py-2">
              <button className='edit-btn'
                onClick={() => onEdit(row)}
              >
                Edit
              </button>
              <button className='delete-btn'
                onClick={() => onDelete(row.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
