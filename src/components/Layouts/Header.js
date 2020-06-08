import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import fire from '../../config/Fire';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Header extends Component {
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

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <AppBar position="static" style={{ background: '#000000' }}>
            <Toolbar>
              <Grid item xs={4} style={{ textAlign: 'left' }}>
                <Button style={{ background: '#000000', color: '#ffffff' }}>Senes</Button>
              </Grid>
              <Grid item xs={2}>
                <Button 
                  style={
                    { background: '#000000', color: '#ffffff' }
                  }
                >
                  <Link to="/" 
                    style={
                      {textDecoration: 'none', color: '#ffffff'}
                    }
                  >
                    Home
                  </Link>
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button style={{ background: '#000000', color: '#ffffff' }}>Trabalhe Conosco</Button>
              </Grid>
              <Grid item xs={2}>
                <Button style={{ background: '#000000', color: '#ffffff' }}>Saiba Mais</Button>
              </Grid>
              <Grid item xs={2}>
                {
                  this.state.user 
                  ?
                  <Button onClick={this.logout}
                    style={{ background: '#000000', color: '#ffffff' }}>
                    Logout
                  </Button>
                  : 
                  <Button 
                    style={{ background: '#000000', color: '#ffffff' }}
                  >
                    <Link to="/login" style={{textDecoration: 'none', color: '#ffffff'}}>Login</Link>
                  </Button>
                }
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    );
  }
}

export default Header;