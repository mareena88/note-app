import React from 'react';
import './App.css';
import AddNote from './components/AddNote/AddNote';
import TableComponent from './components/TableComponent/TableComponent';

function App() {
  return (
    <div className="App">
     <AddNote/>
     <TableComponent/>
    </div>
  );
}

export default App;
