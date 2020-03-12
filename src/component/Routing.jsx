import React from 'react';
//import { useUser } from 'reactfire';
import Profile from '../component/profile/profile';
import Transfer from '../component/Transfer/transfer';
import { BrowserRouter, Link, Switch, Route, Router } from 'react-router-dom';
import LoginScreen from '../component/login/LoginScreen';
import Login from '../component/login/Login';
import Register from '../component/login/Register';


export default () => {
  //const user = useUser();

  return (
    <div className="App">

        <Switch>
          <Route exact path="/" component={LoginScreen} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Transfer" component={Transfer} />
        </Switch>

    </div>
  );
}
