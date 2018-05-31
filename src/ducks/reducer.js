

const initialState = {
    answers: []
}

const ADD_ANSWER = 'ADD_ANSWER';

export function addAnswer(answer) {
  //send in current props as an argument
    return {
        type: ADD_ANSWER,
        payload: answer
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ANSWER:
            return Object.assign({}, state, { answers: action.payload })
        default:
            return state
    }
    console.log(initialState)
};
