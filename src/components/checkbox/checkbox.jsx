import * as React from 'react';
import './checkbox.scss';

/**
 * @param {{
 *   label: string,         // Task name
 *   checked: boolean,      // Whether checkbox is checked
 *   onClick: () => void,   // Called when checkbox is clicked
 *   onDelete: () => void   // Called when delete button is clicked
 * }} props
 */
export const Checkbox = ({
  label,
  checked,
  onClick,
  onDelete,
}) => (
  <div
    className="checkbox"
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={onClick}
  >
    <input type="checkbox" checked={checked} readOnly />
    <span className="checkbox-label">{label}</span>
    <button
      type="button"
      className="checkbox-delete"
      onClick={(e) => {
        e.stopPropagation();
        onDelete();
      }}
    >
      Delete
    </button>
  </div>
);
