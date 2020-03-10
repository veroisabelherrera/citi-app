import React from 'react';
// import { useUser } from 'reactfire';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './component/login/Login';
import Register from './component/login/Register';
import LoginScreen from './component/login/LoginScreen';

function App() {
  // const user = useUser();

  return (
    <div>
      <BrowserRouter>
        <>
          <LoginScreen />
          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </>
      </BrowserRouter>
    </div>

  /*
    <div className="App col-12">
      { !user && <Login /> }
      { user && <Home /> }
    </div>
    */
  );
}

export default App;
