import React, { Component } from "react";
import ToDoInput from "./Components/TODOInput";
import ToDoList from "./Components/ToDoList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "react-uuid";
// import { render } from "@testing-library/react";
class App extends Component {
  state = {
    items: [{id:1, text:"Hello"}],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("in HandleSubmit");
    const newItem = {
      id: this.state.id,
      text: this.state.item
    };
    fetch('http://localhost:8088/tasks', {
      method: 'post',
      body: JSON.stringify(newItem)
     })
     .then(res => res.json())
    .then((data) => {
      this.setState({ items: data })
    })
    .catch(console.log)
  };
  componentDidMount() {
    fetch('http://localhost:8088/tasks')
    .then(res => res.json())
    .then((data) => {
      this.setState({ items: data })
    })
    .catch(console.log)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4 ">
            <h3 className="text-capitalize text-center">To Do Input</h3>
            <ToDoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              />
              <ToDoList list={this.state.items}/>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default App;