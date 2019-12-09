import * as React from 'react';
import {
  createContext,
  useState,
  useEffect,
} from 'react';
import classNames from 'classnames';

const DarkModeContext = createContext<{
  theme: boolean,
  toggleTheme: () => void,
  getDarkThemeClassName: (className: string) => string,
}>({
  theme: false,
  toggleTheme: () => {},
  getDarkThemeClassName: (className: string) => className,
});

const {
  Consumer: DarkModeConsumer,
} = DarkModeContext; 

export const DarkModeProvider = ({
  children,
} : { children: React.ReactNode }) => {

  const toggleTheme = () => {
    setTheme((beforeState) => {
      localStorage.setItem('theme', !beforeState.theme ? 'true' : 'false');
      return {
        ...beforeState,
        theme: !beforeState.theme
      }
    });
  }

  const initState = {
    theme: (
      localStorage.getItem('theme') == null ?
        window != null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches :
        localStorage.getItem('theme') === 'true'),
    toggleTheme,
  }

  const [theme, setTheme] = useState<{
    theme: boolean,
    toggleTheme: () => void
  }>(initState);

  useEffect(() => {
    if (localStorage.getItem('theme') == null) {
      setTheme((beforeState) => {
        return {
          ...beforeState,
          theme: window != null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
        }
      });
      localStorage.setItem('theme', theme.theme ? 'true' : 'false');
    } else {
      setTheme((beforeState) => {
        return {
          ...beforeState,
          theme: localStorage.getItem('theme') === 'true',
        }
      });
    }
  }, [])

  const getDarkThemeClassName = (className: string): string => {
    return classNames(
      className,
      theme.theme && `${className}--dark`,
      'dark-theme',
    )
  };

  return (
    <DarkModeContext.Provider value={{
      ...theme,
      getDarkThemeClassName,
    }}>
      { children }
    </DarkModeContext.Provider>
  )

}

export { DarkModeConsumer };

export default DarkModeContext;

