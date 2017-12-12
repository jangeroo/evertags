import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import backend from './backend'


class App extends Component {
  state = { tagTrees: null }

  async componentWillMount() {
    backend.getAllTags().then(tags => {
      this.setState({ tagTrees: backend.allTagTrees(tags) })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        Trees start with these root tags:

        {this.state.tagTrees
          ? this.state.tagTrees.map((tag, i) => (<div key={i}>{tag.name} ({tag.guid})</div>))
          : 'Loading tags...'}
        {this.state.tagTrees ? console.log(this.state.tagTrees) : null}
      </div>
    );
  }
}

export default App;
