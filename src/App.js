import React from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Listado  from './components/Startwars/Listado';


function App() {
  return (
    <div className="App">
       <Router>
      <Switch>
      <Route path="/" exact path="/">
        <Listado />
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
