import axios from 'axios'

export function getUser(){
  
 return dispatch=>{
    axios({
        method:'get',
        url:'/user'
    }).then((res)=>{
        console.log(res)
        dispatch({type:'LOGIN',payload:res.data[0]})
    })


  } 
}

export function logout(){
    
   return dispatch=>{
      axios({
          method:'get',
          url:'/logout',
          
      }).then((res)=>{
      
          dispatch({type:'LOGOUT'})
      })
  
  
    } 
  }