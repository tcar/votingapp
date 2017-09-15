var randomColor = require('randomcolor');

export default function chartReducer(state={
        labels: [],
        datasets:[
          {
            label:'',
            data:[
            
            ],
        
          }
        ]

    },action){
        switch (action.type){
    
          case 'GET_VOTES':{
            const options =action.payload.options.map((option)=>{
              return option.answear
            })
            const datasets = action.payload.options.map((option)=>{
            
            
            var color = randomColor()
            
              return {
                label:option.answear,
                data:[option.votes],
                backgroundColor:color
              }
            })
            return {...state,
              labels:options,
              datasets:datasets
                
            }
        }
            default:
            return state
        }
    
      
    
    }