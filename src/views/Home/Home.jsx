import style from "../Home/Home.module.css";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/Card/Card";

const Home = () => {
  return (
    <div className={style.container}>
      <Layout>
        <h1>Soy el Home</h1>
        <Card />
      </Layout>
    </div>
  );
};

export default Home;
