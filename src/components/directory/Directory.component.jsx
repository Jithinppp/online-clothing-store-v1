// components
import { DirectoryContainer } from "./directory.style";
import Category from "../category/Category.component";

const categories = [
  {
    id: 1,
    title: "Hats",
    url: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Jackets",
    url: "https://images.unsplash.com/photo-1519758340474-40fa8cba6584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Sneakers",
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "Men",
    url: "https://images.unsplash.com/photo-1493146146946-e907f69cdf23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    route: "shop/mens",
  },
  {
    id: 5,
    title: "Women",
    url: "https://images.unsplash.com/photo-1593380090147-a2192b72a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    route: "shop/womens",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => {
        return <Category key={category.id} category={category} />;
      })}
    </DirectoryContainer>
  );
};

export default Directory;
