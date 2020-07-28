import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Image from '../../images/cuidador-idoso1.jpg';

class WorkWith extends Component {

    render() {
        return (
            <Grid container spacing={0} className="base">
                <Header />
                <Grid item xs={12} style={{ marginTop: '50px' }}>
                    <h1>Quer se tornar um colaborador Senes? Veja como funciona!</h1>
                    <p>1 - Para se tornar um colaborador basta fazer o seu cadastro&nbsp;
                        <Link to="/signup" style={{ color: '#000000' }}>
                            aqui
                        </Link>
                        !
                    </p>
                    <p>2 - Após se cadastrar, basta baixar o nosso app para celular e preencher as últimas etapas do seu perfil! Esperamos você lá!</p>
                </Grid>
                <Grid item xs={12}>
                    <img src={Image}></img>
                </Grid>
                <Footer />
            </Grid>
        )
    }
}

export default WorkWith;