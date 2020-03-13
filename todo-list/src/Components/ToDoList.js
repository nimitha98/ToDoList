import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
export default class ToDoList extends Component {
  render() {
    let items =this.props.list.map((item, itemIndex) => {
            return <ToDoItem
                id={item.id}
                text={item.text}
                status={item.status}/>
        });
    
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">To Do List</h3>
        </ul>
        {items}
        <button className="btn-block btn-danger p-2 btn">Clear List</button>
      </div>
    );
  }
}
