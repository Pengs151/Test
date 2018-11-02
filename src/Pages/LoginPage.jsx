import React, {Component} from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx'
import AccountLogin from '../components/AccountLogin';

export default class LoginPage extends Component{
    render() {
        return(
            <div>
              <NavBar LoginAccount="nav-item active" />
              <Jumbotron title="Login"/>
              <div className="LoginSize">
              <AccountLogin/>
              </div>
              <Footer/>
               

            </div>
        );
    }
}