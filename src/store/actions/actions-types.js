import { SET_COUNT, SET_DES, SET_DOUBLE, SET_COUNT_DOUBLE, SET_COUNT_TRIPLE } from '../constants/actions';

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

    export const set_double = payload => {
        return {
            type: SET_DOUBLE, payload
        }

};

export const set_count_double = () => {
    return {
        type: SET_COUNT_DOUBLE
    }
};

export const set_count_triple = () => {
    return {
        type: SET_COUNT_TRIPLE
    }
}