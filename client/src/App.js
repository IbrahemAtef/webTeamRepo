import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login.js';
import Dashboard from './components/Dashboard/dash.js';



function App() {
  return(
    <Router>
      <div className="App">
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/login" component={Login} />
          {/* <Route path="/sign-up" component={Signup} /> */}
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
