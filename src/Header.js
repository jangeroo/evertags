import React, { Component } from 'react';
import logo from './evernote.svg';
import './Header.css';


class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Header-header">
          <img src={logo} className="Header-logo" alt="logo" />
          <h1 className="Header-title">Welcome to Evertags</h1>
          <h2 className="Header-intro">The missing "File explorer" for Evernote tags.</h2>
        </header>
      </div>
    );
  }
}

export default Header;
