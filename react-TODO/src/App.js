import React from "react"
import Footer from "./components/footer"
import Header from "./components/header"
import Todoitem from "./components/todoitem"
import todoData from "./components/todoData"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }




  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        return {
          id: todo.id,
          text: todo.text,
          completed: todo.id === id ? !todo.completed : todo.completed
        };
      });

      return {
        todos: updatedTodos
      };
    });
  }





  render() {
    const todoItems = this.state.todos.map(item => <Todoitem key={item.id} item={item} handleChange={this.handleChange} />)

    return (
      <div className="todo-list" >
        {/* <Header /> */}
        {todoItems}



      </div >
    )
  }
}
export default App


