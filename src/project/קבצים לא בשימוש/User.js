import { produce } from 'immer'
import { createStore } from 'redux'

const user = {}
const reducer = produce(action=>{
    return action
},user)

const store = createStore(reducer)
export default store;
