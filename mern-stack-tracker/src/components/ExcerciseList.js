/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Exercise = (props) => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}>edit</Link> |
      <a
        href="#"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [], loading: true, error: "" };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => {
        this.setState({ exercises: response.data, loading: false });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ loading: false, error: "Failed to load exercises" });
      });
  }

  deleteExercise(id) {
    if (!window.confirm("Delete this exercise?")) return;

    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then((response) => {
        console.log(response.data);
        this.setState({
          exercises: this.state.exercises.filter((el) => el._id !== id),
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error: "Failed to delete exercise." });
      });
  }

  exerciseList() {
    return this.state.exercises.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  }

  render() {
    const { exercises, loading, error } = this.state;

    if (loading) return <div>Loading exercises...</div>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    return (
      <div>
        <h3>Logged Exercises</h3>
        {exercises.length === 0 ? (
          <div className="alert alert-info">No exercises found. Please add one.</div>
        ) : (
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Username</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{this.exerciseList()}</tbody>
          </table>
        )}
      </div>
    );
  }
}
