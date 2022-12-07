import { Fragment } from "react";
import { useSelector } from "react-redux";

// redux
import { selectCategoriesMap } from "../../store/categories/categories.selector";
// components
import CategoryPreview from "../../components/category-preview/category-preview";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return <CategoryPreview key={title} title={title} product={products} />;
      })}
    </Fragment>
  );
};
export default CategoriesPreview;
