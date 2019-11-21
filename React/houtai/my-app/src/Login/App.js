import React from 'react';
import Alayout from './layout/Alayout/Alayout'
import './App.css';
import Login from './layout/Login/Login'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">   <Router >

      <Switch>
        <Route path="/mine">
          <Alayout />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
