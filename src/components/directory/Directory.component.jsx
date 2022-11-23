import Category from "../category/Category.component";
import "./directory.syle.css";

const Directory = ({ categories }) => {
  return (
    <div className="directory_container">
      {categories.map((catg) => {
        return <Category key={catg.id} catg={catg} />;
      })}
    </div>
  );
};

export default Directory;
