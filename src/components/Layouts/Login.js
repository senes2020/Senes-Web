import Grid from '@material-ui/core/Grid';
import React, {Component} from 'react';
import Image from '../../images/login.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import fire from '../../config/Fire';

class Login extends Component{
    constructor(props){
        super(props)
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state={
            email: "",
            password: ""
        }
    }

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u);
        }).catch((err) => {
            console.log(err);
        })
    }
    
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u);
        }).catch((err) => {
            console.log(err);
        });
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return(
            <Grid spacing={3}>
                <Grid item xs={12}>
                    <p class="title">Senes</p>
                </Grid>
                <Grid item xs={12}>
                    <p class="text">Que bom ver você de novo!</p>
                </Grid>
                <Grid item xs={12}>
                    <form class="root" noValidate autoComplete="off">
                        <TextField
                            type="email" 
                            id="email" 
                            onChange={this.handleChange} 
                            value={this.state.email} 
                            label="E-mail" 
                            variant="outlined"
                            name="email"
                        />
                        <br/>
                        <TextField 
                            type="password"
                            id="password"
                            onChange={this.handleChange}
                            value={this.state.password} 
                            label="Senha" 
                            variant="outlined"
                            name="password"
                        />
                        <br/>
                        <Button 
                            variant="contained" 
                            style={
                                {background: '#000000', color: '#ffffff'}
                            }
                            onClick={this.login}

                        >
                            Entrar
                        </Button>
                    </form>
                    <a href="" class="forgot" style={{color: '#8190A5'}}>Esqueceu sua senha?</a>
                </Grid>
                <Grid item xs={12}>
                    <p class="forgot">
                        Ainda não tem uma conta?
                        <Button 
                            onClick={this.signup} 
                            variant="contained" 
                            style={
                                {background: '#000000', color: '#ffffff'}
                            }
                        >
                                Cadastre-se aqui!
                        </Button>
                    </p>
                </Grid>
                <Grid item xs={12}>
                    <img src={Image} class="loginImg"></img>
                </Grid>
            </Grid>
        )
    }
}

export default Login;