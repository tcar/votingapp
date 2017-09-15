

export default function pollReducer(state={
    question:'',
    options:['',''],
    polls:[],
    mypolls:[],
    choice:'select answear',
    selectedPoll:'',
    pollVoted:[],
    rendering:false
    },action){
        switch (action.type){
            case'CHANGE_QUESTION':{
                return {...state,
                    question:action.payload
                }
                    }
             case'ADD_OPTION':{
                return {...state,
                    options:[...state.options,
                    ''
                    ]
                }
                    }
            case'CHANGE_OPTION':{
               return {...state,
                options:[...state.options.slice(0, action.payload.index), action.payload.value, ...state.options.slice(action.payload.index+1)]

               }
                    }
            case 'SEND':{
                return{...state,
                    question:'',
                    options:['',''],
                    polls:action.payload
                }
            }
            case 'GET_POLLS': {
                return{...state,
                    polls:action.payload
                }
            }
            case 'GET_MYPOLLS':{
                return{...state,
                    mypolls:action.payload

                }
            }
            case 'VOTE_CHANGE':{
                return{...state,
                    choice:action.payload

                }
            }
            case 'VOTED':{
                return{...state,
                    polls:action.payload

                }
            }
            case 'SELECTED_POLL':{
                return{...state,
                    selectedPoll:action.payload

                }
            }
           case 'DELETE_POLL':{
               const polls = state.mypolls.filter((poll)=>{
                return poll._id!==action.payload.id
               })
               return{
                   ...state,
                   mypolls:polls

               }
           }
            
            default:
            return state
        }
    
      
    
    }