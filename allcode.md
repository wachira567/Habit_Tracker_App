# Habit Tracker Project Code

This file contains all the code for the Habit Tracker project, organized by file path. Each section includes the file name and its contents.

## Project Structure

```
habit-tracker/
├── .gitignore
├── db.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
├── public/
│   └── vite.svg
└── src/
    ├── api.js
    ├── App.css
    ├── App.jsx
    ├── firebase.jsx
    ├── index.css
    ├── main.jsx
    ├── assets/
    │   └── react.svg
    └── components/
        ├── AddHabitForm.jsx
        ├── Chat.jsx
        ├── Clock.jsx
        ├── DayContainer.jsx
        ├── HabitItem.jsx
        ├── HabitList.jsx
        ├── Navbar.jsx
        ├── Report.jsx
        ├── SharedProgress.jsx
        └── WeekView.jsx
```

## .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

## db.json

```json
{
  "habits": [
    {
      "id": "1760993334220",
      "name": "ben",
      "userId": "user_123",
      "week": [
        {
          "date": "2025-10-20",
          "status": "notDone"
        },
        {
          "date": "2025-10-21",
          "status": "notDone"
        },
        {
          "date": "2025-10-22",
          "status": "notDone"
        },
        {
          "date": "2025-10-23",
          "status": "notDone"
        },
        {
          "date": "2025-10-24",
          "status": "notDone"
        },
        {
          "date": "2025-10-25",
          "status": "notDone"
        },
        {
          "date": "2025-10-26",
          "status": "notDone"
        }
      ]
    },
    {
      "id": "1760993433437",
      "name": "nn",
      "userId": "user_123",
      "week": [
        {
          "date": "2025-10-20",
          "status": "done"
        },
        {
          "date": "2025-10-21",
          "status": "notDone"
        },
        {
          "date": "2025-10-22",
          "status": "notDone"
        },
        {
          "date": "2025-10-23",
          "status": "notDone"
        },
        {
          "date": "2025-10-24",
          "status": "notDone"
        },
        {
          "date": "2025-10-25",
          "status": "notDone"
        },
        {
          "date": "2025-10-26",
          "status": "notDone"
        }
      ]
    },
    {
      "id": "1760993644594",
      "name": "nn",
      "userId": "user_456",
      "week": [
        {
          "date": "2025-10-20",
          "status": "notDone"
        },
        {
          "date": "2025-10-21",
          "status": "notDone"
        },
        {
          "date": "2025-10-22",
          "status": "notDone"
        },
        {
          "date": "2025-10-23",
          "status": "notDone"
        },
        {
          "date": "2025-10-24",
          "status": "notDone"
        },
        {
          "date": "2025-10-25",
          "status": "notDone"
        },
        {
          "date": "2025-10-26",
          "status": "notDone"
        }
      ]
    },
    {
      "id": "1760994151271",
      "name": "jh",
      "userId": "user_456",
      "week": [
        {
          "date": "2025-10-20",
          "status": "notDone"
        },
        {
          "date": "2025-10-21",
          "status": "notDone"
        },
        {
          "date": "2025-10-22",
          "status": "notDone"
        },
        {
          "date": "2025-10-23",
          "status": "notDone"
        },
        {
          "date": "2025-10-24",
          "status": "notDone"
        },
        {
          "date": "2025-10-25",
          "status": "notDone"
        },
        {
          "date": "2025-10-26",
          "status": "notDone"
        }
      ]
    },
    {
      "id": "1760994773049",
      "name": "ww",
      "userId": "user_789",
      "week": [
        {
          "date": "2025-10-20",
          "status": "done"
        },
        {
          "date": "2025-10-21",
          "status": "notDone"
        },
        {
          "date": "2025-10-22",
          "status": "notDone"
        },
        {
          "date": "2025-10-23",
          "status": "notDone"
        },
        {
          "date": "2025-10-24",
          "status": "notDone"
        },
        {
          "date": "2025-10-25",
          "status": "notDone"
        },
        {
          "date": "2025-10-26",
          "status": "notDone"
        }
      ]
    },
    {
      "id": "1761000499723",
      "name": "Dancing",
      "week": [
        {
          "date": "2025-10-20",
          "status": "done"
        },
        {
          "date": "2025-10-21",
          "status": "done"
        },
        {
          "date": "2025-10-22",
          "status": "notDone"
        },
        {
          "date": "2025-10-23",
          "status": "notDone"
        },
        {
          "date": "2025-10-24",
          "status": "notDone"
        },
        {
          "date": "2025-10-25",
          "status": "notDone"
        },
        {
          "date": "2025-10-26",
          "status": "notDone"
        }
      ],
      "userId": "user_34LkvJ0wM68lMWLTYqpsfOCL4yn"
    },
    {
      "id": "1761297921164",
      "name": "reading",
      "week": [
        {
          "date": "2025-10-24",
          "status": "done"
        },
        {
          "date": "2025-10-25",
          "status": "notDone"
        },
        {
          "date": "2025-10-26",
          "status": "notDone"
        },
        {
          "date": "2025-10-27",
          "status": "notDone"
        },
        {
          "date": "2025-10-28",
          "status": "notDone"
        },
        {
          "date": "2025-10-29",
          "status": "notDone"
        },
        {
          "date": "2025-10-30",
          "status": "notDone"
        }
      ]
    },
    {
      "id": "1761298322145",
      "name": "aa",
      "week": [
        {
          "date": "2025-10-24",
          "status": "done"
        },
        {
          "date": "2025-10-25",
          "status": "notDone"
        },
        {
          "date": "2025-10-26",
          "status": "notDone"
        },
        {
          "date": "2025-10-27",
          "status": "notDone"
        },
        {
          "date": "2025-10-28",
          "status": "notDone"
        },
        {
          "date": "2025-10-29",
          "status": "notDone"
        },
        {
          "date": "2025-10-30",
          "status": "notDone"
        }
      ]
    },
    {
      "id": "1761298574491",
      "name": "gg",
      "week": [
        {
          "date": "2025-10-24",
          "status": "done"
        },
        {
          "date": "2025-10-25",
          "status": "notDone"
        },
        {
          "date": "2025-10-26",
          "status": "notDone"
        },
        {
          "date": "2025-10-27",
          "status": "notDone"
        },
        {
          "date": "2025-10-28",
          "status": "notDone"
        },
        {
          "date": "2025-10-29",
          "status": "notDone"
        },
        {
          "date": "2025-10-30",
          "status": "notDone"
        }
      ]
    },
    {
      "id": "1761299204701",
      "name": "bb",
      "week": [
        {
          "date": "2025-10-24",
          "status": "done"
        },
        {
          "date": "2025-10-25",
          "status": "notDone"
        },
        {
          "date": "2025-10-26",
          "status": "notDone"
        },
        {
          "date": "2025-10-27",
          "status": "notDone"
        },
        {
          "date": "2025-10-28",
          "status": "notDone"
        },
        {
          "date": "2025-10-29",
          "status": "notDone"
        },
        {
          "date": "2025-10-30",
          "status": "notDone"
        }
      ]
    },
    {
      "id": "1761299233035",
      "name": "aa",
      "week": [
        {
          "date": "2025-10-24",
          "status": "notDone"
        },
        {
          "date": "2025-10-25",
          "status": "notDone"
        },
        {
          "date": "2025-10-26",
          "status": "notDone"
        },
        {
          "date": "2025-10-27",
          "status": "notDone"
        },
        {
          "date": "2025-10-28",
          "status": "notDone"
        },
        {
          "date": "2025-10-29",
          "status": "notDone"
        },
        {
          "date": "2025-10-30",
          "status": "notDone"
        }
      ]
    },
    {
      "id": "1761299591289",
      "name": "aa",
      "week": [
        {
          "date": "2025-10-24",
          "status": "done"
        },
        {
          "date": "2025-10-25",
          "status": "notDone"
        },
        {
          "date": "2025-10-26",
          "status": "notDone"
        },
        {
          "date": "2025-10-27",
          "status": "notDone"
        },
        {
          "date": "2025-10-28",
          "status": "notDone"
        },
        {
          "date": "2025-10-29",
          "status": "notDone"
        },
        {
          "date": "2025-10-30",
          "status": "notDone"
        }
      ],
      "userId": "user_34LkCItjljCnHNLDoE4lAdsQTFr"
    },
    {
      "id": "1761301921799",
      "name": "Singing",
      "week": [
        {
          "date": "2025-10-24",
          "status": "done"
        },
        {
          "date": "2025-10-25",
          "status": "notDone"
        },
        {
          "date": "2025-10-26",
          "status": "notDone"
        },
        {
          "date": "2025-10-27",
          "status": "notDone"
        },
        {
          "date": "2025-10-28",
          "status": "notDone"
        },
        {
          "date": "2025-10-29",
          "status": "notDone"
        },
        {
          "date": "2025-10-30",
          "status": "notDone"
        }
      ],
      "userId": "user_34LkvJ0wM68lMWLTYqpsfOCL4yn"
    }
  ],
  "shares": [
    {
      "id": "1761302177885",
      "userId": "user_34LkvJ0wM68lMWLTYqpsfOCL4yn",
      "userName": "VICTOR",
      "habitId": "1761301921799",
      "habitName": "Singing",
      "completion": 14,
      "comment": "2 day streak",
      "createdAt": "2025-10-24T10:36:17.885Z"
    }
  ],
  "upvotes": [
    {
      "id": "1761302333695",
      "shareId": null,
      "userId": "user_34LkvJ0wM68lMWLTYqpsfOCL4yn"
    },
    {
      "id": "1761302335117",
      "shareId": "1761302177885",
      "userId": "user_34LkvJ0wM68lMWLTYqpsfOCL4yn"
    },
    {
      "id": "1761302336685",
      "shareId": null,
      "userId": "user_34LkvJ0wM68lMWLTYqpsfOCL4yn"
    },
    {
      "id": "1761302336685",
      "shareId": null,
      "userId": "user_34LkCItjljCnHNLDoE4lAdsQTFr"
    }
  ]
}
```

## eslint.config.js

```javascript
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
```

## index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Habit Tracker</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## package.json

```json
{
  "name": "habit-tracker",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@clerk/clerk-react": "^5.53.2",
    "axios": "^1.12.2",
    "bootstrap": "^5.3.8",
    "font-awesome": "^4.7.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.9.4"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "vite": "^7.1.7"
  }
}
```

## README.md

```markdown
# Habit Tracker

## Overview

Habit Tracker is a web application designed to help users build and maintain positive habits. It allows users to create habits, track their daily progress over a week, view detailed reports, and share their progress with others. The app includes features like real-time chat for shared progress and a community aspect where users can upvote each other's achievements.

The application is built with a modern web stack, using React for the frontend and a JSON-based backend for data storage. It incorporates user authentication to ensure personalized experiences and secure data handling.

## Features

- **User Authentication**: Secure login and registration using Clerk authentication service.
- **Habit Management**: Create, view, update, and delete personal habits.
- **Weekly Tracking**: Track habit completion for each day of the week with an intuitive interface.
- **Detailed Views**: See a week-by-week breakdown of habit progress.
- **Reports**: Generate statistics and reports on habit completion rates.
- **Shared Progress**: Share your habit progress publicly and view others' achievements.
- **Community Interaction**: Upvote shared progress and engage in real-time chat discussions.
- **Real-Time Chat**: Communicate with other users about shared habits using Firebase-powered chat.
- **Responsive Design**: Works well on desktop and mobile devices with Bootstrap styling.

## Technologies Used

### Frontend

- React: JavaScript library for building user interfaces.
- Vite: Fast build tool and development server.
- React Router: For handling navigation between different pages.
- Clerk: Authentication and user management.
- Bootstrap: CSS framework for responsive design.
- Font Awesome: Icon library for visual elements.
- Axios: HTTP client for API requests.

### Backend

- JSON Server: Simple REST API server for data storage and retrieval.
- Firebase: Real-time database for chat functionality.

### Development Tools

- ESLint: Code linting for maintaining code quality.
- Vite: Development server and build tool.

## Installation

To run this project locally, you need to have Node.js and npm installed on your machine.

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Steps

1. Clone the repository:
```

git clone [Repository URL]
cd habit-tracker

```

2. Install frontend dependencies:
```

npm install

```

3. Set up environment variables:
Create a `.env` file in the root directory and add the following variables:
```

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:4000
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_DATABASE_URL=your_firebase_database_url
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id

```

4. Start the backend server (JSON Server):
```

npx json-server --watch db.json --port 4000

```

5. Start the frontend development server:
```

npm run dev

```

6. Open your browser and navigate to `http://localhost:5173` to view the application.

## Usage

1. **Sign Up/Login**: Create an account or log in using the Clerk authentication.
2. **Add Habits**: Click on "Add Habit" to create a new habit you want to track.
3. **Track Progress**: For each habit, mark days as "Done" or "Not Done" in the week view.
4. **View Reports**: Check your overall progress and statistics in the Report section.
5. **Share Progress**: Share your habit achievements and view others' progress.
6. **Interact**: Upvote shared progress and chat with other users in real-time.

## API Endpoints

The backend provides the following REST API endpoints:

- `GET /habits` - Retrieve all habits
- `POST /habits` - Create a new habit
- `PUT /habits/:id` - Update a specific habit
- `DELETE /habits/:id` - Delete a specific habit
- `GET /shares` - Retrieve all shared progress
- `POST /shares` - Create a new share
- `DELETE /shares/:id` - Delete a specific share
- `GET /upvotes` - Retrieve all upvotes
- `POST /upvotes` - Create a new upvote
- `GET /upvotes?shareId=:id` - Get upvotes for a specific share

## Project Structure

```

habit-tracker/
├── public/
│ └── vite.svg
├── src/
│ ├── components/
│ │ ├── AddHabitForm.jsx
│ │ ├── Chat.jsx
│ │ ├── Clock.jsx
│ │ ├── DayContainer.jsx
│ │ ├── HabitItem.jsx
│ │ ├── HabitList.jsx
│ │ ├── Navbar.jsx
│ │ ├── Report.jsx
│ │ ├── SharedProgress.jsx
│ │ └── WeekView.jsx
│ ├── api.js
│ ├── App.jsx
│ ├── firebase.jsx
│ ├── index.css
│ ├── main.jsx
│ └── assets/
│ └── react.svg
├── db.json
├── package.json
├── vite.config.js
└── README.md

```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Links

- Frontend: [Frontend Link]
- Backend: [Backend Link]
```

## vite.config.js

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
```

## public/vite.svg

```svg
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
```

## src/api.js

```javascript
// API functions for handling habit data, shares, and upvotes with the backend
import axios from "axios";

// Base URL for the API, defaults to localhost if not set in environment
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

// Habit-related API functions
export const fetchHabits = () => axios.get(`${API_URL}/habits`);
export const addHabit = (habitData) =>
  axios.post(`${API_URL}/habits`, habitData);
export const updateHabit = (id, updatedData) =>
  axios.put(`${API_URL}/habits/${id}`, updatedData);
export const deleteHabit = (id) => axios.delete(`${API_URL}/habits/${id}`);

// Share-related API functions for public habit sharing
export const fetchShares = () => axios.get(`${API_URL}/shares`);
export const addShare = (shareData) =>
  axios.post(`${API_URL}/shares`, shareData);
export const deleteShare = (id) => axios.delete(`${API_URL}/shares/${id}`);

// Upvote-related API functions for liking shared habits
export const fetchUpvotes = () => axios.get(`${API_URL}/upvotes`);
export const addUpvote = (upvoteData) =>
  axios.post(`${API_URL}/upvotes`, upvoteData);
export const getUpvotesForShare = (shareId) =>
  axios.get(`${API_URL}/upvotes?shareId=${shareId}`);
```

## src/App.css

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
```

## src/App.jsx

```jsx
// Main App component handling routing, authentication, and state management for the habit tracker
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useUser, SignIn } from "@clerk/clerk-react";
import Navbar from "./components/Navbar";
import HabitList from "./components/HabitList";
import WeekView from "./components/WeekView";
import AddHabitForm from "./components/AddHabitForm";
import Report from "./components/Report"; // Import Report component
import Clock from "./components/Clock";
import { fetchHabits } from "./api";
import SharedProgress from "./components/SharedProgress";

function App() {
  // Get user authentication status and user data from Clerk
  const { isSignedIn, user } = useUser();
  // State to store the user's habits
  const [habits, setHabits] = useState([]);
  // State to force re-fetching habits periodically
  const [forceUpdate, setForceUpdate] = useState(0);

  // Fetch habits when user signs in or when forceUpdate changes
  useEffect(() => {
    if (isSignedIn && user) {
      fetchHabits()
        .then((response) => {
          // Filter habits to only show the current user's habits
          const userHabits = response.data.filter(
            (habit) => habit.userId === user.id
          );
          setHabits(userHabits);
        })
        .catch((error) => console.error("Error fetching habits:", error));
    } else {
      // Clear habits if user is not signed in
      setHabits([]);
    }
  }, [isSignedIn, user, forceUpdate]);

  // Set up an interval to auto-refresh habits every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setForceUpdate((prev) => prev + 1);
    }, 60000); // Auto-update every 60 seconds
    return () => clearInterval(interval);
  }, []);

  // Handler to add a new habit to the state
  const handleAddHabit = (newHabit) => {
    setHabits([...habits, newHabit]);
  };

  // Handler to update an existing habit in the state
  const handleUpdateHabit = (updatedHabit) => {
    setHabits(habits.map((h) => (h.id === updatedHabit.id ? updatedHabit : h)));
  };

  // Handler to delete a habit from the state
  const handleDeleteHabit = (id) => {
    setHabits(habits.filter((h) => h.id !== id));
  };

  // If user is not signed in, show the sign-in page
  if (!isSignedIn) {
    return (
      <div
        className="container mt-4 text-center"
        style={{
          backgroundColor: "#1c1e29",
          color: "#fff",
          minHeight: "100vh",
        }}
      >
        <h1>Welcome to Habit Tracker</h1>
        <p>Please sign in to access your dashboard.</p>
        <SignIn />
      </div>
    );
  }

  // Main app layout with routing
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home page route */}
        <Route
          path="/"
          element={
            <div className="container mt-4">
              <h2>Welcome, {user.firstName}!</h2>
            </div>
          }
        />
        {/* Another home route for consistency */}
        <Route
          path="/home"
          element={
            <div className="container mt-4">
              <h2>Welcome, {user.firstName}!</h2>
            </div>
          }
        />
        {/* Habits list page */}
        <Route
          path="/habits"
          element={<HabitList habits={habits} onDelete={handleDeleteHabit} />}
        />
        {/* Add new habit page */}
        <Route
          path="/add-habit"
          element={
            <AddHabitForm onAddHabit={handleAddHabit} userId={user.id} />
          }
        />
        {/* Week view for a specific habit */}
        <Route
          path="/week-view/:id"
          element={
            <WeekView habits={habits} onUpdateHabit={handleUpdateHabit} />
          }
        />
        {/* Report page */}
        <Route path="/report" element={<Report />} />
        {/* Shared progress page */}
        <Route path="/shared-progress/:id" element={<SharedProgress />} />
      </Routes>
      <Clock />
    </BrowserRouter>
  );
}

export default App;
```

## src/firebase.jsx

```jsx
// Firebase configuration and initialization for real-time database
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration object with environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

// Initialize Firebase app with the config
const app = initializeApp(firebaseConfig);
// Export the database instance for use in other parts of the app
export const database = getDatabase(app);
```

## src/index.css

```css
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
```

## src/main.jsx

```jsx
// Main entry point for the React application, setting up Clerk authentication and rendering the App component
import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS for styling
import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome icons

// Get the Clerk publishable key from environment variables
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Make sure the key is available, otherwise throw an error
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

// Create the root element and render the app with Clerk provider for authentication
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publish
```
