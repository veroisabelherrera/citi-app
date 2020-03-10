import React from 'react';
import Login from './Login';
import Register from './Register';


function LoginScreen = () => {
    const registro = useUser();
    const logged = 

    if(logged) {
        return <Login />
    }
    return <Register />
}

ReactDOM.render(
    // Intentar cambiando isLoggedIn={true}:
    <LoginScreen logged={false} />,
    document.getElementById('root')
  );
  
/*
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  ReactDOM.render(
    // Intentar cambiando isLoggedIn={true}:
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
  );

  */