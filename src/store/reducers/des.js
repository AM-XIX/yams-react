import { SET_COUNT, SET_DES, SET_DOUBLE, SET_COUNT_DOUBLE, SET_COUNT_TRIPLE } from '../constants/actions';

// SOURCE DE VERITE == structure du store 
const initialState = {
    count: 0,
    countDouble: 0,
    countTriple: 0,
    des: [],
    double: [],
}

console.log(initialState);
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_COUNT:

            return {
                ...state, // une copie peu profonde 
                count: state.count + 1
            }

        case SET_COUNT_DOUBLE:
            return {
                ...state,
                countDouble: state.countDouble + 1
            }

        case SET_COUNT_TRIPLE:
            return {
                ...state,
                countTriple: state.countTriple + 1
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

        // save doubles
        case SET_DOUBLE:
            return {
                ...state,
                double: state.double.concat(action.payload),
            }


        default:
            return state;
    }
}

export default reducer;

// switch (action.type) {
//     case GET_DOUBLE:

//     const doubles = [...state.doubles]
//     doubles.push(action.payload);

//     return {
//         ...state,
//         doubles
//     }

//     default:
//         return state;
// }