import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import Login from './components/users/Login'
import Register from './components/users/Register'

function App() {
  return (
    <>
      <Route path='/' component={Login} />
      <Route path='/register' component={Register} />
    </>
  );
}

export default App;
