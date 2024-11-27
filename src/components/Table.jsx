import './Table.css'
const Table = ({ columns, data, onEdit, onDelete }) => (
  <div className='overflow-auto'>

    <table className="table-auto w-full border-collapse border border-darkBlue-200 border-[1px]">
      <thead className='color-darkBlue'>
        <tr>
          {columns.map((col) => (
            <th key={col} className="border border-darkBlue-200 px-4 py-2 text-darkBlue">
              {col}
            </th>
          ))}
          <th className="border border-darkBlue-200 px-4 py-2 text-darkBlue">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="text-center text-darkBlue">
            {columns.map((col) => (
              <td key={col} className="border border-darkBlue-200 px-4 py-2">
                {row[col.toLowerCase()]}
              </td>
            ))}
            <td className="border border-darkBlue-200 px-4 py-2 text-darkBlue">
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
