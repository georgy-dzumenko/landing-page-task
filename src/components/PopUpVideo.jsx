import classNames from "classnames";
import { usePopUpVideo } from "./ThemeProvider";

//video which will be displayed if popUpVideoContext value is set to true
export const PopUpVideo = () => {
  const {isPopUpVideoActive, togglePopUpVideoActive} = usePopUpVideo()

  return(
    <>
      {isPopUpVideoActive &&
        <div
          onClick={(event) => {
            event.stopPropagation();
            togglePopUpVideoActive()
          }}
          className={"pop-up-video"}
        >
          <iframe src="https://www.youtube.com/embed/NkfmJ2lPXIc?autoplay=1" allow='autoplay' frameborder="0" className="pop-up-video__video">
          </iframe>
        </div>
      }
    </>
  )
}