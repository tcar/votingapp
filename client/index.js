import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux'

import App from './app'
import store from './store'
const root = document.getElementById('root')

injectTapEventPlugin()
ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
        <App />
        </Provider>
    </MuiThemeProvider>
    ,
    root
 )