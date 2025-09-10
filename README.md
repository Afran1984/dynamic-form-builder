# Dynamic No-Code Form Builder

A **dynamic form builder** built with **Next.js** and **React**, allowing users to visually create, reorder, edit, and preview forms based on a JSON schema.  

---

## 🚀 Features

- **Render Form From JSON**  
  Supports input types: `text`, `email`, `date`, `time`, `file`, `select`, `checkbox`, `radio`, and `acceptance`.
  
- **Field Palette (Left Sidebar)**  
  Drag and drop new fields into the form canvas.

- **Builder Canvas (Middle)**  
  - Render fields dynamically.
  - Reorder fields (optional with drag-and-drop).
  - Hover actions: **Settings**, **Delete**, **Duplicate**.

- **Settings Sidebar (Right Sidebar)**  
  Edit selected field's properties:
  - Label, Name, Placeholder
  - Required toggle
  - Options (for select, radio, checkbox)

- **Preview Mode**  
  View the form in read-only mode with validation.

- **Bonus (Optional)**  
  - Persist form data to **LocalStorage**.
  - Display submitted form data in table format.
  - Show success message after submission.

---

## 🛠 Tech Stack

- **Next.js**  
- **React**  
- **Tailwind CSS** for styling  
- **React DnD** (optional) for drag-and-drop functionality  
- **uuid** for generating unique IDs  

---

## 📁 Project Structure

dynamic-form-builder/
├── components/
│ ├── BuilderCanvas.tsx
│ ├── FieldPalette.tsx
│ ├── FieldRenderer.tsx
│ ├── SettingsSidebar.tsx
│ └── Topbar.tsx
├── pages/
│ ├── index.tsx
│ └── _app.tsx
├── utils/
│ ├── schema.ts
│ └── storage.ts
├── public/
├── styles/
├── package.json
└── tailwind.config.js

---

## 📧 Contact / Author
Author: Md. Abdur Razzak Jim

Email: afranrazzak1984@gmail.com

LinkedIn: linkedin.com/in/abdur-razzak-jim

## ⚡ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/Afran1984/dynamic-form-builder.git
cd dynamic-form
npm install
# or
yarn
npm run dev
# or
yarn dev

