import React, { 
  createContext, 
  useState, 
  Dispatch, 
  SetStateAction 
} from 'react';

interface IChangeThemeContext {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

const ChangeThemeContext = createContext<IChangeThemeContext>({
  theme: '',
  setTheme: () => {},
});

const ChangeThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
		const initialTheme = localStorage.getItem("theme");
		return initialTheme ? initialTheme : "light";
	});

  return (
      <ChangeThemeContext.Provider value={{ theme, setTheme }}>
          {children}
      </ChangeThemeContext.Provider>
  );
};

export { ChangeThemeContext, ChangeThemeProvider };