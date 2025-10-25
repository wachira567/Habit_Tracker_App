# Habit Tracker Project Code Explanation

This document provides a detailed explanation of the Habit Tracker project, covering how each part of the code works, what components are linked to what, and the overall flow from start to finish. It's structured to help understand the project for presentations or deep dives, referencing specific code snippets and files.

## Project Overview

The Habit Tracker is a React-based web application that allows users to create, track, and share habits. Users can:

- Authenticate via Clerk (secure login/signup)
- Add and manage personal habits with weekly tracking
- Track daily progress over a 7-day week with done/not done status
- View detailed reports and statistics on habit completion
- Share progress publicly with comments, upvotes, and real-time chat
- Interact with a community of users through shared progress

The app uses a modern stack: React for the frontend UI, JSON Server for mock backend API, Firebase for real-time chat database, and Clerk for authentication. The app features a dark theme with Bootstrap styling and Font Awesome icons.

## How the App Works: Complete Flow

1. **Authentication**: User signs in via Clerk, which provides user context throughout the app
2. **Dashboard**: User sees personalized greeting and navigation to different sections
3. **Habit Management**: User can view existing habits, add new ones, or delete habits
4. **Progress Tracking**: For each habit, user can view a week grid and mark days as done/not done
5. **Reporting**: User can view completion statistics across all habits
6. **Social Sharing**: User can share habit progress, view others' shares, upvote them, and chat in real-time
7. **Data Persistence**: All data is stored in a JSON file via JSON Server, with real-time chat using Firebase

The app auto-refreshes habit data every minute and prevents marking future days as done.

## Architecture and Technologies

### Frontend (React + Vite)

- **React**: Handles UI components and state management
- **Vite**: Build tool and development server
- **React Router**: Client-side routing
- **Bootstrap**: CSS framework for responsive design
- **Axios**: HTTP client for API calls

### Backend

- **JSON Server**: Simulates REST API using `db.json` as data store
- **Firebase**: Real-time database for chat functionality

### Key Files Structure

```
habit-tracker/
├── .env                    # Environment variables (API keys, URLs)
├── .gitignore             # Git ignore rules
├── db.json                # Mock database with habits, shares, upvotes data
├── eslint.config.js       # ESLint configuration for code linting
├── index.html             # Main HTML template
├── package.json           # Dependencies and scripts
├── README.md              # Project documentation
├── vite.config.js         # Vite build configuration
├── public/
│   └── vite.svg           # Vite logo asset
└── src/
    ├── api.js             # API functions for backend communication
    ├── App.css            # App-specific styles
    ├── App.jsx            # Main app component with routing
    ├── firebase.jsx       # Firebase configuration
    ├── index.css          # Global CSS styles
    ├── main.jsx           # React entry point
    ├── assets/
    │   └── react.svg      # React logo asset
    └── components/        # All UI components
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

### Root Files in src/ Folder

- **main.jsx**: The entry point that initializes React, sets up Clerk authentication provider, and renders the App component. It also imports global CSS files (Bootstrap and Font Awesome).

- **App.jsx**: The root component that manages global state (habits array), handles routing with React Router, fetches data from API, and provides context to child components. It includes authentication checks and auto-refresh functionality.

- **api.js**: Contains all API functions using Axios for CRUD operations on habits, shares, and upvotes. It uses environment variables for the API base URL.

- **firebase.jsx**: Firebase configuration file that initializes the Firebase app and exports the database instance for real-time chat functionality.

- **index.css**: Global CSS styles including dark theme colors, font settings, and body layout.

- **App.css**: Additional app-specific styles (currently minimal, mostly unused).

### Components Folder Structure

All UI components are organized in the `src/components/` folder:

- **Navbar.jsx**: Navigation bar with time-based greeting, navigation links, and user account button
- **HabitList.jsx**: Container component that displays a list of user's habits
- **HabitItem.jsx**: Individual habit card with actions (week view, share, delete)
- **AddHabitForm.jsx**: Form component for creating new habits
- **WeekView.jsx**: Displays a 7-day grid view of a specific habit's progress
- **DayContainer.jsx**: Individual day component with done/not done buttons
- **Report.jsx**: Statistics and reporting dashboard
- **SharedProgress.jsx**: Social feed showing shared habit progress with upvotes
- **Chat.jsx**: Real-time chat component using Firebase
- **Clock.jsx**: Simple clock displaying current time and date

### Database: db.json

The `db.json` file serves as the mock database for JSON Server. It contains three main data arrays:

```json
{
  "habits": [
    {
      "id": "unique_id",
      "name": "Habit Name",
      "userId": "clerk_user_id",
      "week": [
        {
          "date": "2025-10-20",
          "status": "done" | "notDone"
        }
        // ... 7 days total
      ]
    }
  ],
  "shares": [
    {
      "id": "unique_id",
      "userId": "clerk_user_id",
      "userName": "User Name",
      "habitId": "habit_id",
      "habitName": "Habit Name",
      "completion": 50, // percentage
      "comment": "Progress comment",
      "createdAt": "ISO_date_string"
    }
  ],
  "upvotes": [
    {
      "id": "unique_id",
      "shareId": "share_id",
      "userId": "clerk_user_id"
    }
  ]
}
```

**How db.json works:**

- JSON Server automatically creates REST endpoints: GET/POST/PUT/DELETE for each array
- Data persists between server restarts
- Used for development and demo purposes (would be replaced with real database in production)
- Supports filtering (e.g., `/upvotes?shareId=123`)

## Application Flow: Start to Finish

### 1. Entry Point: src/main.jsx

This is where the app begins execution. It sets up the React application with authentication and global styles.

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
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
```

**What it does:**

- Imports React and renders the app into the DOM element with id "root"
- Wraps the app in `ClerkProvider` for authentication context
- Loads global CSS (Bootstrap and Font Awesome)
- Checks for required environment variables

**Links to:** App.jsx (main component), index.html (provides the root div)

### 2. Main App Component: src/App.jsx

This component manages the overall application state, routing, and user authentication.

```jsx
// Main App component handling routing, authentication, and state management for the habit tracker
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useUser, SignIn } from "@clerk/clerk-react";
import Navbar from "./components/Navbar";
import HabitList from "./components/HabitList";
import WeekView from "./components/WeekView";
import AddHabitForm from "./components/AddHabitForm";
import Report from "./components/Report";
import Clock from "./components/Clock";
import { fetchHabits } from "./api";
import SharedProgress from "./components/SharedProgress";

function App() {
  const { isSignedIn, user } = useUser();
  const [habits, setHabits] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(0);

  // Fetch habits when user signs in or when forceUpdate changes
  useEffect(() => {
    if (isSignedIn && user) {
      fetchHabits()
        .then((response) => {
          const userHabits = response.data.filter(
            (habit) => habit.userId === user.id
          );
          setHabits(userHabits);
        })
        .catch((error) => console.error("Error fetching habits:", error));
    } else {
      setHabits([]);
    }
  }, [isSignedIn, user, forceUpdate]);

  // Auto-refresh habits every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setForceUpdate((prev) => prev + 1);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Handler functions for habit management
  const handleAddHabit = (newHabit) => {
    setHabits([...habits, newHabit]);
  };

  const handleUpdateHabit = (updatedHabit) => {
    setHabits(habits.map((h) => (h.id === updatedHabit.id ? updatedHabit : h)));
  };

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
        <Route
          path="/"
          element={
            <div className="container mt-4">
              <h2>Welcome, {user.firstName}!</h2>
            </div>
          }
        />
        <Route
          path="/home"
          element={
            <div className="container mt-4">
              <h2>Welcome, {user.firstName}!</h2>
            </div>
          }
        />
        <Route
          path="/habits"
          element={<HabitList habits={habits} onDelete={handleDeleteHabit} />}
        />
        <Route
          path="/add-habit"
          element={
            <AddHabitForm onAddHabit={handleAddHabit} userId={user.id} />
          }
        />
        <Route
          path="/week-view/:id"
          element={
            <WeekView habits={habits} onUpdateHabit={handleUpdateHabit} />
          }
        />
        <Route path="/report" element={<Report />} />
        <Route path="/shared-progress/:id" element={<SharedProgress />} />
      </Routes>
      <Clock />
    </BrowserRouter>
  );
}

export default App;
```

**What it does:**

- Manages global state for habits and user authentication
- Handles routing with React Router
- Fetches and filters user-specific habits from the API
- Provides handler functions for CRUD operations on habits
- Renders different components based on the current route

**Links to:**

- Clerk for authentication (useUser, SignIn)
- API functions (fetchHabits)
- All components (Navbar, HabitList, etc.)
- Routes to different pages

### 3. Navigation: src/components/Navbar.jsx

Provides navigation links and displays user info.

```jsx
// Navigation bar component with links to different sections of the app
import React from "react";
import { Link } from "react-router-dom";
import { useUser, UserButton } from "@clerk/clerk-react";
import Clock from "./Clock";

const Navbar = () => {
  const { user } = useUser();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Morning";
    if (hour < 17) return "Afternoon";
    if (hour < 21) return "Evening";
    return "Night";
  };

  return (
    <nav className="navbar navbar-dark bg-dark p-3" style={{ height: "100px" }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h1>
          Good {getGreeting()}, {user?.firstName}!
        </h1>
        <div className="d-flex align-items-center">
          <Clock />
          <div className="ms-3">
            <Link className="btn btn-outline-light me-2" to="/home">
              Home
            </Link>
            <Link className="btn btn-outline-light me-2" to="/habits">
              Habits
            </Link>
            <Link className="btn btn-outline-light me-2" to="/add-habit">
              Add Habit
            </Link>
            <Link className="btn btn-outline-light me-2" to="/report">
              Report
            </Link>
            <Link
              className="btn btn-outline-light me-2"
              to="/shared-progress/all"
            >
              All Shared Progress
            </Link>
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

**What it does:**

- Displays personalized greeting based on time of day
- Provides navigation links to all main sections
- Includes user account button for profile management
- Embeds the Clock component

**Links to:** React Router for navigation, Clerk for user data, Clock component

### 4. Habit Management Components

#### HabitList: src/components/HabitList.jsx

Displays a list of user's habits.

```jsx
// Component for displaying a list of user's habits
import React from "react";
import HabitItem from "./HabitItem";

const HabitList = ({ habits, onDelete }) => {
  return (
    <div className="container mt-4">
      <h2>Your Habits</h2>
      {habits.length === 0 ? (
        <p>No habits yet. Add one!</p>
      ) : (
        habits.map((habit) => (
          <HabitItem key={habit.id} habit={habit} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default HabitList;
```

**Links to:** HabitItem component, receives habits and onDelete from App.jsx

#### HabitItem: src/components/HabitItem.jsx

Individual habit display with actions.

```jsx
// Component for displaying individual habits in the list with options to view week, share, or delete
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { deleteHabit as deleteHabitApi, addShare } from "../api";

const HabitItem = ({ habit, onDelete }) => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareComment, setShareComment] = useState("");

  const completedDays = habit.week.filter(
    (day) => day.status === "done"
  ).length;

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this habit?")) {
      deleteHabitApi(habit.id)
        .then(() => {
          onDelete(habit.id);
        })
        .catch((error) => {
          console.error("Error deleting habit:", error);
          alert("Failed to delete.");
        });
    }
  };

  const handleWeekView = () => {
    navigate(`/week-view/${habit.id}`);
  };

  const handleShareView = () => {
    navigate(`/shared-progress/${habit.id}`);
  };

  const handleShare = () => {
    if (!shareComment.trim()) return;
    const completion = Math.round((completedDays / habit.week.length) * 100);
    const shareData = {
      id: Date.now().toString(),
      userId: user.id,
      userName: user.firstName || "Anonymous",
      habitId: habit.id,
      habitName: habit.name,
      completion,
      comment: shareComment,
      createdAt: new Date().toISOString(),
    };
    addShare(shareData)
      .then(() => {
        alert("Habit progress shared publicly!");
        setShareComment("");
        setShowShareModal(false);
      })
      .catch((error) => console.error("Error sharing:", error));
  };

  return (
    <div
      className="habit-item d-flex justify-content-between align-items-center p-3 border rounded mb-2"
      style={{ backgroundColor: "#1c1e29", color: "#fff" }}
    >
      <div>
        {habit.name} - {completedDays}/{habit.week.length} days
      </div>
      <div>
        <button className="btn btn-outline-light me-2" onClick={handleWeekView}>
          Week View
        </button>
        <button className="btn btn-outline-info me-2" onClick={handleShareView}>
          View Shares
        </button>
        <button
          className="btn btn-outline-primary me-2"
          onClick={() => setShowShareModal(true)}
        >
          Share
        </button>
        <button className="btn btn-outline-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
      {/* Share modal omitted for brevity */}
    </div>
  );
};

export default HabitItem;
```

**What it does:**

- Shows habit name and completion stats
- Provides buttons for week view, sharing, and deletion
- Handles sharing logic with modal
- Calculates completion percentage

**Links to:** API functions, React Router for navigation, App.jsx handlers

#### AddHabitForm: src/components/AddHabitForm.jsx

Form for creating new habits.

```jsx
// Form component for adding new habits to the user's list
import React, { useState } from "react";
import { addHabit } from "../api";

const AddHabitForm = ({ onAddHabit, userId }) => {
  const [name, setName] = useState("");

  const generateWeek = () => {
    const week = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      week.push({
        date: date.toISOString().split("T")[0],
        status: "notDone",
      });
    }
    return week;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      const newHabitData = {
        id: Date.now().toString(),
        name,
        week: generateWeek(),
        userId,
      };
      addHabit(newHabitData)
        .then((response) => {
          onAddHabit(response.data);
          setName("");
        })
        .catch((error) => {
          console.error("Error adding habit:", error);
          alert("Failed to add habit.");
        });
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Habit</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Habit Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Habit
        </button>
      </form>
    </div>
  );
};

export default AddHabitForm;
```

**Links to:** API addHabit, App.jsx handleAddHabit

### 5. Week Tracking: src/components/WeekView.jsx and DayContainer.jsx

#### WeekView: Displays the week grid for a habit.

```jsx
// Component for displaying a detailed week view of a specific habit with day-by-day status
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import DayContainer from "./DayContainer";

const WeekView = ({ habits, onUpdateHabit }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const habit = habits.find((h) => h.id === id);

  if (!habit) {
    return (
      <div className="container mt-4">
        <p>Habit not found.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <button
        className="btn btn-secondary mb-3"
        onClick={() => navigate("/habits")}
      >
        Back to Habits
      </button>
      <h2>Week View: {habit.name}</h2>
      <div className="row">
        {habit.week.map((day, index) => (
          <div key={`${habit.id}-${index}`} className="col-md-4">
            <DayContainer
              habit={habit}
              day={day}
              dayIndex={index}
              onUpdateHabit={onUpdateHabit}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekView;
```

**Links to:** DayContainer, App.jsx onUpdateHabit

#### DayContainer: Individual day management.

```jsx
// Component for displaying and updating individual days in a habit's week view
import React from "react";
import { updateHabit } from "../api";

const DayContainer = ({ habit, day, dayIndex, onUpdateHabit }) => {
  const today = new Date().toISOString().split("T")[0];
  const isFuture = day.date > today;

  const handleStatusChange = (status) => {
    if (isFuture) {
      alert("You cannot mark future days!");
      return;
    }
    const updatedWeek = [...habit.week];
    updatedWeek[dayIndex].status = status;
    const updatedHabit = { ...habit, week: updatedWeek };
    updateHabit(habit.id, updatedHabit)
      .then((response) => {
        onUpdateHabit(response.data);
      })
      .catch((error) => {
        console.error("Error updating habit:", error);
        alert("Failed to update.");
      });
  };

  return (
    <div
      className="day-container p-3 border rounded text-center mb-2"
      style={{
        backgroundColor: "#1c1e29",
        color: "#fff",
        opacity: isFuture ? 0.5 : 1,
      }}
    >
      <h5>
        {new Date(day.date).toLocaleDateString("en-US", { weekday: "long" })}
      </h5>
      <p>{day.date}</p>
      <div className="d-flex justify-content-around">
        <button
          className="btn btn-success me-2"
          onClick={() => handleStatusChange("done")}
          disabled={isFuture}
        >
          Mark Done
        </button>
        <button
          className="btn btn-danger"
          onClick={() => handleStatusChange("notDone")}
          disabled={isFuture}
        >
          Mark Not Done
        </button>
      </div>
      <p>Status: {day.status === "done" ? "Done" : "Not Done"}</p>
    </div>
  );
};

export default DayContainer;
```

**Links to:** API updateHabit, WeekView

### 6. Reporting: src/components/Report.jsx

Displays habit statistics.

```jsx
// Component for displaying a report of user's habit completion statistics
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { fetchHabits } from "../api";

const Report = () => {
  const { user } = useUser();
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    if (user) {
      fetchHabits()
        .then((response) => {
          const userHabits = response.data.filter((h) => h.userId === user.id);
          setHabits(userHabits);
        })
        .catch((error) =>
          console.error("Error fetching habits for report:", error)
        );
    }
  }, [user]);

  const getOverallStats = () => {
    const totalCompleted = habits.reduce(
      (sum, h) => sum + h.week.filter((d) => d.status === "done").length,
      0
    );
    const totalDays = habits.reduce((sum, h) => sum + h.week.length, 0);
    return totalDays > 0 ? Math.round((totalCompleted / totalDays) * 100) : 0;
  };

  return (
    <div
      className="container mt-4"
      style={{ backgroundColor: "#1c1e29", color: "#fff" }}
    >
      <h2>Habit Report</h2>
      <p>Overall Completion: {getOverallStats()}%</p>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Habit Name</th>
            <th>Completed Days</th>
            <th>Total Days</th>
            <th>Completion %</th>
          </tr>
        </thead>
        <tbody>
          {habits.map((habit) => {
            const completedDays = habit.week.filter(
              (day) => day.status === "done"
            ).length;
            const totalDays = habit.week.length;
            const completion =
              totalDays > 0 ? Math.round((completedDays / totalDays) * 100) : 0;
            return (
              <tr key={habit.id}>
                <td>{habit.name}</td>
                <td>{completedDays}</td>
                <td>{totalDays}</td>
                <td>{completion}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
```

**Links to:** API fetchHabits, Clerk user

### 7. Social Features: SharedProgress and Chat

#### SharedProgress: src/components/SharedProgress.jsx

Displays shared habit progress with upvotes.

```jsx
// Component for viewing shared habit progress from users, with chat and upvoting features
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useParams } from "react-router-dom";
import {
  fetchShares,
  addUpvote,
  getUpvotesForShare,
  deleteShare,
} from "../api";
import Chat from "./Chat";

const SharedProgress = () => {
  const { user } = useUser();
  const { id } = useParams();
  const [shares, setShares] = useState([]);
  const [upvotes, setUpvotes] = useState({});
  const [habitName, setHabitName] = useState("");

  useEffect(() => {
    fetchShares().then((response) => {
      if (id === "all") {
        setShares(response.data);
        setHabitName("All Habits");
      } else {
        const filteredShares = response.data.filter(
          (share) => share.habitId === id
        );
        setShares(filteredShares);
        if (filteredShares.length > 0) {
          setHabitName(filteredShares[0].habitName);
        }
      }
    });
  }, [id]);

  useEffect(() => {
    shares.forEach((share) => {
      getUpvotesForShare(share.id).then((response) => {
        setUpvotes((prev) => ({ ...prev, [share.id]: response.data.length }));
      });
    });
  }, [shares]);

  const handleUpvote = (shareId) => {
    if (!user) return;
    const upvoteData = { id: Date.now().toString(), shareId, userId: user.id };
    addUpvote(upvoteData).then(() => {
      getUpvotesForShare(shareId).then((response) => {
        setUpvotes((prev) => ({ ...prev, [shareId]: response.data.length }));
      });
    });
  };

  const handleDeleteShare = (shareId) => {
    if (window.confirm("Are you sure you want to delete this share?")) {
      deleteShare(shareId).then(() => {
        setShares(shares.filter((share) => share.id !== shareId));
      });
    }
  };

  return (
    <div
      className="container mt-4"
      style={{ backgroundColor: "#1c1e29", color: "#fff" }}
    >
      <h2>Shared Progress for {habitName}</h2>
      {shares.map((share) => (
        <div key={share.id} className="border rounded p-3 mb-3">
          <h5>
            {share.userName}'s Progress on {share.habitName}
          </h5>
          <p>Completion: {share.completion}%</p>
          <p>Comment: {share.comment}</p>
          <p>
            Upvotes: {upvotes[share.id] || 0}{" "}
            <button
              className="btn btn-sm btn-light"
              onClick={() => handleUpvote(share.id)}
            >
              👍
            </button>
            {share.userId === user?.id && (
              <button
                className="btn btn-sm btn-danger ms-2"
                onClick={() => handleDeleteShare(share.id)}
              >
                Delete Share
              </button>
            )}
          </p>
          <Chat shareId={share.id} />
        </div>
      ))}
    </div>
  );
};

export default SharedProgress;
```

**Links to:** API functions for shares/upvotes, Chat component

#### Chat: src/components/Chat.jsx

Real-time chat using Firebase.

```jsx
// Real-time chat component for sharing progress, allowing users to send and delete messages
import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { ref, onValue, push, remove } from "firebase/database";
import { database } from "../firebase";

const Chat = ({ shareId }) => {
  const { user } = useUser();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const chatRef = ref(database, `chats/${shareId}`);
    onValue(chatRef, (snapshot) => {
      const data = snapshot.val();
      if (data) setMessages(data);
      else setMessages({});
    });
  }, [shareId]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    const chatRef = ref(database, `chats/${shareId}`);
    push(chatRef, {
      userId: user.id,
      userName: user.firstName,
      message: newMessage,
      timestamp: Date.now(),
    });
    setNewMessage("");
  };

  const deleteMessage = (messageId) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      const messageRef = ref(database, `chats/${shareId}/${messageId}`);
      remove(messageRef);
    }
  };

  return (
    <div className="mt-3">
      <h6>Chat</h6>
      <div style={{ maxHeight: "200px", overflowY: "scroll" }}>
        {Object.entries(messages).map(([key, msg]) => (
          <p key={key}>
            <strong>{msg.userName}:</strong> {msg.message}
            {msg.userId === user?.id && (
              <button
                className="btn btn-sm btn-danger ms-2"
                onClick={() => deleteMessage(key)}
              >
                Delete
              </button>
            )}
          </p>
        ))}
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Type a message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button className="btn btn-primary mt-1" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default Chat;
```

**Links to:** Firebase database, Clerk user

### 8. Utility Components

#### Clock: src/components/Clock.jsx

Displays current time and date.

```jsx
// Simple clock component displaying the current time
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString();
  const formattedDate = time.toLocaleDateString();

  return (
    <div
      className="text-center mt-4"
      style={{ fontSize: "14px", color: "#fff" }}
    >
      <p>{formattedTime}</p>
      <p>{formattedDate}</p>
    </div>
  );
};

export default Clock;
```

**Links to:** Navbar (embedded), updates every second

### 9. API and Data Layer

#### api.js: API functions

```jsx
// API functions for handling habit data, shares, and upvotes with the backend
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export const fetchHabits = () => axios.get(`${API_URL}/habits`);
export const addHabit = (habitData) =>
  axios.post(`${API_URL}/habits`, habitData);
export const updateHabit = (id, updatedData) =>
  axios.put(`${API_URL}/habits/${id}`, updatedData);
export const deleteHabit = (id) => axios.delete(`${API_URL}/habits/${id}`);

export const fetchShares = () => axios.get(`${API_URL}/shares`);
export const addShare = (shareData) =>
  axios.post(`${API_URL}/shares`, shareData);
export const deleteShare = (id) => axios.delete(`${API_URL}/shares/${id}`);

export const fetchUpvotes = () => axios.get(`${API_URL}/upvotes`);
export const addUpvote = (upvoteData) =>
  axios.post(`${API_URL}/upvotes`, upvoteData);
export const getUpvotesForShare = (shareId) =>
  axios.get(`${API_URL}/upvotes?shareId=${shareId}`);
```

**What it does:** Provides HTTP functions for all CRUD operations on habits, shares, and upvotes.

**Links to:** JSON Server backend, all components that need data

#### firebase.jsx: Firebase config

```jsx
// Firebase configuration and initialization for real-time database
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
```

**Links to:** Chat component for real-time messaging

#### db.json: Mock database

Contains sample data for habits, shares, and upvotes. Used by JSON Server.

### 10. Configuration and Styling

- **package.json**: Defines dependencies and scripts
- **vite.config.js**: Vite build configuration
- **eslint.config.js**: Linting rules
- **src/index.css**: Global styles
- **src/App.css**: App-specific styles
- **index.html**: HTML template

## Data Flow Summary

1. **Authentication**: Clerk provides user context to App.jsx
2. **Data Fetching**: App.jsx fetches habits via api.js from JSON Server
3. **State Management**: Habits stored in App.jsx state, passed to components
4. **User Actions**: Components call API functions and update App state
5. **Real-time Features**: Chat uses Firebase for live messaging
6. **Persistence**: All data stored in db.json via JSON Server

## User Journey

1. User signs in via Clerk
2. Sees welcome page, navigates to habits
3. Adds habits via AddHabitForm
4. Tracks progress in WeekView using DayContainer
5. Views reports in Report component
6. Shares progress, which appears in SharedProgress with Chat
7. Can upvote others' shares

This comprehensive explanation covers the entire project flow, component interactions, and technical implementation details.
