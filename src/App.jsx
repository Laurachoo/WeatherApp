// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon,
  faCloudSun,
  faCloudMoon,
  faCloudShowersHeavy,
  faCloudSunRain,
  faCloudMoonRain,
  faCloudBolt,
  faSnowflake,
  faSmog,
  faVolcano,
  faTornado,
} from '@fortawesome/free-solid-svg-icons';
import Header from './assets/components/header/Header';
import SectionOne from './assets/components/sectionOne/SectionOne';
import SectionTwo from './assets/components/sectionTwo/SectionTwo';
import SectionThree from './assets/components/sectionThree/SectionThree';
import SectionFour from './assets/components/sectionFour/SectionFour';
import Footer from './assets/components/footer/Footer';

const iconArray = {
  Thunderstorm: <FontAwesomeIcon icon={faCloudBolt} />,
  'Thunderstorm night': <FontAwesomeIcon icon={faCloudBolt} />,
  Drizzle: <FontAwesomeIcon icon={faCloudSunRain} />,
  'Drizzle night': <FontAwesomeIcon icon={faCloudMoonRain} />,
  Rain: <FontAwesomeIcon icon={faCloudShowersHeavy} />,
  'Rain night': <FontAwesomeIcon icon={faCloudShowersHeavy} />,
  Snow: <FontAwesomeIcon icon={faSnowflake} />,
  'Snow night': <FontAwesomeIcon icon={faSnowflake} />,
  Mist: <FontAwesomeIcon icon={faSmog} />,
  'Mist night': <FontAwesomeIcon icon={faSmog} />,
  Smoke: <FontAwesomeIcon icon={faSmog} />,
  'Smoke night': <FontAwesomeIcon icon={faSmog} />,
  Haze: <FontAwesomeIcon icon={faSmog} />,
  'Haze night': <FontAwesomeIcon icon={faSmog} />,
  Dust: <FontAwesomeIcon icon={faSmog} />,
  'Dust night': <FontAwesomeIcon icon={faSmog} />,
  Fog: <FontAwesomeIcon icon={faSmog} />,
  'Fog night': <FontAwesomeIcon icon={faSmog} />,
  Sand: <FontAwesomeIcon icon={faSmog} />,
  'Sand night': <FontAwesomeIcon icon={faSmog} />,
  Ash: <FontAwesomeIcon icon={faVolcano} />,
  'Ash night': <FontAwesomeIcon icon={faVolcano} />,
  Squall: <FontAwesomeIcon icon={faSmog} />,
  'Squall night': <FontAwesomeIcon icon={faSmog} />,
  Tornado: <FontAwesomeIcon icon={faTornado} />,
  'Tornado night': <FontAwesomeIcon icon={faTornado} />,
  Clear: <FontAwesomeIcon icon={faSun} />,
  'Clear night': <FontAwesomeIcon icon={faMoon} />,
  Clouds: <FontAwesomeIcon icon={faCloudSun} />,
  'Clouds night': <FontAwesomeIcon icon={faCloudMoon} />,
};

function App() {
  const [weather, setWeather] = useState([]);
  const [weatherSingleCity, setWeatherSingleCity] = useState([]);
  const [isLoading, setIsLoading] = useState('');
  const handleClick = async (lon, lat) => {
    setIsLoading(true);
    fetch(
      'https://api.openweathermap.org/data/3.0/onecall?lat=' +
        lat +
        '&lon=' +
        lon +
        '&exclude=minutely&units=metric&appid=543a28f4cec7ad5f39e99e2ec1407693'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWeatherSingleCity(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetch(
      'http://api.openweathermap.org/data/2.5/group?id=593116,598316,598098,594739,596128&units=metric&appid=543a28f4cec7ad5f39e99e2ec1407693'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWeather(data);
      });
  }, []);
  return (
    <div>
      <div className='mainContainer'>
        <Header />
        <SectionOne icons={iconArray} weatherData={weather} />
        <SectionTwo
          icons={iconArray}
          weatherData={weather}
          cityDataFN={handleClick}
        />
        {weatherSingleCity.length != 0 && isLoading == false ? (
          <div className='sectionThreeAndFourContainer'>
            <SectionThree weatherData={weatherSingleCity} icons={iconArray} />
            <SectionFour weatherData={weatherSingleCity} icons={iconArray} />
          </div>
        ) : isLoading == true ? (
          <div className='loader'>
            <span className='loaderElement'></span>
            <span className='loaderElement'></span>
            <span className='loaderElement'></span>
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
}

export default App;
