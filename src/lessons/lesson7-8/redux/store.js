// immer
// ספריה שאחראית על שינוי משתנים קונסטיים - לא ניתנים לשינוי
import { produce } from 'immer'
import { createStore } from 'redux'

// statשe - אובייקט שמכיל את כל המשתנים הגלובליים של הפרויקט
// שם מקובל
// initialState - סטייט מאותחל
const initialState = {
    users: [
        { username: 'Talya', password: '8112' },
        { username: 'Shapi', password: 'sweet' },
        { username: 'Double', password: 'trouble' },
        { username: 'Ruth', password: 'bride' },
        { username: 'Sari', password: 'zrubavelli' },
    ],
    currentUser: {},
    items: [],
}

// רדיוסר - reducer
// פונקציה שתופסת את הפעולות שנזרקות לאויר ומפעילה את הפעולה הרצויה לפי הטייפ של האקשן
// השם של הפונקציה שמור - אבל לא חייבים לקרוא לה בשם זה
// produce שווה להרצה של 
// immer פונקציה של 
// מקבלת שני ארגומנטים:
// 1. callback פונקציית 
// שמקבלת שני ארגומטים:
// state - 
// action - 
// 2. סטייט שעליו נפעיל את הפעולות
const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return { ...state, currentUser: action.payload }

        case 'ADD_USER':
            return { ...state, users: [...state.users, action.payload] }

        case 'DELETE_USER':
            let user = state.users.filter(u => u.username == action.payload.username && u.password == action.payload.password)[0]
            const i = state.users.indexof(user)
            let list = state.users.splice(i, 1)
            return { ...state, users: list }
        case 'ADD_PRODUCT':
            return {...state, items: [...state.items, action.payload]}
        default:
            break;
    }
}, initialState)

const store = createStore(reducer)
export default store;

// function f(x, y) {
//     console.log(x);
//     let d = y(x*x)
//     if (d >= 100) {
//         console.log('big');
//     }
//     else {
//         console.log('small');
//     }
// }

// const x = () => console.log('xxxx');

// f(5, x)

// const a = 8

// f(7, (a) => {
//     return a * a
// })

// const c = 7

// f(7, (c) => {
//     return c * c
// })