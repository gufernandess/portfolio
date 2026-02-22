import { createContext, useState, useContext, useEffect } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState("false");

  const toggleMenu = () => {
    setMenu((prevMenu) => (prevMenu === "false" ? "true" : "false"));
  };

  useEffect(() => {
    if (menu === "true") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menu]);

  return (
    <MenuContext.Provider value={{ menu, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  return useContext(MenuContext);
};
