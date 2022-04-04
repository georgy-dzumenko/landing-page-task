import classNames from "classnames"
import { useTheme } from "./ThemeProvider";

export const AdditionalFeatureCard = ({title, children, price, priceDesc}) => {
  const darkTheme = useTheme();

  return (
    <div className="additional-feature-cards__card-container">
      <div className={classNames("additional-feature-cards__card", {"additional-feature-cards__card--dark-theme": darkTheme})}>
        <div className="additional-feature-cards__card-title">
          {title}
        </div>
        <hr className={classNames("hr", {"hr--dark-theme": darkTheme})} />
        <div className={classNames("additional-feature-cards__description", {"additional-feature-cards__description--dark-theme": darkTheme})}>
          {children}
        </div>
        <div className="additional-feature-cards__price-block">
          <div className="additional-feature-cards__price">
            €{price}
          </div>
          <div className={classNames("additional-feature-cards__price-desc", {"additional-feature-cards__price-desc--dark-theme": darkTheme})}>
            {priceDesc}
          </div>
        </div>
      </div>
    </div>
  )
}