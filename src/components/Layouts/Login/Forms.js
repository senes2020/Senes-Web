import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '40ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Usuário" variant="outlined"/>
        <br/>
        <TextField id="outlined-basic" label="Senha" variant="outlined" />
        <br/>
        <Button variant="contained" style={{background: '#000000', color: '#ffffff'}}>
            Entrar
        </Button>
    </form>
  );
}