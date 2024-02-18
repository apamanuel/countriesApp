import style from "../Home/Home.module.css";
import Layout from "../../components/Layout/Layout";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  return (
    <div className={style.container}>
      <Layout>
        <Cards />
      </Layout>
    </div>
  );
};

export default Home;
