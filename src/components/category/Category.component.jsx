import "./category.style.css";

const Category = ({ catg }) => {
  const { id, title, url } = catg;
  return (
    <div
      className={`category category_${id}`}
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="category_title_container">
        <h3 className="category_title">{title}</h3>
        <p className="category_subtitle">Shop now</p>
      </div>
    </div>
  );
};

export default Category;
