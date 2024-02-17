import Layout from "../../components/Layout/Layout";
import style from "../Not Found/NotFound.module.css";

const NotFound = () => {
  return (
    <div>
      <Layout>
        <h3 className={style.container}>
          Unfortunately we can not find that page
        </h3>
      </Layout>
    </div>
  );
};

export default NotFound;
