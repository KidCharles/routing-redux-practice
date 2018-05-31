import axios from 'axios'

const initialState = {
    answers: [],
    pokemon: 'hi',
    listPokemon: []
}

const _FULFILLED = '_FULFILLED'
const ADD_ANSWER = 'ADD_ANSWER';
const GET_POKEMON = 'GET_POKEMON'

export function addAnswer(answer) {
    //send in current props as an argument
    return {
        type: ADD_ANSWER,
        payload: answer
    }
}
export function getPokemon(num) {
    let pokemon = axios.get(`https://pokeapi.co/api/v2/pokemon/${num}/`).then(res => res.data)
    return {
        type: GET_POKEMON,
        payload: pokemon
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMON + _FULFILLED:
            return Object.assign({}, state, { pokemon: action.payload })
        case ADD_ANSWER:
            return Object.assign({}, state, { answers: action.payload })
        default:
            return state
    }
    console.log(initialState)
};
