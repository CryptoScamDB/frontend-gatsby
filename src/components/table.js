import React from 'react'

const TableRow = ({row}) => (
    <tr>
      <td key={row.name}>{row.name}</td>
      <td key={row.id}>{row.id}</td>
      <td key={row.price}>{row.price}</td>
    </tr>
  );
  
const ScamTable = ({data}) = (
    <table>
      {data.map(row => {
        <TableRow row={row} />
      })}
    </table>
  )

export { Table, TableRow }