import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Image from '../../images/choose.png'
import Image2 from '../../images/choose2.png'

class ChooseType extends Component {

    render(){
        return(
            <Grid container spacing={0} className="base">
                <Header/>
                <Grid item xs={12}>
                    <p className="title">Senes</p>
                </Grid>
                <Grid item xs={12}>
                    <p className="text">Escolha seu tipo de cadastro!</p>
                </Grid>
                
                <Grid item xs={6} style={{marginBottom:"60px", textAlign:"left", paddingLeft:"32%", }}>
                    <p className="text"><span style={{backgroundColor:"#fffb17", fontSize: "35px"}}>Se você deseja nos ajudar nessa missão, trabalhe conosco!</span></p>
                </Grid>
                <Grid item xs={6} style={{paddingRight:"25%"}}>
                    <img src={Image} className="imgChoose"></img>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" style={{ background: '#000000', color: '#ffffff', marginBottom: "7%", fontSize: '20px', width: '25%', height:'auto'}}>
                        <Link to='/signup' style={{textDecoration: 'none', color: '#ffffff'}}>
                            Conte comigo!
                        </Link>
                    </Button>
                </Grid>
                <Grid item xs={6} style={{paddingLeft:"25%"}}>
                    <img src={Image2} className="imgChoose"></img>
                </Grid>
                <Grid item xs={6} style={{marginBottom:"60px", textAlign:"left", paddingRight:"32%", }}>
                    <p className="text"><span style={{backgroundColor:"#fffb17", fontSize: "35px"}}>Agora se você e sua família buscam a nossa ajuda e de nossos colaboradores, baixe nosso App!</span></p>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" style={{ background: '#000000', color: '#ffffff', marginBottom: "3%", fontSize: '20px', width: '25%', height:'auto'}}>
                        <Link to="/app" style={{textDecoration: 'none', color: '#ffffff'}}>
                            Preciso de ajuda!
                        </Link>
                    </Button>
                </Grid>
                    
                <Footer/>
            </Grid>
        )
    }
}

export default ChooseType;