import React, {Component} from 'react';
import fire from '../../config/Fire';
import { Button } from '@material-ui/core';

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    }

    logout(){
        fire.auth().signOut();
    }

    render(){
        return(
            <div>
                <h1>Você está logado!</h1>
                <Button onClick={this.logout}>Logout</Button>
            </div>
        )
    }
}

export default Home;