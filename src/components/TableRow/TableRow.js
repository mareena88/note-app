import React from 'react';
import { useSelector } from 'react-redux';
import { getMockData, getMockDataTwo } from '../../features/counter/counterSlice'

const TableRow = () => {
 const mockDataRedux = useSelector(getMockData);
 const mockDataTwoRedux = useSelector(getMockData);
 const pageModel = (
  <>
   {mockDataRedux.map((row, index) => {
    return <tr key={index}>
     <td>{index+1}</td>
     <td>{row.note}</td>
     <td>
      <button>Delete</button>
     </td>
    </tr>
    // console.log(row);
   })}
  </>
 );
  return pageModel;
};

export default TableRow;
