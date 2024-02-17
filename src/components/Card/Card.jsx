import style from "../Card/Card.module.css";
import red from "../../../public/assets/red.png";
import brown from "../../../public/assets/brown.png";
import green from "../../../public/assets/green.png";
import { useState } from "react";

const props = {
  name: "Venezuela",
  code: "VE",
  language: "spanish",
  currency: "VES",
};

const Card = () => {
  const { name, code, language, currency } = props;

  const [colorCard, setColorCard] = useState("#158C03");
  const [border, setBorder] = useState("2px solid black");

  const handlerClick = () => {
    if (border === "2px solid black") {
      setBorder("6px solid red");
    } else setBorder("2px solid black");
  };

  console.log(colorCard);
  return (
    <div
      className={style.container}
      style={{ backgroundColor: colorCard, border: border }}
    >
      <div className={style.colorBar}>
        <img
          src={red}
          alt="red"
          className={style.redBtn}
          onClick={() => setColorCard("#F20519")}
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
      <ul>
        <li>Code: {code}</li>
        <li>Language: {language}</li>
        <li>Currency: {currency}</li>
      </ul>
    </div>
  );
};

export default Card;
