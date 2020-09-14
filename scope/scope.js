// JavaScript (Web Page) GLOBAL SCOPE

const planet = "Earth";

const climate = (sentence, values) => console.log(sentence, values[0], values[1]);
const sayLanguage = (language) => console.log("We speak", language);

const Netherlands = (_climate) => {
  const country = "Nederland";
  const language = "Dutch";
  return {
    weather: (_climate) => {
      climate("Het weer in", [country, _climate]);
    },
    sayLanguage,
  };
};

let NL = Netherlands();
console.log(NL.weather())

const Spain = () => {
  const country = "Espana";
  const language = "Espagnol";
  const weather = (_climate) => {
    climate("El tiempo en", [country, _climate]);
  };
};

class Country {
  constructor(config) {}
  set weather(_climate) {
    this._weather = _climate;
  }
  get weather() {
    return this._weather;
  }
  sayWeather() {
    console.log();
  }
}

let Germany = new Country({
  name: "",
  lang: "",
});
