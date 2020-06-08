import React, {Component} from 'react';
import './App.css';
import Footer from '../Layouts/Footer';
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
            <div className="base">
                {this.state.user ? <Home/> : <Login/>}
                <Footer/>
            </div>
        );
    }
}

export default App;