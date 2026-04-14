import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateExercise = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(1);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("/users/")
      .then((response) => {
        if (response.data.length > 0) {
          setUsers(response.data.map((user) => user.username));
          setUsername(response.data[0].username);
        }
      })
      .catch((err) => {
        setError("Failed to load users.");
        console.error(err);
      });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const exercise = {
      username,
      description,
      duration,
      date: date.toISOString(),
    };

    try {
      await axios.post("/exercises/add", exercise);
      navigate("/");
    } catch (err) {
      setError("Failed to create exercise. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forms">
      <h3>Create New Exercise Log</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          {users.length === 0 ? (
            <div className="alert alert-warning mt-1">
              No users found. <a href="/user">Create a user</a> before logging an exercise.
            </div>
          ) : (
            <select
              required
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            >
              {users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          )}
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="number"
            min="1"
            required
            className="form-control"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker selected={date} onChange={(value) => setDate(value)} />
          </div>
        </div>
        <div className="form-group form-btn">
          <input
            type="submit"
            value={loading ? "Saving..." : "Create Exercise Log"}
            disabled={loading || users.length === 0}
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateExercise;
