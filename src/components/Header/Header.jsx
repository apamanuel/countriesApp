import style from "../Header/Header.module.css";
import logo from "../../../public/assets/logo.png";
const Header = () => {
  return (
    <div className={style.container}>
      <img src={logo} alt="logo " className={style.imgLogo} />
      <h1 className={style.name}>Countries App</h1>
    </div>
  );
};

export default Header;
