import Grid from '@material-ui/core/Grid';
import React, {Component} from 'react';
import Forms from './Forms'

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
            </Grid>
        </Grid>