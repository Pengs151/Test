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
            <Link className="nav-link" to="/CharacterBuilder">Character Stats <span className="sr-only">(current)</span></Link>
          </li>
          <li className={this.props.CharInfo}>
            <Link className="nav-link" to="/CharacterInfo">Character Background</Link>
          </li>
          <li className={this.props.StepBuilder}>
            <Link className="nav-link" to="/stepBuilderRace">Character Builder Helper</Link>
          </li>
          
          <li className={this.props.CharacterSheet}>
            <Link className="nav-link" to="/CharacterSheet">Character Sheet </Link>
            </li>
            <li className={this.props.LoginAccount}>
            <Link className="nav-link" to="/LoginPage">Login</Link>
          </li>
        </ul>
       </div>
     
        </div>
        
    </nav>
    );
    }
}