import { ADD_MESSAGE, SET_MESSAGE, SET_COUNT, GET_DES } from '../constants/actions';

// SOURCE DE VERITE == structure du store 
const initialState = {
    messages: [
        "Hello World !",
        "Bonjour tout le monde !"
    ],
    message: '',
    count: 0,
    des: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
    ],
}

console.log(initialState);
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_MESSAGE:

            // nouvelle référence des messages un nouveau tableau 
            const messages = [...state.messages]

            messages.push(action.payload);

            // console.log(initialState);

            return {
                ...state,
                messages
            }

        case SET_COUNT:

            return {
                ...state, // une copie peu profonde 
                count: state.count + 1 // on modifie une clé de notre nouveau tableau
            }

        case GET_DES:
            return {
                ...state,
                des: action.payload
            }


        default:
            return state;
    }
}

export default reducer;