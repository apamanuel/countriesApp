import style from "../Card/Card.module.css";
import grey from "../../assets/grey.png";
import brown from "../../assets/brown.png";
import green from "../../assets/green.png";
import { useState } from "react";

const Card = (props) => {
  const { name, code, continent, languages, currency } = props.country;

  const [colorCard, setColorCard] = useState("#F2F2F2 ");
  const [border, setBorder] = useState("2px solid black");

  const handlerClick = () => {
    if (border === "2px solid black") {
      setBorder("6px solid red");
    } else setBorder("2px solid black");
  };

  return (
    <div
      className={style.container}
      style={{ backgroundColor: colorCard, border: border }}
    >
      <div className={style.colorBar}>
        <img
          src={grey}
          alt="grey"
          className={style.greyBtn}
          onClick={() => setColorCard("#F2F2F2")}
        />
        <img
          src={brown}
          alt="brown"
          className={style.brownBtn}
          onClick={() => setColorCard("#F2A950")}
        />
        <img
          src={green}
          alt="green"
          className={style.greenBtn}
          onClick={() => setColorCard("#158C03")}
        />
      </div>
      <h3 className={style.name} onClick={handlerClick}>
        {name}
      </h3>
      <ul className={style.list}>
        <li>Code: {code}</li>
        <li>Continent: {continent}</li>
        <li>Language: {languages}</li>
        <li>Currency: {currency}</li>
      </ul>
    </div>
  );
};

export default Card;
