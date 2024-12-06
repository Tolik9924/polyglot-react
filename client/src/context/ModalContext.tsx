import React, { 
    createContext, 
    useState, 
    Dispatch, 
    SetStateAction 
} from 'react';

interface IModalContext {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalContext = createContext<IModalContext>({
    isOpen: false,
    setIsOpen: () => {},
});

const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </ModalContext.Provider>
    );
};

export { ModalContext, ModalProvider };