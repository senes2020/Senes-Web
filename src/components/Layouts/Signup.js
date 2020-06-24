import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import fire from '../../config/Fire';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this) || '';
    this.handleChange = this.handleChange.bind(this) || '';
    this.signup = this.signup.bind(this) || '';
    this.state = {
      email: "",
      password: ""
    } || ''
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
      [e.target.name]: e.target.value || ''
    })
  }

  render() {
    return (
      <Grid container spacing={0} className="base">
        <Grid item xs={12}>
          <Header />
          <Grid item xs={12}>
            <p className="title">
              Senes
            </p>
          </Grid>
          <Grid item xs={12}>
            <p className="text">
              Cadastre-se já, é rápido e fácil!
            </p>
          </Grid>
          <form className="root" noValidate autoComplete="off">
            <Grid item xs={12}>
              <TextField label="Nome Completo" variant="outlined" style={{ marginBottom: "20px", width: "350px" }}/>
            </Grid>
            <Grid item xs={12}>
              <TextField type="email" id="email" onChange={this.handleChange} value={this.state.email} label="E-mail" variant="outlined" name="email" style={{ marginBottom: "20px", width: "350px" }}/>
            </Grid>
            <Grid item xs={12}>
              <TextField type="password" label="Senha" variant="outlined" style={{ marginBottom: "20px", width: "350px" }}/>
            </Grid>
            <TextField type="password" id="password" onChange={this.handleChange} value={this.state.password} label="Confirme sua senha" variant="outlined" name="password" style={{ marginBottom: "20px", width: "350px" }}/>
            <Grid item xs={12}>
              <Button variant="contained" style={{ background: '#000000', color: '#ffffff', marginBottom: "5px", padding: "0" }} onClick={this.signup}>
                <Link to="/" style={{ textDecoration: 'none', color: '#ffffff', margin: "5px" }}>
                  Pode me cadastrar!
                </Link>
              </Button>
            </Grid>
          </form>
          <Footer />
        </Grid>
      </Grid>
    )
  }
}

export default Signup;