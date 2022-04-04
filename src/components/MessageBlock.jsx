import classNames from "classnames";
import { useMessageBlockContext } from "./ThemeProvider"
import {ReactComponent as ChatBy} from '../static/img/icons/power.svg'

//this component is just a stub, because I cant make real functionality of it without database
export const MessageBlock = () => {
  const {isMessageBlockActive, toggleMessageBlockActive} = useMessageBlockContext();

  return (
    <div
      className={classNames(
      "message-block",
      {"message-block--active": isMessageBlockActive}
      )}
    >
      {!isMessageBlockActive ?
        <div
          onClick={toggleMessageBlockActive}
          className="message-block__header"
        >
          Live Chat: wr're Online!
        </div>
        :
        <>
          <div className="message-block__active-header">
            <img
              src={require('../static/img/buttons/hamburger-icon.png')}
              alt="menu"
              className="message-block__header-button"
            />
            <img
              onClick={toggleMessageBlockActive}
              alt="close"
              src={require('../static/img/buttons/close-button.png')}
              className="message-block__header-button"
            />
          </div>
          <div className="message-block__description">
          We are online and ready to chat with you now. Type something to start a live chat.
          </div>
          <div className="message-block__messages">
            
          </div>
          <div className="message-block__chat-by">
            Chat <ChatBy /> by talk.io
          </div>
          
          <input
            placeholder="Type here and press enter.."
            type="text"
            className="message-block__input"
          />
        </>
      }
    </div>
  )
}