import style from "../Home/Home.module.css";
import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <div className={style.container}>
      <Layout>
        <h1>Soy el Home</h1>
      </Layout>
    </div>
  );
};

export default Home;
