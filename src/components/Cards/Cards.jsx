import style from "../Cards/Cards.module.css";
import Card from "../Card/Card";
import { formatCountry } from "../../helpers/helpers";
import { useSelector } from "react-redux";

const Cards = () => {
  const countries = useSelector((state) => state.countriesToShow);
  console.log(countries);
  return (
    <div className={style.container}>
      {countries.map((country) => {
        const data = formatCountry(country);
        return <Card country={data} key={data.code} />;
      })}
    </div>
  );
};

export default Cards;
