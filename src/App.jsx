import React from 'react';
import { useUser } from 'reactfire';
import './App.css';
import LoginScreen from './component/Login/LoginScreen';
import Home from './component/home/Home';
import Contact from './component/contact/Contact';

function App() {
  const user = useUser();

  return (
    <div className="App">
      {!user && <LoginScreen />}
      {user && <Home />}
    </div>
  );
}

export default App;
