import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  console.log("reducer1---", action.type);
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      console.log("newState", newState);
      return newState;
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + 5,
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - 5,
      };
  }
  console.log('last state');
  return state;
};

export default reducer;
