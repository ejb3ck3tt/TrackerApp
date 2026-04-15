
# TrackerApp

A simple MERN stack exercise tracker. Users can create profiles, log exercise sessions, edit logs, and delete records.

## Dependencies

- MongoDB Atlas
- React 18.2.0, React Router DOM 6.4.5
- Node.js 16.14.2
- Express.js
- Bootstrap 5.2.3

## Getting Started

```bash
git clone git@github.com:ejb3ck3tt/TrackerApp.git
cd mern-stack-tracker
npm install
```

## Connect to MongoDB Atlas

Create `backend/.env`:

```env
ATLAS_URI=mongodb+srv://[username]:[password]@[clusterName].xxxxxxx.mongodb.net/?retryWrites=true&w=majority
PORT=5000
```

## Run the server

```bash
cd backend
node server.js
```

## Run the frontend

From `mern-stack-tracker/`:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000).

The frontend proxies API requests to the backend at `http://localhost:5000` automatically — no manual URL configuration needed.
