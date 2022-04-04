import { usePopUpVideo } from "./ThemeProvider"

export const Banner = () => {
  const {togglePopUpVideoActive} = usePopUpVideo()
  return (
    <div className="banner">
      <img src={require("../static/img/bg-img.png")} alt="" className="banner__bg-img" />
      <div className="banner__content">
        <div className="banner__title">Mobile App</div>
        <div className="banner__description">
          for your Online Radio Station
        </div>
        <div className="banner__buttons-container">
          <div className="banner__buttons-container-element">
            <div className="button button--big">Create your app</div>
          </div>
          <div onClick={togglePopUpVideoActive} className="banner__buttons-container-element">
            <div className="button button--big button--red">Watch app video</div>
          </div>
        </div>
      </div>
    </div>
  )
}