import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateUser = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post("/users/add", { username });
      navigate("/");
    } catch (err) {
      setError("Failed to create user. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forms">
      <h3>Create New User</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={onSubmit}>
        <div className="form-group mb-3">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value={loading ? "Creating..." : "Create User"}
            disabled={loading}
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
