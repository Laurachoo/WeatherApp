import sectionFourStyles from '../sectionFour/SectionFour.module.css';

function SectionFour(props) {
  let t = Date.now() / 1000;
  return (
    <div className={sectionFourStyles.sectionFourContainer}>
      <span className={sectionFourStyles.sectionFourTitle}>WEATHER BY DAY</span>
      <div className={sectionFourStyles.temperaturesDaily}>
        {props.weatherData.daily.slice(0, 8).map((day) => {
          let image = '';
          if (props.icons[day.weather[0].main] != null) {
            image = props.icons[day.weather[0].main];
          }
          return day.dt > t ? (
            <div
              className={sectionFourStyles.sectionFourDailyData}
              key={day.dt}
            >
              <span className={sectionFourStyles.sectionFourDays}>
                {new Date(day.dt * 1000)
                  .toLocaleDateString('en-UK', {
                    weekday: 'long',
                    timeZone: 'Europe/Vilnius',
                  })
                  .slice(0, 3)}
              </span>
              <span className={sectionFourStyles.sectionFourImage}>
                {image}
              </span>
              <span className={sectionFourStyles.sectionFourTemperature}>
                {day.temp.day.toFixed() + ' °C'}
                <br></br>
                {day.temp.night.toFixed() + ' °C'}
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

export default SectionFour;
