import sectionThreeStyles from '../sectionThree/SectionThree.module.css';

function SectionThree(props) {
  let t = Date.now() / 1000;
  return (
    <div className={sectionThreeStyles.sectionThreeContainer}>
      <span className={sectionThreeStyles.sectionThreeTitle}>
        WEATHER BY HOUR
      </span>
      <div className={sectionThreeStyles.temperaturesHourly}>
        {props.weatherData.hourly.slice(0, 25).map((hour) => {
          let image = '';
          let nextDayStats = props.weatherData.daily.filter(
            (day) => day.dt > props.weatherData.current.sunset
          )[0];

          if (props.icons[hour.weather[0].main] != null) {
            image =
              props.icons[
                props.weatherData.current.sunset < hour.dt &&
                hour.dt < nextDayStats.sunrise
                  ? hour.weather[0].main + ' night'
                  : hour.weather[0].main
              ];
          }
          return hour.dt > t ? (
            <div
              className={sectionThreeStyles.sectionThreeHourlyData}
              key={hour.dt}
            >
              <span className={sectionThreeStyles.sectionThreeHours}>
                {new Date(hour.dt * 1000).toLocaleTimeString('lt-LT', {
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZone: 'Europe/Vilnius',
                })}
              </span>
              <span className={sectionThreeStyles.sectionThreeImage}>
                {image}
              </span>
              <span className={sectionThreeStyles.sectionThreeTemperature}>
                {hour.temp.toFixed() + ' °C'}
              </span>
            </div>
          ) : (
            ''
          );
        })}
      </div>
    </div>
  );
}

export default SectionThree;
