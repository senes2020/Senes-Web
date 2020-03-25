import React, {Component} from 'react';
import './App.css';
import Header from '../Layouts/Header';
import Login from '../Layouts/Login/Login'


class App extends Component {
    render() {
        return (
            <div class="base">
                <Header/>
                <Login/>
            </div>
        );
    }
}

export default App;