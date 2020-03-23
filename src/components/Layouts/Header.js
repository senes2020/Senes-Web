import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


export default function ButtonAppBar() {    

  return (
    <Grid container spacing={0}>
        <Grid item xs={12}>
        <AppBar position="static" style={{ background: '#000000'}}>
            <Toolbar>
            <Typography variant="h6">
                Senes
            </Typography>
            </Toolbar>
        </AppBar>
        </Grid>
    </Grid>
  );
}