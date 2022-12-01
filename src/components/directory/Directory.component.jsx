// components
import { DirectoryContainer } from "./directory.style";
import Category from "../category/Category.component";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((catg) => {
        return <Category key={catg.id} catg={catg} />;
      })}
    </DirectoryContainer>
  );
};

export default Directory;
