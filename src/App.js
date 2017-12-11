import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import TreeNode from './TreeNode'
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
        {this.state.tagTrees
          ? this.state.tagTrees.map((tree,idx) => (<TreeNode node={tree} key={idx} />))
          : 'Loading tags...'}
      </div>
    );
  }
}

export default App;
