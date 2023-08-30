import sectionTwoStyles from '../sectionTwo/SectionTwo.module.css';

function SectionTwo(props) {
  if (props.weatherData.length != 0)
    return (
      <div className={sectionTwoStyles.sectionTwoContainer}>
        <div className={sectionTwoStyles.sectionTwoContainerGrid}>
          {props.weatherData.list.map((city) => {
            let image = '';
            if (props.icons[city.weather[0].main] != null) {
              image =
                props.icons[
                  city.sys.sunset < Date.now() / 1000
                    ? city.weather[0].main + ' night'
                    : city.weather[0].main
                ];
            }
            return (
              <article
                onClick={() => {
                  props.cityDataFN(city.coord['lon'], city.coord['lat']);
                }}
                className={sectionTwoStyles.sectionTwoArticle}
                key={city.id}
              >
                <span className={sectionTwoStyles.city}>
                  {city.name.toUpperCase()}
                </span>
                <span key={city.id}>
                  <span className={sectionTwoStyles.icon} key={city.id}>
                    {image}
                  </span>
                </span>
                <span className={sectionTwoStyles.temperature}>
                  {city.main.temp.toFixed() + ' °C'}
                </span>
              </article>
            );
          })}
        </div>
        <h3 className={sectionTwoStyles.sectionTwoDescription}>
          Select a city for more details!
        </h3>
      </div>
    );
}

export default SectionTwo;
