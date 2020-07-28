import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Image from '../../images/care.jpg';
import Image2 from '../../images/phone.jpg'

class WorkWith extends Component {

    render() {
        return (
            <Grid container spacing={0} className="base">
                <Header />
                <Grid container spacing={0} style={{ marginTop: '50px' }}>
                    <Grid item xs={6} style={{ paddingLeft: '50px' }}>
                        <h1>O que é a Senes?</h1>
                        <p className="text">Nós somos uma empresa que veio ao mercado para ajudar a população mais velha e suas famílias, proporcionando um serviço para cuidar dos nossos idosos e ajudar os profissionais da área.</p>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={Image} style={{ width: '500px' }}></img>
                    </Grid>
                    <Grid item xs={6} style={{ marginTop: '50px' }}>
                        <img src={Image2} style={{ width: '550px' }}></img>
                    </Grid>
                    <Grid item xs={6} style={{ marginTop: '50px', paddingRight: '50px' }}>
                        <h1>Como funciona?</h1>
                        <p className="text">É simples! Basta baixar o nosso aplicativo, se cadastrar e você já consegue agendar o seu horário com o cuidador de sua preferência! Todos os nossos colaboradores são capacitados para ajudar você e sua família!</p>
                    </Grid>
                </Grid>
                <Footer />
            </Grid>
        )
    }
}

export default WorkWith;