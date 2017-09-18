import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export default class Form extends Component{
  

    render(){
        
        if(!this.props.question){
            const message='you need to set question'
         }else{
            const message=''
         }
        
        const options= this.props.options.map((option, index)=>{
           return (
               <div className='row' key = {index} id= {'option'+index}>
                   <div className='col s8'>
            <TextValidator
            onChange={(e)=>{this.props.optionChange(e,index)}}
             value={this.props.options[index]}
             validators={['required']}
             errorMessages={'this field is required'}
             
             hintText="option"
             name={'option' + index}
             /></div>
             {index>1?(
                <div className='col s4'><RaisedButton onClick={()=>{this.props.deleteOption( index)}} label='X'/></div>

             ):(<div></div>)}
             </div>
           )
           
        
        })
        return(

            <div className='container'>
                <ValidatorForm ref='form' action ='' name='vote' onSubmit = {(e)=> this.props.send(e)}>
                <TextValidator 
                value={this.props.question}
                validators={['required']}
                errorMessages={'this field is required'}
                 onChange={(e)=>{this.props.questionChange(e)}}
                hintText="question"
                name="question"

                />
                {options}
                <FlatButton label="add option" onClick={()=>{this.props.addOption()}}/>
                <RaisedButton  type='submit' label="send"  primary={true}/>
                </ValidatorForm>

            </div>
        )
    }
}