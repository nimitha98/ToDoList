import React, { Component } from "react";

export default class ToDoItem extends Component {
  render() {
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6> {this.props.text}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success">
            <i className="fa fa-pencil"></i>
          </span>
          {this.props.status}
          <span className="mx-2 text-danger">
            <i className="fa fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}
