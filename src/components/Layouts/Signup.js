import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import Image from '../../images/login.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import fire from '../../config/Fire';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: ""
    }
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      console.log(u);
    }).catch((err) => {
      console.log(err);
    })
  }

  signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      console.log(u);
    }).catch((err) => {
      console.log(err);
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Grid container spacing={0}>
        <Grid item xs={12}>
          
        </Grid>
      </Grid>
    )
  }
}

export default Signup;