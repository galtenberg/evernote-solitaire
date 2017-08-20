import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {notebooks: []}

  componentDidMount() {
    fetch('/notebooks')
      .then(res => res.json())
      .then(notebooks => this.setState({ notebooks }))
  }

  render() {
    return (
      <div className="App">
        <h1>Notebooks</h1>
        {this.state.notebooks.map(notebook =>
          <div key={notebook.guid}>{notebook.name}</div>
        )}
      </div>
    )
  }
}

export default App
