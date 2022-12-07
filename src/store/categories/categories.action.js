import { createAction } from "../../utils/reducers/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const setCategories = (user) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORY, user);
