import React, { Component } from 'react';

class TodoList extends Component {
  state = {
    inputValue: "",
    todoList: [
      {
        id: 1,
        task: "Do Homework"
      },
      {
        id: 2,
        task: "Swimming"
      },
      {
        id: 3,
        task: "Shopping"
      }
    ]
  };

  createNewTask = () => {
    const newTask = this.state.inputValue;
    const newTodoList = [...this.state.todoList];
    newTodoList.push({ task: newTask, id: Math.round(Math.random() * 1000) });
    this.setState({ todoList: newTodoList });
    this.setState({ inputValue: "" });
  };

  // deleteTask = (id) => {
  //   const newTodoList = [...this.state.todoList];
  //   const targetTodoIdx = newTodoList.findIndex(e => e.id === id);
  //   newTodoList.splice(targetTodoIdx, 1);
  //   this.setState({todoList: newTodoList});
  // }

  deleteTask = (id) => {
    const newTodoList = this.state.todoList.filter((e) => (e.id !== id))
    this.setState({todoList: newTodoList});
  };

  editTask

  render() {
    const { todoList, inputValue } = this.state;

    return (
      <div>
        <div>
          <input
            value={inputValue}
            onChange={e => this.setState({ inputValue: e.target.value })}
          />
          <button onClick={this.createNewTask}>Add todo</button>
        </div>
        <div style={{ textAlign:"start"}}>
          <ul style={{ width: "400px", margin: "0 auto" }}>
            {todoList.map(({ id, task }) => (
              <li key={id} >
                {task}
                <button onClick={() => this.deleteTask(id)} style={{margin:"auto auto auto 1em"}}>Delete</button>
              </li>))
            }
          </ul>
        </div>
      </div>
    )
  }
}
export default TodoList;