import { produce } from 'immer'

const initialState = {
    products: [

    ],
    currentProduct: {}
}

const productReducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_PRODUCT':
            state.currentUser = action.payload
            break;

        case 'ADD_PRODUCT':
            return { ...state, users: [...state.users, action.payload] }

        case 'DELETE_PRODUCT':
            let i = state.users.findIndex(u => u.username == action.payload.username && u.password == action.payload.password)
            let list = state.users.splice(i, 1)
            return { ...state, users: list }

        default:
            break;
    }
}, initialState)

export default productReducer