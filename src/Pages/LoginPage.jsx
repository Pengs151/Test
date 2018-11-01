import React, {Component} from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx'


export default class LoginPage extends Component{
    render() {
        return(
            <div>
              <NavBar LoginAccount="nav-item active"/>
              <Jumbotron title="Login" subtitle="this is where you will be able to login"/>
              <Footer/>
                <div className="container">
                
                    <h2>Welcome</h2>
                    <p>yo this is actually updating
                    </p>
                    
                </div>

            </div>
        );
    }
}