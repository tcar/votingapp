import React, { Component } from 'react'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
  import RaisedButton from 'material-ui/RaisedButton';

export default class Nav extends Component{
    
    render(){
        const style={
            backgroundColor:'white',
            decoration:{
                'textDecoration': 'none',
                color:'black'
            }
        }
        return(
            <div className='Nav'>
                <Toolbar style={style}>
                    <ToolbarGroup firstChild={true}>
                    <Link style={style.decoration} to='/'> <h1>voteplex</h1></Link>
                    </ToolbarGroup>
                    <ToolbarGroup lastChild={true}>
                    <div >
                   <Link style={style.decoration} to='/about'> <ToolbarTitle text="about" /></Link>
                   <Link style={style.decoration} to='/newPoll'> <ToolbarTitle text="Poll list" /></Link>
                   <RaisedButton href='auth/facebook' label="fb login" primary={true}  />
                   </div>
 
                    </ToolbarGroup>
                </Toolbar>
            </div>
        )
    }
}