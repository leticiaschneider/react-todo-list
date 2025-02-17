import { useState } from "react";
import SidebarSection from "./SidebarSection";
import NewCategoryForm from "./NewCategoryForm";
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

  const [listItems, setListItems] = useState([
    { icon: "fa-list", label: "Personal" },
    { icon: "fa-briefcase", label: "Work" },
    { icon: "fa-shopping-cart", label: "Shopping" },
  ]);

  function handleAddCategory(category: string) {
    setListItems([...listItems, { icon: "fa-folder", label: category }]);
  }

  return (
    <div className={classes.sidebar}>
      <SidebarSection title="Listly" items={navigationItems} onUpdateTitle={onUpdateTitle} />
      <SidebarSection title="My Lists" items={listItems} onUpdateTitle={onUpdateTitle} />
      <hr />
      <NewCategoryForm onAddCategory={handleAddCategory} />
    </div>
  );
}

export default Sidebar;
