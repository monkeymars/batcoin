/* eslint-disable react/prop-types */
import React from 'react'
import ReactDOM from 'react-dom'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import cookie from 'js-cookie'
import Login from './pages/Login'
import Exchange from './pages/Exchange'
import Notfound from './pages/404'
import Navbar from './components/Navbar'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      cookie.get('authenticated') ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
)

const routing = (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/exchange" component={Exchange} />
        <Route exact path="/login" component={Login} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('app-bike'))
