import { GET_DOUBLE, SET_COUNT, SET_DES } from '../constants/actions';

// on prépare de petites fonctions anonymes pour le dispatcher

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

export const get_double = payload => {
    return {
        type: GET_DOUBLE, payload
    }
};