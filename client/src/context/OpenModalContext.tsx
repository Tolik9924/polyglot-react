import React, { 
    createContext, 
    useState, 
    Dispatch, 
    SetStateAction 
} from 'react';

interface IOpenModalContext {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const OpenModalContext = createContext<IOpenModalContext>({
    isOpen: false,
    setIsOpen: () => {},
});

const OpenModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <OpenModalContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </OpenModalContext.Provider>
    );
};

export { OpenModalContext, OpenModalProvider };