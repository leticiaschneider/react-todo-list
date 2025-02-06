interface SidebarItemProps {
    icon: string;
    label: string;
    onUpdateTitle: (newTitle: string) => void;
}

function SidebarItem({ icon, label, onUpdateTitle }: SidebarItemProps) {
    const handleClick = () => {
        onUpdateTitle(label);
    };

    return (
        <li onClick={handleClick}>
            <i className={`fas ${icon}`}></i> {label}
        </li>
    );
}

export default SidebarItem  