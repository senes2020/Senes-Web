import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import fire from '../../config/Fire';
import { Button } from '@material-ui/core';

class Header extends Component {
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

logout(){
    fire.auth().signOut();
}

  render(){
    return (
      <Grid container spacing={0}>
          <Grid item xs={12}>
          <AppBar position="static" style={{ background: '#000000'}}>
              <Toolbar>
              <Typography variant="h6">
                  Senes
              </Typography>
              <Button style={{background: '#000000', color: '#ffffff', marginLeft: "50%"}}>Home</Button>
              <Button style={{background: '#000000', color: '#ffffff', marginLeft: "5%"}}>Trabalhe Conosco</Button>
              <Button style={{background: '#000000', color: '#ffffff', marginLeft: "5%"}}>Saiba Mais</Button>
              {this.state.user ? <Button onClick={this.logout} style={{background: '#000000', color: '#ffffff', marginLeft: "5%"}}>Logout</Button> : ""}
              </Toolbar>
          </AppBar>
          </Grid>
      </Grid>
    );
  }
}

export default Header;