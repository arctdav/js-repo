import React from "react";
import List from "./List";
import Form from "./Form";
import { Row } from "react-bootstrap";

const TodoApp = () => (
  <div style={{flex: 1, flexDirection: Row}}>
    <h2>Tasks</h2>
    <List />
    <h2>Add a New Task</h2>
    <Form />
  </div>
);
export default TodoApp;