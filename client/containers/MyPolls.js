import React, { Component } from 'react'
import {List, ListItem} from 'material-ui/List';
import { Link, Redirect } from 'react-router-dom'


import { connect } from 'react-redux'
import { myPolls, deletePoll } from '../actions/pollActions'
import RaisedButton from 'material-ui/RaisedButton';

class MyPolls extends Component{
    constructor(){
        super()
        this.deletePoll= this.deletePoll.bind(this)
        this.result = this.result.bind(this)
    }
    componentWillMount(){
        this.props.myPolls()
    }
    render(){
        const polls = this.props.mypolls.map((poll)=>{
            return <ListItem key={poll._id} onClick={()=>{this.result()}} rightIconButton={
                <RaisedButton onClick={()=>{this.deletePoll(poll._id)}} primary={true} label='X' />}>{poll.question}</ListItem>
        })
        return(
            <div>
                <h1>mypolls</h1>
                <List>
                    {polls}
                </List>
            </div>
        )
    }
    deletePoll(_id){
        const id={
            id:_id
        }
        this.props.deletePoll(id)

    }
    result(){
        window.location.pathname='/result'
    }
}



const mapStateToProps = (state)=>{
    return{
        mypolls:state.poll.mypolls

    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        myPolls:()=>{
            dispatch(myPolls())
        },
        deletePoll:(id)=>{
            dispatch(deletePoll(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyPolls)

