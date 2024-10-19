import { createContext, useState, useContext } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [menu, setMenu] = useState("false");

    const toggleMenu = () => {
        setMenu((prevMenu) => (prevMenu === "false" ? "true" : "false"));
    };

    return (
        <MenuContext.Provider value={{ menu, toggleMenu }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    return useContext(MenuContext);
};
