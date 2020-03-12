import React from 'react';
import { useUser } from 'reactfire';
import './App.css';
import LoginScreen from './component/login/LoginScreen';
import Home from './component/home/Home';
import { Route, Switch, BrowserRouter, Link } from 'react-router-dom';
import Profile from './component/profile/profile';
import Transfer from './component/Transfer/transfer';
import Routing from './component/Routing';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import { Button } from './component/elements/Button';


function App() {
  const user = useUser();

  const firebase = useFirebaseApp();

  const logout = async () => {
    await firebase.auth().signOut();
  };

  return (
    <section className="App">
        {!user && <LoginScreen />}



<Routing />
{user &&
<div>
<Link to="/login"><Button>Volver al home</Button></Link>
  <button type="button" className="Btn-two" onClick={logout}>Cerrar sesión</button>
</div>
}

    </section>
  );
}

export default App;
