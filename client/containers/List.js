import React, { Component } from 'react'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Dialog from 'material-ui/Dialog'
import { Link  } from 'react-router-dom'
import { connect } from 'react-redux'

import { getList, voteChange, postVote, selectedPoll} from '../actions/pollActions'

 class Lista extends Component{
    constructor(){
        super()
        this.state={
            open:false,
            info:[],
            options:[],
            option:'',
            isin:false
        }
        this.handleClose=this.handleClose.bind(this)
        this.selectedOption=this.selectedOption.bind(this)
        this.vote = this.vote.bind(this)
        this.selectedPoll=this.selectedPoll.bind(this)
        
    }
    



     componentWillMount(){
         this.props.getList()
     }
    render(){
        const polls = this.props.polls.map((poll)=>{
            const isin=poll.users_voted.includes(this.props.info._id)
            
            
            return (
                <div key={poll._id} >
                <ListItem onClick={()=>this.handleOpen(poll, isin)} primaryText={poll.question}></ListItem>
                    
                </div>
            )
            
        })
        
        return(
            
            <div className='container'>
                 <List>
                    {polls}
                   
                    <Dialog
                    
          title="Dialog With Actions"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <h1>{this.state.info.question}</h1>
          <RadioButtonGroup name="shipSpeed" onChange={(e)=>this.selectedOption(e)} defaultSelected="not_light">
              {this.state.options}
              </RadioButtonGroup>
              {this.props.isAuthenticated&&this.state.isin==false?(
                <RaisedButton onClick={()=>{this.vote(this.state.info._id)}} label='vote'></RaisedButton>
              ):(
                <Link to='/result'><RaisedButton onClick={()=>{this.selectedPoll()}} label='see result'></RaisedButton></Link>

              )}
        </Dialog>

                </List>
            </div>
        )
       
    }

    selectedOption(e){
        this.setState({option:e.target.value})
    }

    selectedPoll(){
    
        this.props.selectedPoll(this.state.info._id)
    }

    vote(id){
        this.handleClose()
        const vote ={
            id:id,
            vote:this.state.option
        }
        this.props.postVote(vote)
    }

    handleOpen (info,isin) {
        const options = info.options.map((option)=>{
            return   <RadioButton key={option.answear}
            value={option._id}
            label={option.answear}
          />
        })
        this.setState({options:options})
        this.setState({open: true});
        this.setState({info:info})
        this.setState({isin:isin})
     
      };
    
      handleClose(){
        this.setState({open: false});
        this.setState({isin: false});
      };
}


const mapStateToProps = (state)=>{
    return{
        polls:state.poll.polls,
        info:state.user.info,
        isAuthenticated:state.user.isAuthenticated,
  
        
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        getList:()=>{
            dispatch(getList())
        },
       postVote:(vote)=>{
           dispatch(postVote(vote))
       },
       selectedPoll:(poll)=>{
        dispatch(selectedPoll(poll))
       }
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Lista)

