React Model

This is a reusable React modal component that allows users to select items from two categories :Fruits and Vegetables.



🎯 Objective

The objective of this assignment is to build a modal component that:

1.Handles multiple categories independently

2.Maintains selection state across tab switches

Demonstrates proper React component design and state ownership

✨ Features

Two category tabs: Fruits and Vegetables

Live count of selected items per category

Active tab highlighting
Case insensitive real time search
Save button logs selected items to the console
Save button disabled when no items are selected
Cancel button closes the modal without saving
Scrollable list of items
Checkbox based selection
Selections persist while switching tabs


🗂️ Project Structure
src/
│
├── components/
│   └── AddItemsModal.js
│
├── data/
│   └── items.js
│
├── styles/
│   └── AddItemsModal.css
│
├── App.js
├── index.js
├── index.css


This structure ensures:

Clear separation of concerns
Maintainable and readable code along with Reusable components

🧠 State Management Approach

React functional components with useState

A single source of truth inside AddItemsModal

Independent state handling for Fruits and Vegetables

No redundant or duplicated state

Example state structure:

{
  fruits: [],
  vegetables: []
}

📦 Data Structure
ITEMS = {
  fruits: [{ id, label }],
  vegetables: [{ id, label }]
}


This structure allows easy scalability and clean rendering logic.

🚀 How to Run the Project

Clone the repository

Install dependencies:

npm install


Start the development server:

npm start


🧪 Save Action

Clicking the Save button logs selected items to the browser console:

{
  fruits: [1, 3, 5],
  vegetables: [101, 104]
}




⚙️ Constraints Followed

React functional components only

No Redux or external state libraries

No backend

Clean, readable, and modular code

Save button disabled when no items are selected

UI structured for easy future enhancements (debounced search, select all, etc.)

👩‍💻 Author

Meenakshi
React Internship Assignment – BotGauge