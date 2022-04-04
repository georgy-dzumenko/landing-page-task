import classNames from 'classnames';
import { useTheme } from './ThemeProvider';

export const OfferSection = () => {
  const darkTheme = useTheme();

  return (
    <>
      <div className="offer-section">
        <div className="offer-section__description offer-section__description--left-side">
          <div className="offer-section__offer-title">
            Your own Mobile App
          </div>
          <div className="offer-section__offer-description">
            Create your own Mobile App with a customized look and content. Your Social Media and Website will be available in a built-in WebView.
          </div>
        </div>
        <div className="offer-section__img-container">
          <img src={require('../static/img/products/mobileApp.png')} alt="" className="offer-section__img" />
        </div>
      </div>
      <hr className={classNames("hr", {"hr--dark-theme": darkTheme})}/>
      <div className="offer-section">
        <div className="offer-section__img-container">
          <img src={require('../static/img/products/onlineAppCreator.png')} alt="" className="offer-section__img" />
        </div>
        <div className="offer-section__description offer-section__description--right-side">
          <div className="offer-section__offer-title">
            Online App Creator
          </div>
          <div className="offer-section__offer-description">
            Design and Preview your App in the Creator. Absolutely no coding skills required!
          </div>
          <div className="button button--red offer-section__button">open app creator</div>
        </div>
      </div>
    </>
  )
}