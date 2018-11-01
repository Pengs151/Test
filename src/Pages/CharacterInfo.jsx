import React, {Component} from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx'


export default class CharacterInfo extends Component{
    render() {
        return(
            <div>
              <NavBar CharInfo="nav-item active" />
              <Jumbotron title="Character Info" subtitle="Characters Background"/>
              <Footer/>
                <div className="container">
                
                    <h2>Character Info</h2>
                    <p>hello and welcome to this dungeons and dragons beginner tutorial here you 
                    can build a character and later on after it is done you will be able to have 
                    a guided tutorial for battle
                    </p>
                    
                </div>

            </div>
        );
    }
}