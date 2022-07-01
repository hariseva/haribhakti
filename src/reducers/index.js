import {combineReducers} from 'redux'
 
import Empreducer from "./empreducer"
import Userreducer from './userreducer'
import Studentreducer from './studentreducer'


var rootReducer=combineReducers({
    Empreducer,Userreducer,Studentreducer
})
export default rootReducer;