import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMockDataTwo, getMockDataTwo } from '../../features/counter/counterSlice';
import TableComponent from '../TableComponent/TableComponent';

function AddNote() {
 const mockDataTwoRedux = useSelector(getMockDataTwo);
 const dispatch = useDispatch(); 
 const [captureInput, setCaptureInput] = useState([]);
 const handleInput = (e) => {
  setCaptureInput(e.target.value)
  console.log(captureInput)
 }

 const handleButtonClick = () => {
  dispatch(setMockDataTwo(captureInput))
 }

 // onChange={(event) => handleInput(event)}
 const pageModel = (
  <>
  <input type="text" onChange={ handleInput }></input>
  <button onClick={ handleButtonClick }>Add Note</button>
  {mockDataTwoRedux}
  </>
 )
  return pageModel;
}

export default AddNote;
