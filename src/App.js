import React, { Component } from 'react';
import './App.css';
import Header from './Header'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TagList tags={this.props.tags} />
      </div>
    );
  }
}

var TagList = ({ tags }) => (
  <div>
    {tags.map((tag, index) => (
      <div key={index}>
        {tag.name} ({tag.guid}) {tag.parentGuid ? `-> nested under ${tag.parentGuid}` : null}
      </div>
    ))}
  </div>
)

export default App;
