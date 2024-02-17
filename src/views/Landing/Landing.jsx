import { useNavigate } from "react-router-dom";
import style from "../Landing/Landing.module.css";

const Landing = () => {
  const navigate = useNavigate();
  const handlerBtn = () => {
    navigate("/home");
  };

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Welcome to the countries app</h1>
      </div>
      <div className={style.containerBtn}>
        <button className={style.btnLanding} onClick={handlerBtn}>
          ENTER
        </button>
      </div>
    </div>
  );
};

export default Landing;
