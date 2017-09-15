import axios from 'axios'

export function questionChange(question){
   return  dispatch=>{
       dispatch({type:'CHANGE_QUESTION',payload:question})
    }

}

export function optionChange(index,value){
   return dispatch=>{
       dispatch({type:'CHANGE_OPTION',payload:{
           index:index,
           value:value
       }})
   }
    }
export function addOption(){
        return dispatch=>{
            dispatch({type:'ADD_OPTION'})
        }
        }
export function send(poll){
    console.log(poll)
        return dispatch=>{
            axios({
                method:'post',
                url:'/postPoll',
                data:poll,
                withCredentials:true
            
            }).then((res)=>{
                dispatch({type:'SEND', payload:res.data})
                axios({
                    method:'get',
                    url:'/myPolls'
                }).then((rez)=>{
                   
                    dispatch({type:'GET_MYPOLLS', payload:rez.data})
                })
                
            })


            
        }
        }
export function getList(){

   return dispatch=>{
        axios({
            method:'get',
            url:'/getPolls',
        }).then((res)=>{

            console.log(res.data)
            dispatch({type:'GET_POLLS', payload:res.data})
        })
    }
}
export function myPolls(){
    return dispatch=>{
        axios({
            method:'get',
            url:'/myPolls'
        }).then((res)=>{
            console.log(res.data)
            dispatch({type:'GET_MYPOLLS', payload:res.data})
        })
    }
}
export function voteChange(vote){
    return dispatch=>{
        dispatch({type:'VOTE_CHANGE',payload:vote})
    }
}

export function postVote(vote){
    return dispatch=>{
        axios({
            method:'put',
            url:'/vote',
            data:vote,
            withCredentials:true
        }).then((res)=>{
            console.log(res.data)
            dispatch({type:'VOTED', payload:res.data})
        })
    }

}

export function selectedPoll(poll){
    return dispatch=>{

      
            dispatch({type:'SELECTED_POLL',payload:poll})
      
    }
}
export function getVotes(poll){
    return dispatch=>{
        dispatch({type:'RENDER'})
        axios({
            method:'post',
            url:'/getVotes',
            data:poll
        }).then((res)=>{
            dispatch({type:'GET_VOTES',payload:res.data})
        })
    }
}

export function deletePoll(id){
    return dispatch=>{
        dispatch({
            type:'DELETE_POLL',payload:id
        })
        axios({
            method:'delete',
            url:'/deletePoll',
            data:id,
            withCredentials:true,

        })
    }
}


