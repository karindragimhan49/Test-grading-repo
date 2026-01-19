import React from 'react';
import './ItemList.css';

function ItemList({ items, onEdit, onDelete }) {
  if (items.length === 0) {
    return (
      <div className="item-list">
        <h2>Items List</h2>
        <p className="no-items">No items found. Add your first item above!</p>
      </div>
    );
  }

  return (
    <div className="item-list">
      <h2>Items List ({items.length})</h2>
      <div className="items-container">
        {items.map((item) => (
          <div key={item._id} className="item-card">
            <div className="item-header">
              <h3>{item.name}</h3>
              <span className="item-date">
                {new Date(item.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="item-description">{item.description}</p>
            <div className="item-actions">
              <button
                className="btn btn-edit"
                onClick={() => onEdit(item)}
              >
                Edit
              </button>
              <button
                className="btn btn-delete"
                onClick={() => onDelete(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
