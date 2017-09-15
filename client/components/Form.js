import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class Form extends Component{
    componentWillReceiveProps(){
        
    }


    render(){console.log(options)
        const options= this.props.options.map((option, index)=>{
           return <TextField 
           onChange={(e)=>{this.props.optionChange(e,index)}} value={this.props.options[index]} key = {index} id= {'option'+index}
            hintText="option"
            />
        })
        return(

            <div className='container'>
                <form action ='' name='vote' onSubmit = {(e)=> this.props.send(e)}>
                <TextField value={this.props.question} onChange={(e)=>{this.props.questionChange(e)}}
                hintText="question"
                />
                {options}
                <FlatButton label="add option" onClick={()=>{this.props.addOption()}}/>
                <RaisedButton type='submit' label="send" onClick={()=>{this.props.handleClose()}} primary={true}/>
                </form>

            </div>
        )
    }
}