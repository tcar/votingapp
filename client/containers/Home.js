import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'
export default class Home extends Component{
    render(){
        return(
            <div className='Home'>
               <div className='container'>
                   <h1>Simple Poll. Made quickly</h1>
                   <p>Create public poll, free,unlimited, always</p>
                  <Link to='list'> <RaisedButton label="view poll list"  /></Link>
               </div>
            </div>
        )
    }
}