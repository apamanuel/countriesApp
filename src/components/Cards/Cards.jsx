import style from "../Cards/Cards.module.css";
import Card from "../Card/Card";
import { formatCountry } from "../../helpers/helpers";

const Cards = () => {
  const countries = [
    {
      code: "AD",
      name: "Andorra",
      continent: {
        name: "Europe",
      },
      currency: "EUR",
      languages: [
        {
          name: "Catalan",
        },
      ],
    },
    {
      code: "AE",
      name: "United Arab Emirates",
      continent: {
        name: "Asia",
      },
      currency: "AED",
      languages: [
        {
          name: "Arabic",
        },
      ],
    },
    {
      code: "AF",
      name: "Afghanistan",
      continent: {
        name: "Asia",
      },
      currency: "AFN",
      languages: [
        {
          name: "Pashto",
        },
        {
          name: "Uzbek",
        },
        {
          name: "Turkmen",
        },
      ],
    },
    {
      code: "AG",
      name: "Antigua and Barbuda",
      continent: {
        name: "North America",
      },
      currency: "XCD",
      languages: [
        {
          name: "English",
        },
      ],
    },
    {
      code: "AI",
      name: "Anguilla",
      continent: {
        name: "North America",
      },
      currency: "XCD",
      languages: [
        {
          name: "English",
        },
      ],
    },
    {
      code: "AL",
      name: "Albania",
      continent: {
        name: "Europe",
      },
      currency: "ALL",
      languages: [
        {
          name: "Albanian",
        },
      ],
    },
    {
      code: "AM",
      name: "Armenia",
      continent: {
        name: "Asia",
      },
      currency: "AMD",
      languages: [
        {
          name: "Armenian",
        },
        {
          name: "Russian",
        },
      ],
    },
    {
      code: "AO",
      name: "Angola",
      continent: {
        name: "Africa",
      },
      currency: "AOA",
      languages: [
        {
          name: "Portuguese",
        },
      ],
    },
    {
      code: "AQ",
      name: "Antarctica",
      continent: {
        name: "Antarctica",
      },
      currency: null,
      languages: [],
    },
    {
      code: "AR",
      name: "Argentina",
      continent: {
        name: "South America",
      },
      currency: "ARS",
      languages: [
        {
          name: "Spanish",
        },
        {
          name: "Guarani",
        },
      ],
    },
    {
      code: "AS",
      name: "American Samoa",
      continent: {
        name: "Oceania",
      },
      currency: "USD",
      languages: [
        {
          name: "English",
        },
        {
          name: "Samoan",
        },
      ],
    },
    {
      code: "AT",
      name: "Austria",
      continent: {
        name: "Europe",
      },
      currency: "EUR",
      languages: [
        {
          name: "German",
        },
      ],
    },
  ];
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
