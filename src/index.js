import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './components/Layouts/Signup';
import Login from './components/Layouts/Login';
import ChooseType from './components/Layouts/ChooseType';
import MobileRedirect from './components/Layouts/MobileRedirect';
import WorkWith from './components/Layouts/WorkWith';
import KnowMore from './components/Layouts/KnowMore';
import Profile from './components/Layouts/Profile';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/choose" component={ChooseType}/>
            <Route path="/app" component={MobileRedirect}/>
            <Route path="/workwith" component={WorkWith}/>
            <Route path="/knowmore" component={KnowMore}/>
            <Route path="/profile" component={Profile}/>
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();