import React from 'react';
import { useUser } from 'reactfire';
import './App.css';
import Login from './component/login/Login';

function App() {
  const user = useUser();

  return (
    <div className="App">
      { !user && <Login /> }
      { /* user && <Home /> */ }
    </div>
  );
}

export default App;
