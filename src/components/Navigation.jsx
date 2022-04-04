import {ReactComponent as Instagram} from '../static/img/instagram.svg';
import {ReactComponent as Facebook} from '../static/img/facebook.svg';
import {ReactComponent as LinkedIn} from '../static/img/linkedin.svg';
import {ReactComponent as Twitter} from '../static/img/twitter.svg';
import {ReactComponent as YouTube} from '../static/img/youtube.svg';
import {ReactComponent as Phone} from '../static/img/phone.svg';
import {ReactComponent as Message} from '../static/img/message.svg';
import { useMessageBlockContext, useTheme } from './ThemeProvider';

export const Navigation = () => {
  const darkTheme = useTheme();
  const {toggleMessageBlockActive} = useMessageBlockContext()

  return (
    <nav style={darkTheme ? {backgroundColor: 'hsl(199, 100%, 25.2%) '} : {}} className="navigation">
      <div className="navigation__container">
        <div className="navigation__content-block">
          <a href="tel:+18442032278" className="navigation__link">
            <div className="navigation__link-icon">
              <Phone />
            </div>
            +1 (844) 203-2278
          </a>
          <div onClick={toggleMessageBlockActive} className="navigation__link">
            <div className="navigation__link-icon">
              <Message />
            </div>
            Open Chat
          </div>
        </div>
        <div className="navigation__content-block">
          <a href="https://www.facebook.com/freeshoutcast/">
            <Facebook className="navigation__icon"/>
          </a>
          <a href="https://www.youtube.com/user/FastCast4u">
            <YouTube className="navigation__icon"/>
          </a>
          <a href="https://www.linkedin.com/company/fastcast4u">
            <LinkedIn className="navigation__icon"/>
          </a>
          <a href="https://twitter.com/FastCast4u">
            <Twitter className="navigation__icon"/>
          </a>
          <a href="https://www.instagram.com/fastcast4u">
            <Instagram className="navigation__icon"/>
          </a>
        </div>
      </div>

    </nav>
  )
}