import Grid from '@material-ui/core/Grid';
import React, {Component} from 'react';
import Forms from './Forms';
import Image from '../../../images/login.png';

    export default props => 
        <Grid spacing={3}>
            <Grid item xs={12}>
                <p class="title">Senes</p>
            </Grid>
            <Grid item xs={12}>
                <p class="text">Que bom ver você de novo!</p>
            </Grid>
            <Grid item xs={12}>
                <Forms/>
                <a href="" class="forgot" style={{color: '#8190A5'}}>Esqueceu sua senha?</a>
            </Grid>
            <Grid item xs={12}>
                <p class="forgot">Ainda não tem uma conta? <a href="" class="forgot" style={{color: '#8190A5'}}>Cadastre-se aqui!</a></p>
            </Grid>
            <Grid item xs={12}>
                <img src={Image} class="loginImg"></img>
            </Grid>
        </Grid>