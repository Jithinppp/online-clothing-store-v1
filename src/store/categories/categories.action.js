// import { getCategoriesAndDocuments } from "../../utils/firebase";

import { createAction } from "../../utils/reducers/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_FAILED, error);

/*
 

// thunk middleware async function
export const fetchCategoriesAsync = () => async (dispatch) => {
  // the dispatch actually act as next()
  dispatch(fetchCategoriesStart());
  // a function returns another function it has a dispatch it will go through the middleware of thunk
  // if the action is a function it will execute
  try {
    const categoriesArray = await getCategoriesAndDocuments("categories");
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
*/

/*
a middleware consist of 3 functions return each other 
(store)=>(next)=>(action){}
 */
