import "./home.style.css";
import Directory from "../../components/directory/Directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      url: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      title: "Jackets",
      url: "https://images.unsplash.com/photo-1519758340474-40fa8cba6584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      title: "Shoes",
      url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      title: "Men",
      url: "https://images.unsplash.com/photo-1493146146946-e907f69cdf23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80  ",
    },
    {
      id: 5,
      title: "Women",
      url: "https://images.unsplash.com/photo-1593380090147-a2192b72a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    },
  ];
  return (
    <main className="home">
      <Directory categories={categories} />
    </main>
  );
};
export default Home;
