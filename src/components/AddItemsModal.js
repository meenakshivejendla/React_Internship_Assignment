import { useState } from "react";
import { ITEMS } from "../data/items";
import "../styles/AddItemsModal.css";

function AddItemsModal() {
  const [activeTab, setActiveTab] = useState("fruits");

  const [selected, setSelected] = useState({
    fruits: [],
    vegetables: [],
  });

  const [search, setSearch] = useState("");

  const toggleItem = (category, id) => {
    setSelected(prev => {
      const exists = prev[category].includes(id);
      return {
        ...prev,
        [category]: exists
          ? prev[category].filter(x => x !== id)
          : [...prev[category], id],
      };
    });
  };

  const filteredItems = ITEMS[activeTab].filter(item =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  const totalSelected =
    selected.fruits.length + selected.vegetables.length;

  return (
    <div className="modal">
      {/* Header */}
      <div className="header">
        <h3>Add Items</h3>
        <span className="close">✕</span>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "vegetables" ? "tab active" : "tab"}
          onClick={() => {
            setActiveTab("vegetables");
            setSearch("");
          }}
        >
          Vegetables ({selected.vegetables.length})
        </button>

        <button
          className={activeTab === "fruits" ? "tab active" : "tab"}
          onClick={() => {
            setActiveTab("fruits");
            setSearch("");
          }}
        >
          Fruits ({selected.fruits.length})
        </button>
      </div>

      {/* Content */}
      <div className="content">
        <h4>
          Select {activeTab === "fruits" ? "Fruits" : "Vegetables"}
        </h4>

        <input
          className="search"
          type="text"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <div className="list">
          {filteredItems.length === 0 && (
            <p className="empty">No items found</p>
          )}

          {filteredItems.map(item => (
            <label key={item.id} className="item">
              <input
                type="checkbox"
                checked={selected[activeTab].includes(item.id)}
                onChange={() => toggleItem(activeTab, item.id)}
              />
              {item.label}
            </label>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <button className="cancel">Cancel</button>
        <button
          className="save"
          disabled={totalSelected === 0}
          onClick={() => console.log(selected)}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddItemsModal;
