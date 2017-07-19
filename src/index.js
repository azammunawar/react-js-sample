import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter, Switch, Route,  Link,  Redirect,  withRouter} from 'react-router-dom';
import App from './App';
import About from './about';
import Child from './child';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App} />
      <PrivateRoute path="/About" component={About}/>
    </Switch>
  </main>
)




ReactDOM.render(
    <BrowserRouter>
    <Main />
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
