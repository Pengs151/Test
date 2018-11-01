import React, {Component} from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx'


export default class CharacterBuilder extends Component{
    render() {
        return(
            <div>
              <NavBar BuildaChar="nav-item active"/>
              <Jumbotron title="Character Builder" subtitle="EZ PZ"/>
              <Footer/>
                <div className="container">
                
                    <h2>Character Builder</h2>
                    <p>This is the character builder page
                    </p>
                    
                </div>

            </div>
        );
    }
}