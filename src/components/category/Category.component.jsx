import { useNavigate } from "react-router-dom";
import {
  CategoryContainer,
  CategorySubTitle,
  CategoryTitle,
  CategoryTitleContainer,
} from "./category.style";

const Category = ({ category }) => {
  const { id, title, url, route } = category;
  const navigate = useNavigate();

  return (
    <CategoryContainer
      catId={id}
      imageUrl={url}
      onClick={() => navigate(route)}
    >
      <CategoryTitleContainer>
        <CategoryTitle>{title}</CategoryTitle>
        <CategorySubTitle>Shop now</CategorySubTitle>
      </CategoryTitleContainer>
    </CategoryContainer>
  );
};

export default Category;
