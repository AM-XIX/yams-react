// import { GET_DOUBLE } from '../constants/actions';

// SOURCE DE VERITE == structure du store 
const initialState = {
    doubles: [],
    triples: [],
}

console.log(initialState);
const reducer = (state = initialState, action = {}) => {
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
}

export default reducer;