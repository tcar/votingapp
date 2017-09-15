import {combineReducers} from 'redux'

import user from './userReducer'
import poll from './pollReducer'
import chart from './chartReducer'
const reducers = combineReducers({
    user,
    poll,
    chart
})

export default reducers