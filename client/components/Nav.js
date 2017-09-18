import React, { Component } from 'react'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import { questionChange, optionChange, addOption, send} from '../actions/pollActions'
import logo from '../public/logo.png'

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/userActions'

  import RaisedButton from 'material-ui/RaisedButton';
import Form from './Form'
 class Nav extends Component{
     constructor(){
         super()
         this.state={
             open:false
         }
         this.send = this.send.bind(this);
         this.questionChange=this.questionChange.bind(this)
         this.optionChange=this.optionChange.bind(this)
         this.addOption=this.addOption.bind(this)
         this.handleClose = this.handleClose.bind(this)
        }
  
    
      handleOpen(){
        this.setState({open: true});
      };
    
      handleClose(){
        this.setState({open: false});
      };
    
    render(){
        const style={
            backgroundColor:'white',
            decoration:{
                'textDecoration': 'none',
                color:'black'
            },
            
        }
        console.log(this.props.isAuthenticated)
        return(
            <div className='Nav'>
                <Toolbar style={style}>
                    <ToolbarGroup firstChild={true}>
                    <Link className='header-logo' style={style.decoration} to='/'> 
                    <h1 className='header-logo-title' >voteplex</h1>
                    <img className='header-logo-img'  src={logo}/></Link>
                    </ToolbarGroup>
                    <ToolbarGroup lastChild={true}>
                    <div >

                   {this.props.isAuthenticated?(
                       <div>
                    <DropDownMenu value={1} >
                    <MenuItem value={1} primaryText={this.props.info.facebook.name} />
                    <Link style={style.decoration} to='/about'><MenuItem value={2} primaryText="about" /></Link>
                    <Link style={style.decoration} to='/list'><MenuItem value={3} primaryText="poll list" /></Link>
                    <Link style={style.decoration} to='/mipolls'><MenuItem value={4} primaryText="my polls" /></Link>
                    <MenuItem value={5} onClick={()=>{this.handleOpen()}} primaryText="new poll" />
                    <Link style={style.decoration} to='/'><MenuItem value={6} onClick={()=>{this.props.logout()}} primaryText="logout" /></Link>
                    </DropDownMenu>
                    <Dialog
                    title="Dialog With Actions"
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    >
                    <Form 
                    questionChange={this.questionChange} 
                    optionChange={this.optionChange}
                    addOption={this.addOption}
                    question ={this.props.question}
                    options={this.props.options}
                    onRequestClose={this.handleClose}
                    send = {this.send}
                    handleClose={this.handleClose}
                    />
                    </Dialog>
                     </div>
                   ):(<div>
                    <Link style={style.decoration} to='/about'> <ToolbarTitle text="about" /></Link>
                   <Link style={style.decoration} to='/list'> <ToolbarTitle text="Poll list" /></Link>
                   <RaisedButton href='auth/facebook' label="fb login" primary={true}  />

                   </div>
                   )}
                   
                   </div>
 
                    </ToolbarGroup>
                </Toolbar>
            </div>
        )
    }




questionChange(e){
    const question = e.target.value
this.props.questionChange(question)
}
optionChange(e,index){
    const value = e.target.value
this.props.optionChange(index,value)
}
addOption(){
this.props.addOption()
}

send(e){

    e.preventDefault()
    const options = this.props.options.map((option)=>{
        return {answear:option}
    })
const poll = {
    question:this.props.question,
    options:options
}
this.props.send(poll)


}

}

const mapStateToProps = (state)=>{
    return {
        isAuthenticated:state.user.isAuthenticated,
        info:state.user.info,
        question:state.poll.question,
        options: state.poll.options
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
      logout:()=>{
          dispatch(logout())
      },
      questionChange:(question)=>{
        dispatch(questionChange(question))
      },
      addOption:()=>{
          dispatch(addOption())
      },
      optionChange:(index,value)=>{
         
        dispatch(optionChange(index, value))
    },
    send:(poll)=>{
        
       dispatch(send(poll))
   }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Nav)