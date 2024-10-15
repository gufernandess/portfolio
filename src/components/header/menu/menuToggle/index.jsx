import { List, X } from "@phosphor-icons/react";

const MenuToggle = ({ isOpen, handleMenu }) => {
    return (
        <>
            {isOpen ? (
                <X
                    size={48}
                    weight="bold"
                    onClick={handleMenu}
                    style={{
                        color: "var(--hot-pink)",
                        cursor: "pointer",
                    }}
                />
            ) : (
                <List
                    size={48}
                    weight="bold"
                    onClick={handleMenu}
                    style={{
                        color: "var(--hot-pink)",
                        cursor: "pointer",
                    }}
                />
            )}
        </>
    );
};

export default MenuToggle;
