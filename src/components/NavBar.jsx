import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default class Navbar extends Component {
    render() {
        return(
      <nav className="navbar navbar-expand-md navbar-dark static-top bg-dark">
      <Link className="navbar-brand" to="/">Solo Lobo</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> 
      <div className="container">
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className={this.props.BuildaChar}>
            <Link className="nav-link" to="/CharacterBuilder">Build a Character <span className="sr-only">(current)</span></Link>
          </li>
          <li className={this.props.CharInfo}>
            <Link className="nav-link" to="/CharacterInfo">Character Info</Link>
          </li>
          <li className={this.props.LoginAccount}>
            <Link className="nav-link" to="/LoginPage">Login</Link>
          </li>
          <li className={this.props.BattleHelper}>
            <Link className="nav-link" to="/BattleHelper">Battle Helper</Link>
          </li>
        </ul>
       </div>
        <form className="form-inline mt-2 mt-md-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </div>
        
    </nav>
    );
    }
}