import React, { Component } from 'react'
import {List, ListItem} from 'material-ui/List';


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
           align:{
            textAlign:'center'
           },
           margin:{
               marginTop:'10px'
           },
          
           
       }
        console.log(this.props.mypolls)
        const polls = this.props.mypolls.map((poll)=>{
            return (
       
           <ListItem 
           style={style.align}
           hoverColor='blue'
            key={poll._id} 
           
            leftIcon={<Link to='/result'><RaisedButton onClick={()=>{this.result(poll._id)}}  label='votes' /></Link>}
            primaryText={poll.question}            
             rightIconButton={<RaisedButton style={style.margin} onClick={()=>{this.deletePoll(poll._id)}} primary={true} label='delete' />}></ListItem>
         
            
            )
            
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

