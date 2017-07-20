import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter, Switch, Route, Link, Redirect, withRouter} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

//create a store for redux implementation
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index';
const store = createStore(rootReducer);


const Main = () => (
    <Provider store={store}>
        <main>
            <Switch>
                <Route exact path='/' component={App}/>
            </Switch>
        </main>
    </Provider>

)


ReactDOM.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
