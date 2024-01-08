
import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './component/ThemeBtn';
import Card from './component/Card';


function App() {
  

  const [themeMode, setThemeMode] = useState('light');

  //define the method as exact same name and it will automatically defines the function in themeProvider

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }


  useEffect(() => {

    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
    
  }, [themeMode])


  return (
    
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              
              <ThemeBtn />
            </div>

          <div className="w-full max-w-sm mx-auto">

            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
