import React, { Component } from 'react'
import {List, ListItem} from 'material-ui/List';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { connect } from 'react-redux'
import { myPolls, deletePoll, selectedPoll } from '../actions/pollActions'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'

class MyPolls extends Component{
    constructor(){
        super()
        this.deletePoll= this.deletePoll.bind(this),
        this.result = this.result.bind(this)
    }
    componentWillMount(){
        this.props.myPolls()
    }
    render(){
       const style={
           decoration:{
            textDecoration:'none'
           },
           margin:{
               marginTop:'10px',
               
           },
          
           
       }
        
        const polls = this.props.mypolls.map((poll)=>{
            return (
                <div className='row hovering' key={poll._id} 
                >
       <div className='col s8'>
           <Link style={style.decoration} to='/result'><ListItem 
            onClick={()=>{this.result(poll._id)}}
            
            primaryText={poll.question}            
             ></ListItem>
            </Link>
            </div>
                <div className='col s4 '>
            <RaisedButton style={style.margin} onClick={()=>{this.deletePoll(poll._id)}} primary={true} label='delete' />
                </div>
                    </div>
            )
            
        })
        return(
            <div className='container'>
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
    result(poll){
        this.props.selectedPoll(poll)
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
        },
        selectedPoll:(poll)=>{
            dispatch(selectedPoll(poll))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyPolls)

