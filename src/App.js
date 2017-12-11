import axios from 'axios'
import React, { Component } from 'react';
import './App.css';
import Header from './Header'


class App extends Component {
  state = { tags: null }

  componentWillMount() {
    axios.get('/tags').then(response => {
      this.setState({ tags: response.data })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.tags ?
          this.state.tags.map((tag, i) => (<div key={i}>{tag.name} ({tag.guid})</div>)) :
          'Loading tags...'}
      </div>
    );
  }
}

export default App;
