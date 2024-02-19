import style from "../Home/Home.module.css";
import Layout from "../../components/Layout/Layout";
import Cards from "../../components/Cards/Cards";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  return (
    <div className={style.container}>
      <Layout>
        <SearchBar />
        <Cards />
      </Layout>
    </div>
  );
};

export default Home;
