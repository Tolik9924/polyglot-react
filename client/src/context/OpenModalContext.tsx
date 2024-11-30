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
    isOpen: true,
    setIsOpen: () => {},
});

const OpenModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <OpenModalContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </OpenModalContext.Provider>
    );
};

export { OpenModalContext, OpenModalProvider };