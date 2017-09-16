import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar';
import profile from '../public/img/tcar.jpg'
import logo from '../public/img/logo.png'
import git from '../public/img/git.png'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class About extends Component{
    render(){
        const style = {
            height:'100vh',
            textAlign: 'center',
            
        }
        const style2 = {
            height:'100vh',
            textAlign: 'center',
            background:'#f2f2f2'
        }
        return(
            <div  className='About row '>
                <div style={style} className='col s6'>
                    <h1>Project</h1>
                    <img className="avatar" src={logo} />
                    <p>A freeCodeCamp full-stack project.</p>
                    <p>Using a tech stack of React + Redux + Node.js + Express + MongoDB</p>

                    <p>Other key packages used including Material-ui, React Router(v4
                        ), Mongoose, Passport
                    </p>
                </div>
                <div  style={style2} className='col s6'>
                    <h1>Author</h1>

                    <img className="avatar" src={profile} />
                    <h2>Tihomir Car</h2>
                    <a  href='https://github.com/tcar'><img width='40' src={git}/></a>
                </div>


             
            </div>
        )
    }
}