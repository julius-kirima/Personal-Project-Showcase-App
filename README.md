# Personal Project Showcase App

## Description
A React Single Page Application that allows a creative agency to showcase its projects, add new projects dynamically, and search existing projects.

## Features
- Display projects with images, titles and descriptions.
- Add new projects without refreshing the page.
- Search projects by title.
- Responsive layout using Bootstrap.

## Technologies
React, JavaScript, HTML, CSS, Bootstrap and Vite.

## Project Structure
```text
src/
├── components/
│   ├── Header.jsx
│   ├── ProjectForm.jsx
│   ├── ProjectList.jsx
│   ├── ProjectCard.jsx
│   └── SearchBar.jsx
├── data.js
├── App.jsx
├── App.css
└── index.css
```

## Rubric Implementation

1. **Component Hierarchy:** `App.jsx` organizes reusable components found in `src/components/`.
2. **State Management:** `App.jsx` uses `useState` to manage projects and search input.
3. **Event Handling:** `ProjectForm.jsx` handles form submission, while `SearchBar.jsx` handles search input changes.
4. **Passing Props:** `App.jsx` passes project data and event handlers to child components. `ProjectList.jsx` passes individual projects to `ProjectCard.jsx`.
5. **Styling and UX:** `App.css`, `index.css` and Bootstrap classes provide layout, styling and responsive design.

## Installation and Setup

```bash
cd YOUR DIRECTORY
npm install
npm run dev
```