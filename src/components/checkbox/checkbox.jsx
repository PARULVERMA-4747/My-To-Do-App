import * as React from 'react';
import './checkbox.scss';

/**
 * @param {{
 *   label: string,
 *   checked: boolean,
 *   onClick: () => void,
 *   onDelete: () => void
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
