import React, { useContext, useState } from "react"

//context to get dark theme boolean value
// (if it's true the component uses "--dark-theme" class modificator)
const ThemeContext = React.createContext();

// context to toggle dark theme value
const ThemeUpdateContext = React.createContext();

// context to remove of display pop up video
const PopUpVideoContext = React.createContext();

// context to controll message block display
const MessageContext = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const usePopUpVideo = () => {
  return useContext(PopUpVideoContext)
}

export const useUpdateTheme = () => {
  return useContext(ThemeUpdateContext)
}

export const useMessageBlockContext = () => {
  return useContext(MessageContext);
}

export const ThemeProvider = ({children}) => {
  //the initial value of dark theme is stored in locasStorage, if it isn't, the value is false
  const [darkTheme, setDarkTheme] = useState(JSON.parse(localStorage.getItem('theme')) || false);
  const [isPopUpVideoActive, setPopUpVideoActive] = useState('');
  const [isMessageBlockActive, setMessageBlockActive] = useState(false);

  // func to toggle theme context value
  const toggleTheme = () => {
    setDarkTheme(prev => !prev)
    localStorage.setItem('theme', !darkTheme)
  }

  // func to hide/display pop up video value
  const togglePopUpVideoActive = () => {
    setPopUpVideoActive(prev => !prev)
  }

  // func to hide/display message block
  const toggleMessageBlockActive = () => {
    setMessageBlockActive(prev => !prev)
  }

  return (
    <ThemeContext.Provider value={darkTheme} >
      <ThemeUpdateContext.Provider value={toggleTheme} >
        <PopUpVideoContext.Provider value={{isPopUpVideoActive, togglePopUpVideoActive}}>
          <MessageContext.Provider value={{isMessageBlockActive, toggleMessageBlockActive}}>
            {children}
          </MessageContext.Provider>
        </PopUpVideoContext.Provider>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>    
  )
}