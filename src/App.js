import React from 'react';
import Form from './components/Form'
import Table from './components/Table'

import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Register your name and age (greater then 18)</h1>
      <Form />
      <h1>Get data from server</h1>
      <Table />
    </div>
  );
}

export default App;
