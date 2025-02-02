import SidebarItem from "./SidebarItem";

interface SidebarSectionProps {
    title: string;
    items: { icon: string; label: string }[];
    updateTitle: (newTitle: string) => void;
}

function SidebarSection({ title, items, updateTitle }: SidebarSectionProps) {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {items.map((item, index) => (
                    <SidebarItem
                        key={index}
                        icon={item.icon}
                        label={item.label}
                        updateTitle={updateTitle}
                    />
                ))}
            </ul>
        </div>
    );
}

export default SidebarSection