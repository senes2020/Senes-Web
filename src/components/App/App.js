import React, {Component} from 'react';
import './App.css';
import Header from '../Layouts/Header';
import Home from '../Layouts/Home';
import Login from '../Layouts/Login';
import fire from '../../config/Fire';


class App extends Component {
    constructor(props){
        super(props);
        this.state={
            user: {}
        }
    }
    componentDidMount(){
        this.authListener();
    }
    authListener(){
        fire.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({user})
            }
            else{
                this.setState({user : null})
            }
        })
    }

    render() {
        return (
            <div class="base">
                <Header/>
                {this.state.user ? <Home/> : <Login/>}
            </div>
        );
    }
}

export default App;