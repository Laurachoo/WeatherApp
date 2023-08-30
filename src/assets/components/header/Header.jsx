import headerStyles from '../header/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

const headerIcon = <FontAwesomeIcon icon={faEarthAmericas} />;

function Header() {
  return (
    <div className={headerStyles.headerContainer}>
      <nav>
        <div className={headerStyles.navBar}>
          <span className={headerStyles.headerTitle}>WeatherWise</span>
          <span className={headerStyles.headerIcon}>{headerIcon}</span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
