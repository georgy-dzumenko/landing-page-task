import {ReactComponent as Home} from '../static/img/home.svg';
import {ReactComponent as FAQ} from '../static/img/faq.svg';
import {ReactComponent as Chat} from '../static/img/message.svg';
import {ReactComponent as Directory} from '../static/img/directory.svg';
import {ReactComponent as Order} from '../static/img/cart.svg';
import { useTheme } from './ThemeProvider';
import classNames from 'classnames';


export const MobileNavigation = () => {
  const darkTheme = useTheme();

  return (
    <div className={classNames("mobile-navigation", {"mobile-navigation--dark-theme": darkTheme})}>
      <a href="/" className="mobile-navigation__link">
        <Home className="mobile-navigation__link-icon"/>
        <div className="mobile-navigation__link-text">
          Home
        </div>
      </a>
      <a href="/order" className="mobile-navigation__link">
        <Order className="mobile-navigation__link-icon"/>
        <div className="mobile-navigation__link-text">
          Order
        </div>
      </a>
      <a href="/directory" className="mobile-navigation__link">
        <Directory className="mobile-navigation__link-icon" />
        <div className="mobile-navigation__link-text">
          Directory
        </div>
      </a>
      <a href="/faq" className="mobile-navigation__link">
        <FAQ className="mobile-navigation__link-icon"/>
        <div className="mobile-navigation__link-text">
          FAQ
        </div>
      </a>
      <a href="/contact" className="mobile-navigation__link">
        <Chat className="mobile-navigation__link-icon"/>
        <div className="mobile-navigation__link-text">
          Contact
        </div>
      </a>
    </div>
  )
}