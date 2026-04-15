# MERN Tracker App

A MERN stack exercise tracker that supports creating users, logging exercises, editing logs, and deleting records.

## Overview

- **Frontend**: React (functional components with hooks), React Router v6, Bootstrap 5, axios, react-datepicker
- **Backend**: Node.js, Express, MongoDB with Mongoose, dotenv, CORS
- **Persistence**: MongoDB Atlas (env connection string `ATLAS_URI`)

## Features

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/exercises` | List all exercises |
| POST | `/exercises/add` | Create an exercise |
| GET | `/exercises/:id` | Get a single exercise |
| POST | `/exercises/update/:id` | Update an exercise |
| DELETE | `/exercises/:id` | Delete an exercise |
| GET | `/users` | List all users |
| POST | `/users/add` | Create a user |

## UI Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | ExerciseList | View all exercise logs |
| `/create` | CreateExercise | Log a new exercise |
| `/edit/:id` | EditExercise | Edit an existing log |
| `/user` | CreateUser | Create a user profile |

## Project Structure

```
mern-stack-tracker/
├── backend/
│   ├── server.js               # Express app setup and MongoDB connection
│   ├── models/
│   │   ├── user.model.js       # User schema (username, timestamps)
│   │   └── exercise.model.js   # Exercise schema (username, description, duration, date)
│   └── routes/
│       ├── users.js            # User API routes
│       └── exercises.js        # Exercise API routes
└── src/
    ├── index.js                # React entry point and router config
    ├── components/
    │   ├── Navbar.js           # Navigation bar
    │   ├── ExcerciseList.js    # Exercise table with edit and delete actions
    │   ├── CreateExercise.js   # Form to log a new exercise
    │   ├── EditExercise.js     # Form to edit an existing exercise
    │   └── CreateUser.js       # Form to create a user
    └── css/
        └── index.css           # Custom styles
```

## Setup

### Prerequisites

- Node.js >= 16
- npm
- MongoDB Atlas account (or local MongoDB instance)

### Backend

```bash
cd mern-stack-tracker/backend
npm install
```

Create `backend/.env`:

```env
ATLAS_URI="mongodb+srv://<user>:<pass>@cluster0.xyz.mongodb.net/tracker?retryWrites=true&w=majority"
PORT=5000
```

### Frontend

```bash
cd mern-stack-tracker
npm install
```

### Run

```bash
# Terminal 1 — backend
cd mern-stack-tracker/backend && node server.js

# Terminal 2 — frontend
cd mern-stack-tracker && npm start
```

Open [http://localhost:3000](http://localhost:3000).

The frontend is configured with a proxy to `http://localhost:5000`, so no manual URL configuration is needed during development.

## Notes

- Create at least one user at `/user` before logging an exercise — the create exercise form will prompt you if no users exist.
- Use the _Edit_ link in the exercise table to update a log.

## Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start the React dev server |
| `npm run build` | Production build |
| `npm test` | Run tests (Create React App default) |

## Improvements Applied

- Fixed backend route for single exercise retrieval (`GET /exercises/:id`)
- Fixed exercise model name from `Excercise` to `Exercise`
- Updated edit page to use route param (`/edit/:id`) rather than a hard-coded ID
- Added loading, error, and empty states across all components
- Added delete confirmation and error handling in ExerciseList
- Removed outdated `exact` prop usage (React Router v6)
- Added `proxy` to `package.json` — all API calls now use relative paths, no hard-coded `localhost` URLs
- Converted `CreateUser` and `CreateExercise` from class components to functional components with hooks
- Replaced `window.location` redirects with `useNavigate()` for proper SPA navigation
- Fixed duration input from `type="text"` to `type="number"` with `min="1"` in CreateExercise
- Added error and loading states to `CreateUser` and `CreateExercise` forms
- Added empty-users guard in `CreateExercise` — shows a prompt linking to `/user` if no users exist
- Fixed date serialisation — dates are sent as ISO strings via `.toISOString()` in both create and edit forms
- Removed hard-coded `API_BASE` constant from `EditExercise`
