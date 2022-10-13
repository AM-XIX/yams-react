import { ADD_MESSAGE , SET_COUNT, SET_MESSAGE, SET_DES } from '../constants/actions';

// on prépare de petites fonctions anonymes pour le dispatcher
export const addMessage = payload => {
    return {
        type: ADD_MESSAGE, payload: payload
    }
};

export const set_message = payload => {
    return {
        type: SET_MESSAGE, payload
    }
};

export const set_count = () => {
    return {
        type: SET_COUNT
    }
};

export const set_des = payload => {
    return {
        type: SET_DES, payload
    }
};