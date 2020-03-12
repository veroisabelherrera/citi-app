import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FirebaseAppProvider } from 'reactfire';
import App from './App';
import firebaseConfig from './firebase-config';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback="Conectando a la app">
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Suspense>
  </FirebaseAppProvider>
), document.getElementById('root'));
