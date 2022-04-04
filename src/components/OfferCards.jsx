import { OfferCard } from "./OfferCard";
import { useTheme } from "./ThemeProvider"

const systems = {
  android: 'android',
  IPAndAndroid: 'IPAndAndroid',
  IP: "IP",
}

export const OfferCards = () => {
  const darkTheme = useTheme();

  const style = {borderColor: darkTheme ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)"}
  return (
    <div className="offer-cards">
      <div className="offer-cards__card-container">
        <OfferCard title={"Android App"} price={149} system={systems.android}>
          <div className="offer-cards__details-row">
            Android Smartphones
          </div>
          <div className="offer-cards__details-row">
            Android Tablets
          </div>
        </OfferCard>
      </div>

      <div className="offer-cards__card-container">
        <OfferCard big title={"Android & iOS App"} price={199} system={systems.IPAndAndroid}>
          <div className="offer-cards__details-row">
            Android Smartphones & Tablets
          </div>
          <div className="offer-cards__details-row">
            Apple iPhone & iPad
          </div>
        </OfferCard>  
      </div>

      <div className="offer-cards__card-container">
        <OfferCard title={"iOS App"} price={149} system={systems.IP}>
          <div className="offer-cards__details-row">
            Apple iPhone
          </div>
          <div className="offer-cards__details-row">
            Apple iPad
          </div>
        </OfferCard>
      </div>
    </div>
  )
}