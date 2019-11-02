import React from 'react';
import './App.css';
import Todo from './components/Todo';

class App extends React.Component {
  // eslint-disable-next-line no-undef

  state = {
    todo: [
      {
        id: 1,
        title: 'complete the view',
        completed: false
      },
      {
        id: 2,
        title: 'start with the party',
        completed: false
      },
      {
        id: 3,
        title: 'sleep tight',
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <Todo todo={this.state.todo}/>
      </div>
    );
  }
}

export default App;
