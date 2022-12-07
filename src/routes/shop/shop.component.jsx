import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

// firebase utils
import { getCategoriesAndDocument } from "../../utils/firebase";
// redux imports
import { setCategories } from "../../store/categories/categories.action";
// components
import "./shop.style.css";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
  const dispatch = useDispatch();

  // getting categories
  useEffect(() => {
    // to use async function in useEffect use separate function expression
    const getCollectionAndDocumentFromDatabase = async () => {
      const categoriesArray = await getCategoriesAndDocument();
      dispatch(setCategories(categoriesArray));
    };
    getCollectionAndDocumentFromDatabase();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;

// the path=":anything" is make a variable in the usePrams() we can destructure it
// by that we can create dynamic pages or rendering or components
