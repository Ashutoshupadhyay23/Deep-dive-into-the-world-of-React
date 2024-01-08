import { useContext,createContext } from "react";


export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider


//custom hook (we use "use" keyword to make the hook)
// it just returns themeContext using useContext 

export default function useTheme(){
    return useContext(ThemeContext)
}