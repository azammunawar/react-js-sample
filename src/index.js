import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link, BrowserRouter} from 'react-router-dom';
import App from './App';
import About from './about';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/About' component={About}/>
    </Switch>
  </main>
)




ReactDOM.render(
    <BrowserRouter>
    <Main />
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
