import SidebarSection from "./SidebarSection";
import classes from "./Sidebar.module.css";

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
    ];

    function handleNewList() {
        console.log("New list button clicked!");
    }

    return (
        <div className={classes.sidebar}>
            <SidebarSection title="Listly" items={navigationItems} onUpdateTitle={onUpdateTitle} />
            <SidebarSection title="My Lists" items={listItems} onUpdateTitle={onUpdateTitle} />
            <hr />
            <button className={classes.newListButton} onClick={handleNewList}>
                <i className="fas fa-plus-circle"></i> New List
            </button>
        </div>
    );
}

export default Sidebar;
