import React, { useState, useEffect } from 'react';
import './App.css';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import { itemService } from './services/api';

function App() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all items on component mount
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await itemService.getAllItems();
      setItems(response.data);
    } catch (err) {
      setError('Failed to fetch items. Make sure the backend server is running.');
      console.error('Error fetching items:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateOrUpdate = async (formData) => {
    try {
      if (editingItem) {
        // Update existing item
        await itemService.updateItem(editingItem._id, formData);
        setEditingItem(null);
      } else {
        // Create new item
        await itemService.createItem(formData);
      }
      fetchItems();
    } catch (err) {
      setError('Failed to save item. Please try again.');
      console.error('Error saving item:', err);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await itemService.deleteItem(id);
        fetchItems();
      } catch (err) {
        setError('Failed to delete item. Please try again.');
        console.error('Error deleting item:', err);
      }
    }
  };

  const handleCancel = () => {
    setEditingItem(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>CRUD Application</h1>
        <p>React + Node.js + MongoDB</p>
      </header>
      <main className="App-main">
        {error && <div className="error-message">{error}</div>}
        <ItemForm
          onSubmit={handleCreateOrUpdate}
          editingItem={editingItem}
          onCancel={handleCancel}
        />
        {loading ? (
          <div className="loading">Loading items...</div>
        ) : (
          <ItemList
            items={items}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </main>
    </div>
  );
}

export default App;
