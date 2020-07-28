import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Image from '../../images/idoso-engenheiro.jpg'

class Profile extends Component {
    render() {
        return (

            <Grid container spacing={0} className="base">
                <Header />
                <Grid item xs={12}>
                    <h1>Ops, ainda não implementamos essa página!</h1>
                    <p>Mas para acessar seu perfil e atualizar suas informações, utilize o nosso app Mobile! Você pode fazer o download na App Store!</p>
                </Grid>
                <Grid item xs={12}>
                    <img src={Image}></img>
                </Grid>
                <Footer />
            </Grid>

        )
    }
}

export default Profile;