import React from 'react';
import TableRow from '../TableRow/TableRow';
import './TableComponent.css';

const TableComponent = () => {
  const pageModel = (
   <div className='tablecomponent_container'>
    <table className='tablecomponent_table'>
     <thead>
      <tr>
        <td>#ID</td>
        <td>Note</td>
        <td>Action</td>
      </tr>
     </thead>
     <tbody>
      <TableRow/>
     </tbody>
    </table>
   </div>
  )
  return pageModel; 
};

export default TableComponent;
