import { ADD_MESSAGE, SET_MESSAGE, SET_COUNT, GET_DES, SET_DES } from '../constants/actions';

// SOURCE DE VERITE == structure du store 
const initialState = {
    messages: [
        "Jeu du Yams",
    ],
    message: '',
    count: 0,
    des: [
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

        case SET_DES:

            const newDes = {
                number1: Math.floor(Math.random() * (6 - 1 + 1) + 1), //
                number2: Math.floor(Math.random() * (6 - 1 + 1) + 1), //
                number3: Math.floor(Math.random() * (6 - 1 + 1) + 1), //
            }
        
            return {
                ...state,
                des: state.des.concat(newDes),
            }

            // const des = [...state.des]

            // des.push(action.payload);

            // return {
            //     ...state,
            //     des
            // }

        default:
            return state;
    }
}

export default reducer;