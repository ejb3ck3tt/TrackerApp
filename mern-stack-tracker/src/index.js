import * as React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import CreateUser from "./components/CreateUser";
import ExerciseList from "./components/ExcerciseList";
import CreateExercise from "./components/CreateExercise";
import Navbar from "./components/Navbar";
import EditExercise from "./components/EditExercise";
import ExercisesList from "./components/ExcerciseList";
import "./css/index.css";

export default function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar />
      <main className="py-3">
        <div className="container">
          <Routes>
            <Route path="/" element={<ExerciseList />} exact />
            <Route
              path="/edit/:id"
              element={<EditExercise data={ExercisesList} />}
            />
            <Route path="/create" element={<CreateExercise />} />
            <Route path="/user" element={<CreateUser />} />
          </Routes>
        </div>
      </main>
      {/* </BrowserRouter> */}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Router> */}
      <App />
    </BrowserRouter>
    {/* </Router> */}
  </React.StrictMode>
);
