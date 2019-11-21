import {
    createStore
} from 'redux';

const counter = (state = {
    username: '',
    name: 'liu'
}, action) => {
    switch (action.type) {
        case 'COOKINAME':
            return {
                ...state,
                username: action.username
            }
        default:
            return state
    }
}
const store = createStore(counter)

export default store