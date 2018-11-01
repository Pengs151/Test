import React, {Component} from 'react';
import './Footer.css'

export default class Footer extends Component {
    render() {
        return(
            <footer className="footer">
      <div className="container">
        <span className="text-muted">My Website &#169; {new Date().getFullYear()}</span>
      </div>
    </footer>
        );
    }
}