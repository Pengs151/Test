import React, {Component} from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Home.css';


export default class Home extends Component{
    render() {
        return(
            <div>
              <NavBar />
              <Jumbotron title="WELCOME" subtitle="THIS IS THE HOMEPAGE"/>
              
                <div className="container">
                
                    <h2>Welcome BOB</h2>
                        
                </div>
                <Footer/>
            </div>
            
        );
    }
}