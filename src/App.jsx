import React from 'react';
import { useUser } from 'reactfire';
import './App.css';
import Login from './component/login/Login';
import Home from './component/home/Home';

function App() {
  const user = useUser();

  return (
    <div className="App col-12">
      { !user && <Login /> }
      { user && <Home /> }
    </div>
  );
}

export default App;
