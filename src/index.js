import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';

const theme = createMuiTheme( {
    palette: {
        type: 'dark',
        primary: deepOrange
    }
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
