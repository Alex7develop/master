/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './TableComponent.module.css'; 

const TableComponent = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortedData = () => {
    const sorted = [...data];
    if (sortConfig.key) {
      sorted.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sorted;
  };

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th onClick={() => requestSort('date')}>Date</th>
          <th onClick={() => requestSort('name')}>Name</th>
          <th onClick={() => requestSort('quantity')}>Quantity</th>
          <th onClick={() => requestSort('size')}>Size</th>
          <th onClick={() => requestSort('orderStatus')}>Order Status</th>
          <th onClick={() => requestSort('orderAmount')}>Order Amount</th>
        </tr>
      </thead>
      <tbody>
        {sortedData().map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.size}</td>
            <td>{item.orderStatus}</td>
            <td>{item.orderAmount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;