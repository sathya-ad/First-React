import React from 'react';
import TodoItem from './TodoItem';

class Todo extends React.Component {
  render() {
    console.log(this.props.todo);
    return this.props.todo.map((todo) => {
      <TodoItem key={todo.id} todo={todo}/>
    });
  }
}

Todo.prototype = {
  todo: prototype.array.isRequired
};

export default Todo;
