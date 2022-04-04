import { useState } from "react"
import {ReactComponent as Chevron} from "../static/img/chevron.svg"
import { useTheme } from "./ThemeProvider";
const classNames = require("classnames");

export const Accordion = ({title, children, opened=false}) => {
  const [active, setActive] = useState(opened);
  const darkTheme = useTheme();

  const toggleActive = () => {
    setActive(prev => !prev);
  }

  return (
    <div className={classNames("accordion", {"accordion--active": active, "accordion--dark-theme": darkTheme})} >
      <div  onClick={toggleActive} className={classNames("accordion__title", {"accordion__title--active": active})}>
        {title}
        <Chevron className={classNames("accordion__chevron", {"accordion__chevron--active": active, "accordion__chevron--dark-theme": darkTheme})} />
      </div>
      <div className={classNames(["accordion__content-container", {"accordion__content-container--active": active}])}>
        <div className="accordion__content">
          {children}
        </div>
      </div>
    </div>
  )
}