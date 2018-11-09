import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx'
import TextArea from '../components/TextArea';

export default class CharacterInfo extends Component{
    render() {
        return(
            <div>
              <NavBar CharInfo="nav-item active"/>
              <Jumbotron title="Character Info" subtitle="Characters Background"/>
              
                <div className="container">
                    <TextArea TextLabel="Features and Traits"/>
                    <TextArea TextLabel="Other Proficiencies and Languages"/>
                    <TextArea TextLabel="Flaws"/>
                    <TextArea TextLabel="Bonds"/>
                    <TextArea TextLabel="Ideas"/>
                    <TextArea TextLabel="Personality Traits"/>
                    <TextArea TextLabel="Race"/>
                    <TextArea TextLabel="Character Name"/>
                    <TextArea TextLabel="Alignment"/>
                    <TextArea TextLabel="DCI Number"/>
                    <TextArea TextLabel="Age"/>
                    <TextArea TextLabel="Height"/>
                    <TextArea TextLabel="Weight"/>
                    <TextArea TextLabel="Eyes"/>
                    <TextArea TextLabel="Skin"/>
                    <TextArea TextLabel="Hair"/>
                    <TextArea TextLabel="Alies and Organizations"/>
                    <TextArea TextLabel="Additional Features and Traits"/>
                    <TextArea TextLabel="Character Backstory"/>
                    <TextArea TextLabel="Treasure"/>

                    <Link className="nav-link" to="/CharacterSheet">Check Out Your Character!</Link>  
                </div>
                <Footer/>
            </div>
        );
    }
}