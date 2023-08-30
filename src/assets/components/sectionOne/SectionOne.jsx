import sectionOneStyles from '../sectionOne/SectionOne.module.css';

function SectionOne(props) {
  if (props.weatherData.length != 0) {
    let singleCity = props.weatherData.list[0];
    return (
      <div className={sectionOneStyles.sectionOneContainer}>
        <div className={sectionOneStyles.cityAndTemperature}>
          <span className={sectionOneStyles.vilniusTemperature}>
            {singleCity.main.temp.toFixed() + ' °C'}
          </span>
          <span className={sectionOneStyles.vilniusTitle}>
            Lithuania, Vilnius
          </span>
        </div>
        <div className={sectionOneStyles.vilniusIcon}>
          <span>
            {
              props.icons[
                singleCity.sys.sunset < Date.now() / 1000
                  ? singleCity.weather[0].main + ' night'
                  : singleCity.weather[0].main
              ]
            }
          </span>
        </div>
      </div>
    );
  }
}

export default SectionOne;
