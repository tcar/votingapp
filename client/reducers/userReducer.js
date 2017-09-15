export default function userReducer(state={
    isAuthenticated:false,
    name:'',
    info:[]
    },action){
        switch (action.type){
            case'LOGIN':{
                return {
                    isAuthenticated:true,
                    info:action.payload
                }
                    }
            case'LOGOUT':{
                return {...state,
                    isAuthenticated:false,
                    name: '',
                    info:[]
                }
                    }
            default:
            return state
        }
    
      
    
    }