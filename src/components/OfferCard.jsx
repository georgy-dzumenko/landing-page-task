import classNames from "classnames"
import { useTheme } from "./ThemeProvider";

export const OfferCard = ({title, price, children, big=false, system}) => {
  const darkTheme = useTheme();

  return (
    <div className={classNames("offer-cards__card", {"offer-cards__card--big": big, "offer-cards__card--dark-theme": darkTheme})}>
      <div className={classNames("offer-cards__card-title", {"offer-cards__card-title--dark-theme": darkTheme})}>
        {title}
      </div>
      <div className={classNames("offer-cards__price", {"offer-cards__price--dark-theme": darkTheme})}>
        {price}
      </div>
      <div className="offer-cards__card-details">
        {children}
      </div>
      <div
        className={classNames(
          "offer-cards__card-system",
          `offer-cards__card-system--${system}`,
          {
            "offer-cards__card-system--big": big,
            "offer-cards__card-system--dark-theme": darkTheme
          }
        )}
      />
      <div className="button offer-cards__button">Get now</div>
    </div>
  )
}