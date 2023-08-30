import footerStyles from '../footer/Footer.module.css';

function Footer() {
  return (
    <div className={footerStyles.footerContainer}>
      <footer>
        <span className={footerStyles.footerCopyright}>© WeatherWise</span>
        <span className={footerStyles.footerDate}>2023</span>
      </footer>
    </div>
  );
}

export default Footer;
