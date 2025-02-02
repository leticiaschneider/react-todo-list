interface SidebarItemProps {
    icon: string;
    label: string;
    updateTitle: (newTitle: string) => void;
}

function SidebarItem({ icon, label, updateTitle }: SidebarItemProps) {
    const handleClick = () => {
        updateTitle(label);
    };

    return (
        <li onClick={handleClick}>
            <i className={`fas ${icon}`}></i> {label}
        </li>
    );
}

export default SidebarItem  