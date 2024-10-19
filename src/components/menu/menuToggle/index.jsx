import { List, X } from "@phosphor-icons/react";

const MenuToggle = ({ open, handle }) => {
    return (
        <>
            {open === 'true' ? (
                <X
                    size={48}
                    weight="bold"
                    onClick={handle}
                    style={{
                        color: "var(--hot-pink)",
                        cursor: "pointer",
                    }}
                />
            ) : (
                <List
                    size={48}
                    weight="bold"
                    onClick={handle}
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
