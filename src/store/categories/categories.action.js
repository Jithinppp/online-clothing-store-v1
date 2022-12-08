import { getCategoriesAndDocument } from "../../utils/firebase";

import { createAction } from "../../utils/reducers/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START);

const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_SUCCESS, categoriesArray);

const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_FAILED, error);

// thunk async function
export const fetchCategoriesAsync = () => async (dispatch) => {
  // the dispatch actually act as next()
  dispatch(fetchCategoriesStart());
  // a function returns another function it has a dispatch it will go through the middleware of thunk
  // if the action is a function it will execute
  try {
    const categoriesArray = await getCategoriesAndDocument();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
