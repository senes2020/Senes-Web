import React, {Component} from 'react';
import {Grid} from '@material-ui/core';

class Footer extends Component{
    render(){
        return(
            <Grid item xs={12}>
                <div className="footer">
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <ul className="horizontalList">
                                <li>Home</li>
                                <li>Trabalhe Conosco</li>
                                <li>Saiba Mais</li>
                                <li></li>
                            </ul>
                        </Grid>
                        <Grid item xs={6} className="footerAddress">
                            <Grid item xs={12} className="addressItem">Rua Fictícia nº X</Grid>
                            <Grid item xs={12} className="addressItem">Bairro Fictício</Grid>
                            <Grid item xs={12} className="addressItem">São Paulo - SP</Grid>
                            <Grid item xs={12} className="addressItem">06410-040</Grid>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        )
    }
}

export default Footer;