import React, { Component } from 'react'
// import { Outlet } from 'react-router-dom'

export default class CreateUser extends Component {
  constructor(props) {
    super(props)

    this.onChangeUsername = this.onChangeUsername.bind(this)

    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      username: '',
    }
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const user = {
      username: this.state.username,
    }
    console.log(user)

    this.setState({
      username: '',
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <br />
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="fom-group">
            <br />
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    )
  }
}
