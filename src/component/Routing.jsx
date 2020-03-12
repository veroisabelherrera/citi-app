import React from 'react';
// import { useUser } from 'reactfire';
import { Switch, Route } from 'react-router-dom';
import Profile from './Profile/profile';
import Transfer from './Transfer/transfer';
import LoginScreen from './Login/LoginScreen';
import Login from './Login/Login';
import Register from './Login/Register';
//import ContactView from './contact/Contact';
import Form from './Form/form';
import ContactScreen from './contact/ContactScreen';


export default () => (
  // const user = useUser();

  <div className="App">

    <Switch>
      <Route exact path="/" component={LoginScreen} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/Profile" component={Profile} />
      <Route exact path="/Transfer" component={Transfer} />
      <Route exact path="/contacts" component={ContactScreen} />
      <Route exact path="/form" component={Form} />
    </Switch>

  </div>
);
