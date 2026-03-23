# React To-Do List App

A modern, responsive To-Do List application built with React, featuring a sleek design, task filtering, and a fully functional Dark Mode powered by Zustand and Tailwind CSS.

## Features

- **Add Tasks**: Quickly add new tasks to your list.
- **Mark as Complete**: Toggle tasks between active and completed states.
- **Delete Tasks**: Remove tasks you no longer need.
- **Task Analytics**: View a summary of active, completed, and total tasks.
- **Dark Mode**: Switch seamlessly between light and dark themes. The preference is remembered across sessions!
- **Data Persistence**: Your tasks and theme preferences are saved locally in your browser.

## Technologies Used

- **React**: Component-based UI development.
- **Tailwind CSS V4**: Utility-first styling for beautiful and responsive design.
- **Zustand**: Lightweight global state management for handling the theme.
- **Vite**: Superfast frontend tooling and development server.
- **Lucide Icons**: Beautiful open-source icons for the UI.

## Screenshots

### Light Mode
![Light Mode](./public/light-mode.png)

### Dark Mode
![Dark Mode](./public/dark-mode.png)

*(Note: Please rename your screenshots to `light-mode.png` and `dark-mode.png` and place them inside the `public/` folder so they appear properly here and on GitHub.)*

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository or download the source code.
2. Navigate into the project directory:
   ```bash
   cd react_basics
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the Vite development server:

```bash
npm run dev
```

Open your browser and navigate to the URL provided in the terminal (usually `http://localhost:5173`).

## Project Structure

- `src/components/`: Contains all the reusable UI components (`InputArea`, `Tasks`, `Cards`, `ThemeToggle`).
- `src/store/`: Contains the Zustand store (`useThemeStore.js`) for global state management.
- `src/App.jsx`: The main application container integrating all components and logic.
- `src/main.jsx`: The React entry point.
