import React, { 
  createContext, 
  useState, 
  Dispatch, 
  SetStateAction 
} from 'react';

interface ILoginContext {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const LoginContext = createContext<ILoginContext>({
  isLogin: false,
  setIsLogin: () => {},
});

const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
      <LoginContext.Provider value={{ isLogin, setIsLogin }}>
          {children}
      </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };