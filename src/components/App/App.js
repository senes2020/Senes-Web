import React, {Component} from 'react';
import './App.css';
import {createMuiTheme} from "material-ui/core/styles";
import blue from 'material-ui/styles/colors/blue';
import {AppBar} from "material-ui/AppBar";

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

class App extends Component {
    render() {
        return (
            <AppBar title="Senes">
                
            </AppBar>
        );
    }
}

export default App;