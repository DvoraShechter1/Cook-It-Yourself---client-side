import { produce } from 'immer'

// initialState - סטייט מאותחל
const initialState = {
    list: [
        { username: 'Talya', password: '8112' },
        { username: 'Shapi', password: 'sweet' },
        { username: 'Double', password: 'trouble' },
        { username: 'Ruth', password: 'bride' },
        { username: 'Sari', password: 'zrubavelli' },
    ],
    currentUser: {},
    items: []
}

const userReducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            // return { ...state, currentUser: action.payload
            // דרך נוספת
            state.currentUser = action.payload
            break;

        case 'ADD_USER':
            return { ...state, list: [...state.list, action.payload] }

        case 'DELETE_USER':
            // let user = state.users.filter(u => u.username == action.payload.username && u.password == action.payload.password)[0]
            // const i = state.users.indexof(user)
            let i = state.list.findIndex(u => u.username == action.payload.username && u.password == action.payload.password)
            let l = state.l.splice(i, 1)
            return { ...state, list: l }

        default:
            break;
    }
}, initialState)

export default userReducer