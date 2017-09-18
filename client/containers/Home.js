import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getUser } from '../actions/userActions'
 class Home extends Component{
    componentWillMount(){
        if(this.props.isAuthenticated==false){
            this.props.getUser()
        }
    }
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

const mapStateToProps = (state)=>{
    return {
        isAuthenticated:state.user.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        getUser:()=>{
            dispatch(getUser())
        }
        
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Home)