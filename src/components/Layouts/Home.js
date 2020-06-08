import React, {Component} from 'react';
import { Button, Grid } from '@material-ui/core';
import Image from '../../images/homeImg.jpg';

class Home extends Component{

    render(){
        return(
            <Grid container spacing={0}>
                <Grid item xs={6} className="homeText">
                    <h1 className="titleHome">Cuide de quem você ama sem sair da rotina agitada!</h1>
                    <p className="textHome">O propósito da Senes é disponibilizar cuidados para familiares de quem tem uma rotina atarefada e não tem muito tempo livre.</p>
                    <Button style={{background: '#000000', color: '#ffffff'}}>Saiba mais</Button>
                    
                </Grid>
                <Grid item xs={6}>
                    <img src={Image} className="homeImgPrimary"></img>
                </Grid>
            </Grid>
        )
    }
}

export default Home;