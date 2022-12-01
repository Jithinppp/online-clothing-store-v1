import {
  CategoryContainer,
  CategorySubTitle,
  CategoryTitle,
  CategoryTitleContainer,
} from "./category.style";

const Category = ({ catg }) => {
  const { id, title, url } = catg;
  return (
    <CategoryContainer catId={id} style={{ backgroundImage: `url(${url})` }}>
      <CategoryTitleContainer>
        <CategoryTitle>{title}</CategoryTitle>
        <CategorySubTitle>Shop now</CategorySubTitle>
      </CategoryTitleContainer>
    </CategoryContainer>
  );
};

export default Category;
