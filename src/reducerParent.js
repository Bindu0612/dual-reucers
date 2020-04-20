import reducerEmployee from './reducerEmployee';
import reducerStudent from './reducerStudent';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({student: reducerStudent, employee: reducerEmployee})


export default rootReducer;