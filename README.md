# JavaScript DOM and Async Module

## Project Overview

This repository contains practical JavaScript exercises completed as part of the JavaScript DOM and Asynchronous Programming module.

The exercises demonstrate JavaScript functions, DOM manipulation, event handling, callbacks, asynchronous operations, and error handling.

## Project Structure

```text
js-dom-async-module/
│
├── README.md
│
└── tasks/
    ├── todo-interactive/
    │   ├── index.html
    │   ├── style.css
    │   └── script.js
    │
    └── callback-assignment/
        └── fetchDataCallback.js
```

## Completed Assignments

### 1. Interactive To-Do List

**Folder:** `tasks/todo-interactive/`

This exercise demonstrates DOM manipulation and event handling.

Features:
- Displays a list of tasks.
- Allows users to click tasks to mark them as completed.
- Toggles the completed state when a task is clicked.
- Uses CSS to distinguish completed tasks visually.

**Technologies:** HTML, CSS, and JavaScript.

### 2. Callback Function Assignment

**File:** `tasks/callback-assignment/fetchDataCallback.js`

This exercise demonstrates callback functions and asynchronous JavaScript.

Features:
- Implements `fetchDataWithCallback(callback)`.
- Uses `setTimeout()` to simulate a two-second data retrieval process.
- Passes the message `"Data fetched"` to a callback function.
- Uses `try...catch` to handle simulated errors.
- Tests both successful execution and error handling.

**Technologies:** JavaScript, callbacks, `setTimeout()`, and `try...catch`.

## How to Run the Exercises

### Interactive To-Do List

Open `tasks/todo-interactive/index.html` in a web browser.

### Callback Function Assignment

Ensure Node.js is installed. From the project root, run:

```bash
node tasks/callback-assignment/fetchDataCallback.js
```

Expected successful output:

```text
Data fetched
```

## Learning Objectives

Through these exercises, the module develops practical understanding of:

- JavaScript functions and callbacks.
- DOM selection and manipulation.
- Event listeners and user interactions.
- Asynchronous operations using `setTimeout()`.
- Error handling using `try...catch`.
- Project organisation and version control using Git and GitHub.
