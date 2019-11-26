import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import Login from './components/users/Login'
import Register from './components/users/Register'
import ToolList from './components/tools/ToolList'
import UserDash from './components/tools/UserDash'
import AddTool from './components/tools/AddTool'
import EditTool from './components/tools/EditTool'

function App() {
  return (
    <>
      <Route exact path='/' component={Login} />
      <Route path='/register' component={Register} />
      <Route exact path='/toollist' component={ToolList} />
      <Route exact path='/userdash' component={UserDash} />
      <Route exact path='/addtool' component={AddTool} />
      <Route exact path='/edittool/:toolid' component={EditTool} />
    </>
  );
}

export default App;
