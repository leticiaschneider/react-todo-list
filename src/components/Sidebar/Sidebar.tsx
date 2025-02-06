import SidebarSection from './SidebarSection'
import classses from './Sidebar.module.css'

interface SidebarProps {
    onUpdateTitle: (newTitle: string) => void;
}

function Sidebar({ onUpdateTitle }: SidebarProps) {
    const navigationItems = [
        { icon: "fa-calendar-day", label: "Today" },
        { icon: "fa-calendar-week", label: "Scheduled" },
        { icon: "fa-inbox", label: "All" },
        { icon: "fa-flag", label: "Flagged" },
    ];

    const listItems = [
        { icon: "fa-list", label: "Personal" },
        { icon: "fa-briefcase", label: "Work" },
        { icon: "fa-shopping-cart", label: "Shopping" },
        { icon: "fa-plus-circle", label: "New List" },
    ];

    return (
        <div className={classses.sidebar}>
            <SidebarSection title="Listly" items={navigationItems} onUpdateTitle={onUpdateTitle} />
            <SidebarSection title="My Lists" items={listItems} onUpdateTitle={onUpdateTitle} />
        </div>
    );
}

export default Sidebar