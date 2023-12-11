import React from "react";
import AddToDo from "./AddToDo";
import "./ListToDo.scss";
import { toast } from "react-toastify";

class ListToDo extends React.Component {
  state = {
    editTodo: {},
    listToDos: [
      {
        id: "todo1",
        title: "Do tutorial",
      },
      {
        id: "todo2",
        title: "Homework",
      },
      {
        id: "todo3",
        title: "Do task of the day",
      },
    ],
  };

  addNewToDo = (toDo) => {
    // let currentListToDo = this.state.listToDos;
    // currentListToDo.push(toDo);
    this.setState({
      listToDos: [...this.state.listToDos, toDo],
      // listToDos: currentListToDo,
    });
    toast.success("Add todo success");
  };

  handleEditToDo = (todo) => {
    let { editTodo, listToDos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    if (isEmptyObj === false && editTodo.id === todo.id) {
      // let currentTodos = listToDos.filter((item) => item.id !== todo.id);
      // currentTodos.push(editTodo);
      let listToDoCopy = [...listToDos];

      let index = listToDoCopy.findIndex((item) => item.id == todo.id);

      listToDoCopy[index].title = editTodo.title;

      this.setState({
        listToDos: listToDoCopy,
        editTodo: {},
      });

      toast.success("Update Todo success!");
      return;
    }
    this.setState({
      editTodo: todo,
    });
  };

  handleDeleteToDo = (todo) => {
    let currentTodos = this.state.listToDos;
    console.log(currentTodos);
    console.log(todo);
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);

    this.setState({
      listToDos: currentTodos,
    });
    toast.success("Delete Todo Success!");
  };

  handleOnChangeEditTodo = (event) => {
    let editToDoCopy = { ...this.state.editTodo };
    editToDoCopy.title = event.target.value;
    this.setState({ editTodo: editToDoCopy });
  };

  render() {
    let { listToDos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <div className="list-todo-container">
        <AddToDo addNewToDo={this.addNewToDo} />
        <div className="list-todo-content">
          {listToDos &&
            listToDos.length > 0 &&
            listToDos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  {isEmptyObj === false && editTodo.id === item.id ? (
                    <span>
                      {index + 1} -{" "}
                      <input
                        onChange={(event) => {
                          this.handleOnChangeEditTodo(event);
                        }}
                        value={editTodo.title}
                      />
                    </span>
                  ) : (
                    <span>
                      {index + 1} - {item.title}
                    </span>
                  )}
                  <button
                    className="edit"
                    onClick={() => {
                      this.handleEditToDo(item);
                    }}
                  >
                    {isEmptyObj === false && editTodo.id === item.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  {isEmptyObj === false && editTodo.id === item.id ? (
                    <></>
                  ) : (
                    <button
                      className="delete"
                      onClick={() => this.handleDeleteToDo(item)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default ListToDo;
