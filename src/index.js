import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Notfound from './pages/404'
import Navbar from './components/Navbar'

const routing = (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('app-bike'))
