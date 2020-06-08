import React, { Component } from 'react';
import './App.css';
import Footer from '../Layouts/Footer';
import Home from '../Layouts/Home';
import fire from '../../config/Fire';
import Header from '../Layouts/Header';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }
    })
  }

  render() {
    return (
      <div className="base">
        <Home/>
      </div>
    );
  }
}

export default App;