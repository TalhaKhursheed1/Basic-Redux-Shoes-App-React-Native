import { ADD_TO_CART, REMOVE_FROM_CART, SET_USER_DATA } from "./Constants";

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];

    case REMOVE_FROM_CART:
      const Delete = state.filter((item, index) => {
        return index !== action.data;
      });
      return Delete ;
      
      case SET_USER_DATA:
        return [
          ...state,
          action.data
        ]
    default:
      return state;
  }
};
