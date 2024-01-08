//different way to create context

import { createContext, useContext } from "react";

//whenever someone will call the context you will get the themeMode and these 2 methods
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
})

//export provider from the same file
export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
  return useContext(ThemeContext)
}