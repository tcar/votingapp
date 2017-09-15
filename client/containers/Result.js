import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getVotes } from '../actions/pollActions'
import {Bar, Line, Pie} from 'react-chartjs-2';
 class Result extends Component{

    componentWillMount(){
        console.log('evo')
        const poll = {
            id:this.props.poll
        }
        this.props.getVotes(poll)
        console.log(this.props.chartData)
    }


    render(){
        console.log(this.props.chartData)
        return(
            <div className="chart">
            <Bar
              data={{
                labels: this.props.labels,
        datasets:this.props.datasets
              }}
              />
              </div>
            
        )

}}




const mapStateToProps = (state)=>{
    return {
        poll:state.poll.selectedPoll,
        labels:state.chart.labels,
        datasets:state.chart.datasets
        

    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        getVotes:(poll)=>{
            dispatch(getVotes(poll))
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)