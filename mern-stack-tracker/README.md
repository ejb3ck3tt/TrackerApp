# MERN Tracker App

A simple MERN stack exercise tracker that supports creating users, logging exercises, editing logs, and deleting records.

## Overview

- Frontend: React (class and hooks components), React Router v6, Bootstrap, axios, react-datepicker.
- Backend: Node.js, Express, MongoDB with Mongoose, dotenv, CORS.
- Persistence: MongoDB Atlas (env connection string `ATLAS_URI`).

## Features

- List all exercises (`GET /exercises`)
- Create exercise (`POST /exercises/add`)
- Get a single exercise (`GET /exercises/:id`)
- Update exercise (`POST /exercises/update/:id`)
- Delete exercise (`DELETE /exercises/:id`)
- List users (`GET /users`)
- Create user (`POST /users/add`)

UI routes:

- `/` exercise list
- `/create` create new exercise
- `/edit/:id` edit existing exercise
- `/user` create user

## Project structure

- `backend/`
  - `server.js` - express app and Slack
  - `models/user.model.js` and `exercise.model.js`
  - `routes/users.js`, `routes/exercises.js`
- `src/`
  - `index.js` - React entry + Router
  - `components/` forms and list
  - `css/index.css` styling

## Setup

### Prerequisites

- Node.js >= 16
- npm
- MongoDB Atlas account or local MongoDB instance

### Backend install

```bash
cd mern-stack-tracker/backend
npm install
```

### Frontend install

```bash
cd ../
npm install
```

### Environment

Create `backend/.env`:

```env
ATLAS_URI="mongodb+srv://<user>:<pass>@cluster0.xyz.mongodb.net/tracker?retryWrites=true&w=majority"
PORT=5000
```

### Run

```bash
cd mern-stack-tracker/backend && npm start
cd ../ && npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Improvements applied

- fixed backend route for exercise retrieval, now `GET /exercises/:id` works
- changed exercise model name from `Excercise` to `Exercise`
- updated edit page to use route param (`/edit/:id`) rather than hard-coded id
- added loading, error, empty states in exercise list and edit form
- added delete confirmation and error handling
- removed outdated `exact` usage in React Router v6

## Notes

- For list editing, use the _Edit_ link from the exercise table.
- If no users exist, use `/user` to create one before creating an exercise.
- Existing dropdown values are loaded from users API in `CreateExercise`.

## Scripts

- `npm start` start client
- `npm run build` build client
- `npm test` run tests (default create-react-app)

Feel free to customize this README for your repo presentation or CI/CD docs.
