import React from 'react';

const Table = ({ coinss }) => {
  return (
    <tr>
      <td><img src={coinss.image} alt={coinss.name} width="25" /></td>
      <td>{coinss.name}</td>
      <td>{coinss.symbol.toUpperCase()}</td>
      <td>{coinss.id}</td>
      <td>${coinss.current_price}</td>
      <td>${coinss.total_volume.toLocaleString()}</td>
    </tr>
  );
};

export default Table;