import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { items, title } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

// put all the business logic inside the selectors or redux
// because we need the basic form from api and we extrapolate the logic in frontend
