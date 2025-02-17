import { useState } from "react";
import classes from "./NewCategoryForm.module.css";

interface NewCategoryFormProps {
  onAddCategory: (category: string) => void;
}

function NewCategoryForm({ onAddCategory }: NewCategoryFormProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  function handleAddCategory() {
    if (newCategory.trim() === "") {
      setIsAdding(false);
      return;
    }

    onAddCategory(newCategory);
    setNewCategory("");
    setIsAdding(false);
  }

  return (
    <div className={classes.newListContainer}>
      {isAdding ? (
        <div className={classes.inputWrapper}>
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="New category"
            className={classes.newListInput}
            autoFocus
          />
          <button className={classes.confirmButton} onClick={handleAddCategory}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </button>

          <button className={classes.cancelButton} onClick={() => setIsAdding(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

        </div>
      ) : (
        <button className={classes.newListButton} onClick={() => setIsAdding(true)}>
          <i className="fas fa-plus-circle"></i> New List
        </button>
      )}
    </div>
  );
}

export default NewCategoryForm;