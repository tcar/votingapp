import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './app'
const root = document.getElementById('root')

ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
    ,
    root
 )