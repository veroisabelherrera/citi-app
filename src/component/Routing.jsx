import React from 'react';
// import { useUser } from 'reactfire';
import { Switch, Route } from 'react-router-dom';
import Profile from './profile/profile';
import Transfer from './Transfer/transfer';
import LoginScreen from './login/LoginScreen';
import Login from './login/Login';
import Register from './login/Register';
import ContactView from './contact/Contact';


export default () => (
// const user = useUser();

  <div className="App">

    <Switch>
      <Route exact path="/" component={LoginScreen} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/Profile" component={Profile} />
      <Route exact path="/Transfer" component={Transfer} />
      <Route exact path="/contacts" component={ContactView} />
    </Switch>

  </div>
);
