import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login.js';
import Dashboard from './components/Dashboard/dash.js';
import SignUp from './components/SignUp/SignUp';
import Landing from './components/landing/landing';



function App() {
  return(
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
