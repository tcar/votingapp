import React, { Component } from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect

 } from 'react-router-dom'
 import { connect } from 'react-redux'

import grid from './public/grid.css'
import style from './public/style.css'
import Nav from './components/Nav'

import Home from './containers/Home'
import Lista from './containers/List'
import About from './containers/About'
import Login from './containers/Login'
import MyPolls from './containers/MyPolls'
import Result from './containers/Result'




class App extends Component{
    render(){
        return(
            <div > 
                
                <Router>
                    <div>
                <Nav />
                <div className ='container'>

                    <Switch >
                            <Route exact path = '/' component={Home} />
                            <Route exact path = '/result' component={Result} />
                            <Route exact path = '/list'   component={Lista} />
                            <Route exact path = '/about' component={About} />
                            <Route exact path = '/mipolls' component={MyPolls} />
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

                    </div>
                </Router>
             </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        isAuthenticated:state.user.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
    


    }
}



export default connect(mapStateToProps, mapDispatchToProps)(App)