import React, { Component } from 'react';
import logo from './evernote.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Evertags</h1>
        </header>
        <p className="App-intro">
          The missing "File explorer" for Evernote tags.
        </p>
        <div>
          {this.props.tags.map((tag, index) => (
            <div key={index}>
              {tag.name} ({tag.guid}) {tag.parentGuid ? `-> nested under ${tag.parentGuid}` : null}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
