import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebaseConfig from './firebase-config';
import { FirebaseAppProvider } from 'reactfire';

ReactDOM.render((
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback="Conectando a la app">
        <App />
      </Suspense>
    </FirebaseAppProvider>
  ), document.getElementById('root'));