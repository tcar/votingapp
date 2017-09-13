import React, { Component } from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Switch

 } from 'react-router-dom'

import grid from './public/grid.css'
import style from './public/style.css'
import Nav from './components/Nav'

import Home from './containers/Home'
import newPoll from './containers/newPoll'
import List from './containers/List'
import About from './containers/About'
import Login from './containers/Login'




export default class App extends Component{
    render(){
        return(
            <div > 
                
                <Router>
                    <div>
                <Nav />
                
                    <Switch className ='container'>
                            <Route exact path = '/' component={Home} />
                            <Route exact path = '/newPoll' component={newPoll} />
                            <Route exact path = '/list' component={List} />
                            <Route exact path = '/about' component={About} />

                            <Route exact path="/login/:token" render={() => (
                            this.props.isAuthenticated ? 
                            (
                                <Redirect to="/"/>
                            ) : (
                            <Login/>
                                )
)}/>

                    </Switch>
                 
                    </div>
                </Router>
             </div>
        )
    }
}