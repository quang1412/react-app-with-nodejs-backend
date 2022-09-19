import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  const [mess, setMess] = useState('');

  useEffect(() => { 
    return () => {
      axios.get('/api/helloworld') 
        .then(result => setMess(result.data.sayHi))
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {mess}
        </p>
      </header>
    </div>
  );
}

export default App; 