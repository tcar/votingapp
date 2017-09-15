import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUser } from '../actions/userActions'

 class Login extends Component{

    componentWillMount(){
        this.props.getUser()
    }

    render(){
        return(
            <div>
                <h1>about</h1>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {

    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        getUser:()=>{
            dispatch(getUser())
        }
        
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Login)