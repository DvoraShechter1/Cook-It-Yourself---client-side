
import { produce } from 'immer'
import { createStore } from 'redux'

const initialState = {
    admin:{
        "id": 1,
        "lastName": "ראשי",
        "firstName": "מנהל",
        "email": "adm@gmail.com",
        "password": "1234"
    },
    currentUser: {}
}


const reducer = produce((state, action) => {
    if(action.type == 'SET_CURRENT_USER')
        return { ...state, currentUser: action.payload }
    return {state}
}, initialState)

const store = createStore(reducer)
export default store;

