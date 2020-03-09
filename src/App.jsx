import React from 'react';
import './App.css';
import { useUser } from 'reactfire';
import Login from './component/login/Login';

function App() {
  const user = useUser;

  return (
    <div>
      { !user && <Login /> }
      { /* user && <Home /> */ }
    </div>
  );
}

export default App;
