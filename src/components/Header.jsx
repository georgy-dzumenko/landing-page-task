import {ReactComponent as ThemeLight} from '../static/img/theme-light.svg';
import {ReactComponent as ThemeDark} from '../static/img/theme-dark.svg'
import { useTheme, useUpdateTheme } from './ThemeProvider';
import classNames from 'classnames';

export const Header = () => {
  const toggleTheme = useUpdateTheme();
  const darkTheme = useTheme();

  return (
    <div className={classNames("header", {"header--dark-theme": darkTheme})}>
      <img src={require("../static/img/Title.png")} alt="" className="header__title-img" />
      <div onClick={() => toggleTheme()} className="header__theme-toggler">
        {darkTheme ? <ThemeDark/> : <ThemeLight />}
      </div>
      <a href="/login" className="button">login</a>
    </div>
  )
}