import React, { Component } from "react";

export default class TODOInput extends Component {
  render() {
    return (
      <div className="card card-body my-3">
        <form onSubmit={this.props.handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white input-block">
                <i className="fa fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              value={this.props.item}
              onChange={this.props.handleChange}
              placeholder="Add a To-Do Item"
            />
          </div>
        </form>
        <button type="submit" onClick={this.props.handleSubmit} className="btn btn-block mt-4 btn-primary">
          Add Item
        </button>
      </div>
    );
}
}
