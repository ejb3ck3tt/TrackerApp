import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const API_BASE = "http://localhost:5000";

const EditExercise = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const [exerciseRes, usersRes] = await Promise.all([
          axios.get(`${API_BASE}/exercises/${id}`),
          axios.get(`${API_BASE}/users`),
        ]);

        const exercise = exerciseRes.data;
        setUsername(exercise.username);
        setDescription(exercise.description);
        setDuration(exercise.duration);
        setDate(new Date(exercise.date));

        setUsers(usersRes.data.map((user) => user.username));
      } catch (err) {
        setError("Failed to load exercise or users");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!username || !description || duration <= 0) {
      setError("Username, description, and duration must be valid");
      return;
    }

    const exercise = { username, description, duration, date };

    try {
      await axios.post(`${API_BASE}/exercises/update/${id}`, exercise);
      navigate("/");
    } catch (err) {
      setError("Failed to update exercise");
      console.error(err);
    }
  };

  if (loading) return <div>Loading exercise...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="forms">
      <h3>Edit Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
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
            value="Update Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditExercise;
