import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeProject = this.onChangeProject.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email:'',
      project: ''
    }
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangeProject(e) {
    this.setState({
      project: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const project = {
      email: this.state.email,
      project: this.state.project
    }

    axios.post('http://localhost:3000/projects/add', project)
      .then(res => console.log(res.data));

    this.setState({
      email: '',
      project: ''
    })
  }

  render() {
    return (
<div className="container">
    <div className="alert alert-primary">
        <h3>Add Project</h3>
        </div>
        <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
            <label>Email: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
          </div>
          <div className="form-group"> 
            <label>Project: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.project}
                onChange={this.onChangeProject}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}