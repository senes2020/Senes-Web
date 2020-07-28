import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import Image from '../../images/login.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import fire from '../../config/Fire';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

class Login extends Component {
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
      <Grid container spacing={0} className="base">
        <Header/>
        <Grid item xs={12}>
          <p className="title">Senes</p>
        </Grid>
        <Grid item xs={12}>
          <p className="text">Que bom ver você de novo!</p>
        </Grid>
        <Grid item xs={12}>
          <form className="root" noValidate autoComplete="off">
            <TextField
              type="email"
              id="email"
              onChange={this.handleChange}
              value={this.state.email}
              label="E-mail"
              variant="outlined"
              name="email"
              style={{ marginBottom: "20px", width: "350px" }}
            />
            <br />
            <TextField
              type="password"
              id="password"
              onChange={this.handleChange}
              value={this.state.password}
              label="Senha"
              variant="outlined"
              name="password"
              style={{ marginBottom: "20px", width: "350px" }}
            />
            <br />
            <Link to="/" style={{textDecoration: 'none', color: '#ffffff'}} onClick={this.login}>
              <Button
                variant="contained"
                style={
                  { background: '#000000', color: '#ffffff', marginBottom: "5px" }
                }
              >
                Entrar
              </Button>
            </Link>
          </form>
          <a href="" className="forgot" style={{ color: '#8190A5' }}>Esqueceu sua senha?</a>
        </Grid>
        <Grid item xs={12}>
          <p className="forgot">
            Ainda não tem uma conta?
            <Link to="/choose" style={{textDecoration: 'none', color: '#ffffff'}}>
              <Button
                variant="contained"
                style={
                  { background: '#000000', color: '#ffffff', marginLeft: "15px" }
                }
              >
                Cadastre-se aqui!
              </Button>
            </Link>
          </p>
        </Grid>
        <Grid item xs={12}>
          <img src={Image} className="loginImg"></img>
        </Grid>
        <Footer/>
      </Grid>
    )
  }
}

export default Login;