import React, { 
  createContext, 
  useState, 
  Dispatch, 
  SetStateAction 
} from 'react';
import { ThemeLocalStorage } from '../common_utils/localStorage/ThemeLocalStorage.tsx';

interface IChangeThemeContext {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

const ChangeThemeContext = createContext<IChangeThemeContext>({
  theme: '',
  setTheme: () => {},
});

const ChangeThemeProvider = ({ children }) => {
  let themeLocalStorage = new ThemeLocalStorage();

  const [theme, setTheme] = useState(() => {
		const initialTheme = themeLocalStorage.getItem("theme");
		return initialTheme ? initialTheme : "light";
	});

  return (
      <ChangeThemeContext.Provider value={{ theme, setTheme }}>
          {children}
      </ChangeThemeContext.Provider>
  );
};

export { ChangeThemeContext, ChangeThemeProvider };