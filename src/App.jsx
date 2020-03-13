import React from 'react';
import { useUser, useFirebaseApp } from 'reactfire';
import './App.css';
import LoginScreen from './component/Login/LoginScreen';
import { Link } from 'react-router-dom';
import Routing from './component/Routing';
import 'firebase/auth';


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
      {user
        && (
          <div className="nav-buttons">
            <Link to="/login"><button className="Btn-back">Volver al home</button></Link>
            <button type="button" className="Btn-logut" onClick={logout}>Cerrar sesión</button>
          </div>
        )}

    </section>
  );
}

export default App;
