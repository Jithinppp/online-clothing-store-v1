import { Fragment } from "react";
import { useSelector } from "react-redux";

// redux
import {
  selectCategoriesMap,
  selectIsCategoriesLoading,
} from "../../store/categories/categories.selector";
// components
import CategoryPreview from "../../components/category-preview/category-preview";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap);
  const isCategoriesLoading = useSelector(selectIsCategoriesLoading);

  return (
    <Fragment>
      {isCategoriesLoading ? (
        <LoadingSpinner />
      ) : (
        Object.keys(categories).map((title) => {
          const products = categories[title];
          return (
            <CategoryPreview key={title} title={title} product={products} />
          );
        })
      )}
    </Fragment>
  );
};
export default CategoriesPreview;
