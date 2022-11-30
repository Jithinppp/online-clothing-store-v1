import { createContext, useEffect, useState } from "react";
import { getCollectionAndDocument } from "../utils/firebase.js";

export const CategoriesContext = createContext({
  categories: {},
});

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    // getting the data initially
    // to set a async function in useEffect use separate function deceleration
    // and call inside the useEffect
    const getCollectionAndDocumentFromDatabase = async () => {
      const categoriesMap = await getCollectionAndDocument();
      setCategories(categoriesMap);
    };
    getCollectionAndDocumentFromDatabase();
  }, []);

  const value = { categories };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
