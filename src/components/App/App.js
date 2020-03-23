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
                <p class="forgot" style={{color: '#8190A5'}}>Esqueceu sua senha?</p>
            </div>
        );
    }
}

export default App;