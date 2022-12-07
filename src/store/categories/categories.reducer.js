import { CATEGORIES_ACTION_TYPES } from "./categories.types";

const INITIAL_STATE = {
  categories: [],
};

const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORY:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
