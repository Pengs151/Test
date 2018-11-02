import React, {Component} from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx'


export default class StepBuilder extends Component{
    render() {
        return(
            <div>
              <NavBar StepBuilder="nav-item active" />
              <Jumbotron title="Character Builder Helper" subtitle="Step by Step guide"/>
              <Footer/>
                <div className="container">
                
                    <h2>Welcome</h2>
                    <p>This is where the Character Builder helper Goes
                    </p>
                    
                </div>

            </div>
        );
    }
}