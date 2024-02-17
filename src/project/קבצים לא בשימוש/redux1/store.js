

const currentUser = {}


const reducer = produce((user, action) => {
        return {currentUser: action.payload }
    }, currentUser)

const store = createStore(reducer)
export default store;

