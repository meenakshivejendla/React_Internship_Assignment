React Internship Assignment – Add Items Modal

This project implements a reusable React modal component that allows users to select items from two categories: Fruits and Vegetables.
The main focus of this assignment is code structure, state management, and clean component design, rather than heavy UI styling.

📌 Problem Overview

The goal is to build a modal that:

Displays two categories (Fruits & Vegetables)

Allows selecting items using checkboxes

Persists selections while switching tabs

Supports case insensitive search

Returns selected items on save

No backend or external state management libraries are used.

🧠 Approach & Design Decisions
1. Component Based Design

The core logic is encapsulated inside a single reusable component: AddItemsModal

The UI is logically divided into:

Header (title, tabs, close icon)

Content (search + item list)

Footer (Cancel and Save actions)

This makes the component easy to understand and reuse.

2. State Management

React functional components with useState are used

All state is owned by the AddItemsModal component to maintain a single source of truth

State includes:

activeTab → tracks current category

selected → stores selected item IDs separately for fruits and vegetables

search → search input value

Example state structure:

{
  fruits: [],
  vegetables: []
}


This ensures:

Independent handling of categories

Selection persistence across tab switches

No redundant or duplicated state

3. Data Handling

Static data is kept separate in items.js:

ITEMS = {
  fruits: [{ id, label }],
  vegetables: [{ id, label }]
}


This separation improves readability and makes it easy to scale or replace the data source later (e.g., API).

4. Search & Filtering

Search is caseinsensitive

Filtering applies only to the currently active category

The original data is never mutated

5. UX Considerations

Selected item count updates instantly on tabs

Save button is disabled when no items are selected

Item list is scrollable

Selections persist while switching tabs

📁 Project Structure
src/
│
├── components/
│   └── AddItemsModal.js      # Main modal component
│
├── data/
│   └── items.js              # Fruits & vegetables data
│
├── styles/
│   └── AddItemsModal.css     # Component specific styles
│
├── App.js                    # Root component
├── index.js                  # React entry point
├── index.css                 # Global styles


This structure ensures clear separation of concerns and maintainable code.

▶️ How to Run the Project

Clone the repository:

git clone https://github.com/meenakshivejendla/React_Internship_Assignment.git


Navigate into the project folder:

cd React_Internship_Assignment


Install dependencies:

npm install


Start the development server:

npm start


Open the browser at:

http://localhost:3000

💾 Save Action Output

Clicking the Save button logs the selected items to the browser console in the following format:

{
  fruits: [1, 3],
  vegetables: [101, 104]
}


(No backend is used, as per assignment constraints.)

✅ Constraints Followed

React functional components only

No Redux or external state libraries

No backend

Clean, readable, and modular code

👩‍💻 Author

Meenakshi
React Internship Assignment
